<template>
  <div class="execution">
    <basic-container>
      <avue-form
        ref="form"
        v-model="news"
        :option="option"
        @submit="submit"
      >
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
import { putObj, getObj } from '@/api/web/news'
import { tableOption } from '@/const/crud/web/newsEdit'
import { typeList } from '@/api/web/typeinfo'
import { mapGetters } from 'vuex'

export default {
  name: 'news',
  data() {
    return {
      tableData: [],
      option: tableOption,
      tableLoading: false,
      tableOption: tableOption,
      dicData: [],
      username: '',
      typeProps: {
        label: "title",
        value: 'id'
      },
      upload: {
        action: "/admin/sys-file/upload/file",
        props: {
          // res: "url", 
          url: "url"
        },
      },
      news: {},
    }
  },
  created() {
    this.getNews();
    this.getTypeList();
    this.username = this.userInfo.username;
  },
  mounted: function () {
  },
  computed: {
    ...mapGetters(['permissions']),
    ...mapGetters(['userInfo']),
  },
  methods: {
    getNews() {
      var id = this.$route.query.id;
      this.tableLoading = true
      getObj(id).then(response => {
        this.news = response.data.data;
      })
    },
    getTypeList() {
      typeList(Object.assign({
        current: 1,
        size: 25,
      }, {type: 2})).then(response => {
        this.dicData = response.data.data.records;
      })
    },
    submit() {
      this.$set(this.news, 'updateTime', null);
      this.$set(this.news, 'author', this.username);
      this.handleUpdate(this.news);
    },
    /**
     * @title 数据更新
     * @param row 为当前的数据
     * @param index 为当前更新数据的行数
     * @param done 为表单关闭函数
     *
     **/
    handleUpdate(row) {
      putObj(row).then(data => {
        this.$message({
          showClose: true,
          message: '修改成功',
          type: 'success'
        })
        this.refreshChange();
      })
    },
    /**
     * 刷新回调
     */
    refreshChange() {
      this.getNews(this.page)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
