<template>
  <div class="execution">
    <basic-container>
      <div style="display:flex">
        <avue-tree
          :data="summaryList"
          :option="treeOption"
          @node-click="nodeClick"
        >

        </avue-tree>
        <avue-crud
          ref="crud"
          :page="page"
          :data="tableData"
          :permission="permissionList"
          :table-loading="tableLoading"
          :option="tableOption"
          @refresh-change="refreshChange"
          @row-update="handleUpdate"
          @row-save="handleSave"
          @row-del="rowDel"
        >
          <template
            slot="parentTitle"
            slot-scope="scope"
          >
            {{scop.row.parentTitle}}
          </template>

          <template
            slot-scope="scope"
            slot="parentTitleForm"
          >
            <avue-crud-select
              v-model="scope.row.parentId"
              type="select"
              placeholder="请选择父节点"
              :props="defaultProps"
              :dic="summaryList"
            ></avue-crud-select>
          </template>
        </avue-crud>
      </div>
    </basic-container>
  </div>
</template>

<script>
import { fetchList, getObj, addObj, putObj, delObj } from '@/api/web/summaryitem'
import { findParentList } from '@/api/web/summary'
import { tableOption } from '@/const/crud/web/summaryitem'
import { mapGetters } from 'vuex'

export default {
  name: 'summaryitem',
  data() {
    return {
      treeOption: {
        nodeKey: 'id',
        addBtn: false,
        menu: false,
        props: {
          value: 'id',
          label: 'title',
        }
      },
      defaultProps: {
        id: 'id',
        value: 'id',
        label: "title",
      },
      tableData: [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20 // 每页显示多少条
      },
      tableLoading: false,
      tableOption: tableOption,
      summaryList: [],
      summaryTree: [],
      summary: {},
    }
  },
  created() {
    this.getSummaryList();
  },
  mounted: function () {
  },
  computed: {
    ...mapGetters(['permissions']),
    permissionList() {
      return {
        addBtn: this.vaildData(this.permissions.web_summaryitem_add, false),
        delBtn: this.vaildData(this.permissions.web_summaryitem_del, false),
        editBtn: this.vaildData(this.permissions.web_summaryitem_edit, false)
      };
    }
  },
  methods: {
    getList(page, params) {
      this.tableLoading = true
      fetchList(Object.assign({
        current: page.currentPage,
        size: page.pageSize,
      }, params)).then(response => {
        this.tableData = [];
        response.data.data.records.forEach(element => {
          var parentTitle = '';
          this.summaryList.forEach(summary => {
            if (element.parentId == summary.id) {
              this.$set(element, 'parentTitle', summary.title)
            }
          });
          this.tableData.push(element);
        });

        this.page.total = response.data.data.total
        this.tableLoading = false
      })
    },
    getSummaryList(page, params) {
      findParentList(Object.assign({
        current: 1,
        size: 25,
      }, params)).then(response => {
        this.summaryList = response.data.data.records;
      })
    },
    nodeClick(data) {
      this.page.currentPage = 1;
      this.getList(this.page, { parentId: data.id });
    },
    rowDel: function (row, index) {
      var _this = this
      this.$confirm('是否确认删除ID为' + row.id, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        return delObj(row.id)
      }).then(data => {
        _this.tableData.splice(index, 1)
        _this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        })
        this.getList(this.page, this.summary)
      }).catch(function (err) {
      })
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate: function (row, index, done) {
      putObj(row).then(data => {
        this.tableData.splice(index, 1, Object.assign({}, row))
        this.$message({
          showClose: true,
          message: '修改成功',
          type: 'success'
        })
        done()
        this.getList(this.page)
      })
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave: function (row, done) {
      addObj(row).then(data => {
        this.tableData.push(Object.assign({}, row))
        this.$message({
          showClose: true,
          message: '添加成功',
          type: 'success'
        })
        done()
        this.getList(this.page)
      })
    },
    /**
     * 刷新回调
     */
    refreshChange() {
      this.getList(this.page)
    },
  }
}
</script>

<style lang="scss">
.user {
  height: 100%;

  &__tree {
    padding-top: 3px;
    padding-right: 20px;
  }

  &__main {
    .el-card__body {
      padding-top: 0;
    }
  }
}
</style>


