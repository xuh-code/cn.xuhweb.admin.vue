export const tableOption = {
  border: true,
  index: true,
  submitText: '添加',
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: '标题',
      prop: 'title',
      span: 12,
      rules: [{
        required: true,
        message: '请选择新闻标题',
        trigger: 'blur'
      }],
    },
    {
      label: '封面图片',
      prop: 'faceImg',
      type: 'upload',
      listType: 'picture-img',
      loadText: '图片上传中，请稍等',
      action: '/admin/file/upload/file',
      span: 12,
      props: {
        label: "fileName",
        value: "url",
      },
    },
    {
      label: '新闻类型',
      prop: 'newsType',
      formsolt: true,
      solt: true,
      type: 'select',
      span: 12,
      rules: [{
        required: true,
        message: '请选择产品类型',
        trigger: 'blur'
      }],
    },
    {
      label: '作者',
      prop: 'author',
      disabled: true,
    },
    {
      label: '内容',
      prop: 'content',
      slot: true,
      span: 24,
      component: 'AvueUeditor',
      overHidden: true,
      formsolt: true,
    },
  ]
}
