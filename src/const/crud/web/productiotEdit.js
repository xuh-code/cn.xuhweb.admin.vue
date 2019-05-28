export const tableOption = {
  border: true,
  index: true,
  addBtn: false,
  submitText: '修改',
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: '编号',
      prop: 'id',
      hide: true,
      span: 24,
      disabled: true,
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
      span: 12,
      props: {
        label: "fileName",
        value: "url",
      },
    },
    {
      label: '产品类型',
      prop: 'prodType',
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
      label: '标题',
      prop: 'title',
      overHidden: true,
      span: 12,
      rules: [{
        required: true,
        message: '请选择产品标题',
        trigger: 'blur'
      }],
    },
    {
      label: '操作用户',
      prop: 'author',
      disabled: true,
    },
    {
      label: '价格',
      prop: 'price',
      type: 'Number',
      span: 12,
      rules: [{
        required: true,
        message: '请输入价格',
        trigger: 'blur'
      }],
    },
    {
      label: '淘宝链接',
      prop: 'tUrl',
      span: 12,
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
      label: '产品介绍',
      prop: 'content',
      slot: true,
      span: 24,
      component: 'AvueUeditor',
      overHidden: true,
      formsolt: true,
    },
  ]
}
