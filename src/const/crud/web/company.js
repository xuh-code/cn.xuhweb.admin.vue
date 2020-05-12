export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menuAlign: 'center',
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
      label: '分类',
      prop: 'type',
      slot: true,
      type: 'select',
      span: 24,
      dicData: [
        {
          label: '公司简介',
          value: 1
        },
        {
          label: '资质荣誉',
          value: 2
        },
        {
          label: '企业文化',
          value: 3
        },
        {
          label: '园区风貌',
          value: 4
        }
      ]
    },
    {
      label: '介绍',
      prop: 'content',
      overHidden: true,
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      editDisabled: true,
      addDisplay: false,
      span: 24,
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
