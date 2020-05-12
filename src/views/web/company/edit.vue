<template>
  <div class="execution">
    <basic-container>
      <avue-form
        ref="form"
        action="/admin/file/upload"
        v-model="company"
        :option="option"
        @submit="submit"
      >
        <template
          slot-scope="scope"
          slot="content"
        >
          <avue-ueditor
            v-model="company.content"
            :upload="upload"
          ></avue-ueditor>
        </template>
      </avue-form>
    </basic-container>
  </div>
</template>

<script>
import { getObj, putObj } from '@/api/web/company'
import { option } from '@/const/crud/web/companyEdit'
import { mapGetters } from 'vuex'

export default {
  name: 'company',
  data() {
    return {
      id: '',
      company: {},
      web_company_edit: false,
      option: option,
      upload: {
        action: "/admin/sys-file/upload/file",
        props: {
          // res: "url", 
          url: "url"
        },
      }
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.web_company_edit = this.permissions.web_company_edit;
    this.getConpany();
  },
  mounted: function () {
  },
  computed: {
    ...mapGetters(['permissions']),
  },
  methods: {
    getConpany() {
      this.tableLoading = true
      getObj(this.id).then(response => {
        this.company = response.data.data;
      })
    },
    submit() {
      this.$set(this.company, 'updateTime', null);
      this.handleUpdate(this.company);
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
        this.getConpany();
      })
    },

  }
}
</script>

<style lang="scss" scoped>
</style>
