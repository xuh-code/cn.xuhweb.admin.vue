export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  dialogClickModal: false,
  align: 'center',
  column: [
    {
      label: '序号',
      prop: 'id',
      hide: true,
      span: 24,
      editDisabled: true,
      addDisplay: false,
    },
    {
      label: '标题',
      prop: 'title',
      span: 24,
    },
    {
      label: '简介',
      prop: 'content',
      slot: true,
      span: 24,
      component: 'AvueUeditor',
      overHidden: true,
      formslot: true,
      rules: [{
        max: 500,
        message: '长度不能大于500',
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
      action: '/admin/sys-file/upload/file',
      span: 24,
      props: {
        label: "fileName",
        value: "url",
      },
    },
    {
      label: '存在子项',
      prop: 'child',
      span: 24,
      slot: true,
      type: 'select',
      dicData: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }]
    },
    {
      label: '显示',
      prop: 'selectShow',
      slot: true,
      type: 'select',
      span: 24,
      rules: [{
        required: true,
        message: '请选择是否显示',
        trigger: 'blur'
      }],
      dicData: [
        {
          label: '显示',
          value: 1
        },
        {
          label: '隐藏',
          value: 0
        }
      ]
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
  ]
}
