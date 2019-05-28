export const tableOption = {
  submitText: '修改',
  column: [
    {
      label: '序号',
      prop: 'id',
      hide: true,
      span: 12,
      disabled: true,
    },
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
      overHidden: true,
      imgFullscreen: true,
      type: 'upload',
      imgType: 'card',
      datatype: "String",
      listType: 'picture-img',
      loadText: '图片上传中，请稍等',
      action: '/admin/file/upload/file',
      span: 24,
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
        message: '请选择新闻类型',
        trigger: 'blur'
      }],
    },
    {
      label: '作者',
      prop: 'author',
      disabled: true,
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      disabled: true,
      span: 12,
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    {
      label: '创建时间',
      prop: 'createTime',
      disabled: true,
      span: 12,
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
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
