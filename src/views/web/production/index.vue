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
      >
        <!-- 添加按钮 -->
        <template slot="menuLeft">
          <el-button
            v-if="web_production_add"
            class="filter-item"
            @click="handleCreate"
            size="small"
            type="primary"
            icon="el-icon-edit"
          >添加
          </el-button>
        </template>

        <template
          slot-scope="scope"
          slot="menu"
        >
          <el-button
            v-if="web_production_edit"
            class="filter-item"
            icon="el-icon-edit"
            type="text"
            @click="handleEdit(scope)"
            size="small"
          >修改</el-button>
          <el-button
            v-if="web_production_del"
            size="small"
            type="text"
            icon="el-icon-delete"
            @click="rowDel(scope.row,scope.index)"
          >删除
          </el-button>
        </template>
        <!-- 富文本编辑 -->
        <!-- <template
          slot-scope="scope"
          slot="content"
        >
          <el-tag>{{ scope.row.content }}</el-tag>
        </template> -->
        <!-- <template
          slot-scope="scope"
          slot="contentForm"
        >
          <avue-ueditor v-model="scope.row.content"></avue-ueditor>
        </template> -->

        <!-- 类型 -->
        <template
          slot="prodTypeTitle"
          slot-scope="scope"
        >
          <span>
            <el-tag>{{scop.row.prodTypeTitle}}</el-tag>
          </span>
        </template>
        <template
          slot="author"
          slot-scope="scope"
        >
          <el-tag>{{scop.row.author}}</el-tag>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { fetchList, getObj, delObj } from '@/api/web/production'
import { tableOption } from '@/const/crud/web/production'
import { mapGetters } from 'vuex'
import { typeList } from '@/api/web/typeinfo'

export default {
  name: 'production',
  data() {
    return {
      tableData: [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20 // 每页显示多少条
      },
      tableLoading: false,
      tableOption: tableOption,
      dicData: [],
      username: '',
      typeProps: {
        label: "title",
        value: 'id'
      },
      web_production_edit: false,
      web_production_del: false,
      web_production_add: false,
    }
  },
  created() {
    this.web_production_add = this.permissions.web_production_add;
    this.web_production_edit = this.permissions.web_production_edit;
    this.web_production_del = this.permissions.web_production_del;
  },
  mounted: function () {
  },
  computed: {
    ...mapGetters(['permissions']),
    ...mapGetters(['userInfo']),
  },
  methods: {
    getTypeList() {
      typeList(Object.assign({
        current: 1,
        size: 25,
      }, {})).then(response => {
        this.dicData = response.data.data.records;
      })
    },
    getList(page, params) {
      this.getTypeList(this.page);
      this.tableLoading = true
      fetchList(Object.assign({
        current: page.currentPage,
        size: page.pageSize
      }, params)).then(response => {
        this.tableData = [];
        this.page.total = response.data.data.total
        this.tableLoading = false
        response.data.data.records.forEach(child => {
          this.$set(child, 'content', child.content.replace(/<.+?>/g, ''));
          this.dicData.forEach(dict => {
            if (child.prodType == dict.id) {
              this.$set(child, 'prodTypeTitle', dict.title)
            }
          });
          this.tableData.push(child);
        });
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
    handleCreate() {
      this.$router.push({ path: '/web/production/add' });
    },
    handleEdit(scope) {
      this.$router.push({ path: '/web/production/edit', query: { id: scope.row.id } });
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
    /**
     * 刷新回调
     */
    refreshChange() {
      this.getList(this.page)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
