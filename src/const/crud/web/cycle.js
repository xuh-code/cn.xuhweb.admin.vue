export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  searchSize: 'mini',
  viewBtn: true,
  column: [
    {
      label: 'id',
      prop: 'id',
      hide: true,
      span: 24,
      editDisabled: true,
      addDisplay: false,
    },
    {
      label: '图片URL',
      prop: 'picUrl',
      overHidden: true,
      imgFullscreen: true,
      type: 'upload',
      imgType: 'card',
      datatype: "String",
      listType: 'picture-img',
      loadText: '图片上传中，请稍等',
      action: '/admin/sys-file/upload/file',
      span: 24,
      props: {
        label: "fileName",
        value: "url",
      },
    },
    {
      label: '是否显示',
      prop: 'picShow',
      span: 24,
      slot: true,
      type: 'select',
      rules: [{
        required: true,
        message: '请选择状态',
        trigger: 'blur'
      }],
      dicData: [{
        label: '隐藏',
        value: 0
      }, {
        label: '显示',
        value: 1
      }]
    },
    {
      label: '排序',
      prop: 'position',
      span: 24,
    },
    {
      label: '创建时间',
      prop: 'createTime',
      editDisabled: true,
      addDisplay: false,
      span: 24,
      hide: true,
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      editDisabled: true,
      addDisplay: false,
      span: 24,
      hide: true,
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
    },
  ]
}
