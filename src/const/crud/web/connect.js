export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: '序号',
      prop: 'id',
      hide: true,
      span: 24,
      editDisabled: true,
      addVisdiplay: false,
    },
    {
      label: '类型',
      prop: 'type',
      span: 24,
      solt: true,
      type: 'select',
      rules: [{
        required: true,
        message: '请选择状态',
        trigger: 'blur'
      }],
      dicData: [{
        label: '地址',
        value: 1
      }, {
        label: '电话',
        value: 2
      }, {
        label: '微信',
        value: 3
      }, {
        label: 'QQ',
        value: 4
      }
    ]
    },
    {
      label: '内容',
      prop: 'content',
      span: 24,
      rules: [{
        required: true,
        message: '请输入内容',
        trigger: 'blur'
      }],
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      editDisabled: true,
      addVisdiplay: false,
      span: 24,
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    {
      label: '创建时间',
      prop: 'createTime',
      editDisabled: true,
      addVisdiplay: false,
      span: 24,
      hide: true,
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
    },
  ]
}
