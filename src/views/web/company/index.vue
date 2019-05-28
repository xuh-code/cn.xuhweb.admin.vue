<template>
  <div class="execution">
    <basic-container>
      <avue-crud
        ref="crud"
        :page="page"
        :data="tableData"
        :table-loading="tableLoading"
        :option="tableOption"
        @on-load="getList"
        @refresh-change="refreshChange"
        @row-del="rowDel"
      >
        <template
          slot-scope="scope"
          slot="type"
        >
          <el-tag>{{scope.label}}</el-tag>
        </template>

        <template
          slot-scope="scope"
          slot="menu"
          plain
          v-if="web_company_edit"
        >
          <el-button
            @click="editClick(scope.row)"
            icon="el-icon-edit"
            size="small"
          >编辑</el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import {
  fetchList,
  getObj,
  addObj,
  putObj,
  delObj
} from '@/api/web/company'
import {
  tableOption
} from '@/const/crud/web/company'
import {
  mapGetters
} from 'vuex'

export default {
  name: 'company',
  data() {
    return {
      tableData: [],
      web_company_edit: false,
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20 // 每页显示多少条
      },
      tableLoading: false,
      tableOption: tableOption
    }
  },
  created() {
    this.web_company_edit = this.permissions.web_company_edit;
  },
  mounted: function () {
  },
  computed: {
    ...mapGetters(['permissions']),
    permissionList() {
      return {
      };
    }
  },
  methods: {
    getList(page, params) {
      this.tableLoading = true
      fetchList(Object.assign({
        current: page.currentPage,
        size: page.pageSize
      }, params)).then(response => {
        this.tableData = response.data.data.records
        this.tableData.forEach(child => {
          let content = child.content;
          this.$set(child, 'content', content.replace(/<.+?>/g, ''));
        });
        this.page.total = response.data.data.total
        this.tableLoading = false
      })
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
        this.getList(this.page)
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
    editClick(scope) {
      console.log(scope);
      this.$router.push({ path: '/web/company/edit', query: { id: scope.id } });
    },
  }
}
</script>

<style lang="scss" scoped>
tbody tr td {
  max-height: 150px;
}
</style>
