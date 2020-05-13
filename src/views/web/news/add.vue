<template>
  <div class="execution">
    <basic-container>
      <avue-form
        ref="form"
        v-model="news"
        :option="option"
        @submit="submit"
      >
        <!-- 内容 -->
        <template
          slot-scope="scope"
          slot="content"
        >
          <avue-ueditor
            v-model="news.content"
            :upload="upload"
          ></avue-ueditor>
        </template>

        <template
          slot="newsType"
          slot-scope="scope"
        >
          <avue-select
            v-model="news.newsType"
            placeholder="请选择产品类型"
            :dic="dicData"
            :props="typeProps"
          ></avue-select>
        </template>
      </avue-form>
    </basic-container>
  </div>
</template>

<script>
import { addObj } from '@/api/web/news'
import { tableOption } from '@/const/crud/web/newsAdd'
import { typeList } from '@/api/web/typeinfo'
import { mapGetters } from 'vuex'

export default {
  name: 'news',
  data() {
    return {
      tableData: [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20 // 每页显示多少条
      },
      tableLoading: false,
      option: tableOption,
      dicData: [],
      username: '',
      typeProps: {
        label: "title",
        value: 'id'
      },
      upload: {
        action: "/admin/sys-file/upload/file",
        props: {
          url: "url"
        },
      },
      news: {},
    }
  },
  created() {
    this.getTypeList(this.page);
    this.$set(this.news, 'author', this.userInfo.username)
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
      }, { type: 2 })).then(response => {
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
          this.dicData.forEach(dict => {
            if (child.newsType == dict.id) {
              this.$set(child, 'newsTypeTitle', dict.title)
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
      this.$router.push({ path: '/web/news/add' });
    },
    handleEdit(scope) {
      this.$router.push({ path: '/web/news/edit', query: { id: scope.row.id } });
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
    submit() {
      this.$set(this.news, 'updateTime', null);
      this.handleSave(this.news);
    },
    /**
     * @title 数据添加
     * @param row 为当前的数据
     * @param done 为表单关闭函数
     *
     **/
    handleSave (row) {
      addObj(row).then(data => {
        this.tableData.push(Object.assign({}, row))
        this.$message({
          showClose: true,
          message: '添加成功',
          type: 'success'
        })
        this.$router.push({ path: '/web/news/index' });
      })
    },
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
