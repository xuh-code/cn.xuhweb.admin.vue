export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: '主键',
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
      dicData: [
        {
          label: '产品',
          value: 1
        },
        {
          label: '新闻',
          value: 2
        }]
    },
    {
      label: '类型名称',
      prop: 'title',
      span: 24,
      rules: [{
        required: true,
        message: '请填写类型名称',
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
