export const option = {
  submitText: '修改',
  column: [
    {
      label: '序号',
      prop: 'id',
      clearable: false,
      readonly: true,
      disabled: true,
      span: 12,
      rules: [
        {
          required: true,
          message: '主键不能为空',
          trigger: 'blur'
        },
        // {
        //   max: 500,
        //   message: '长度不能大于500',
        //   trigger: 'blur'
        // }
      ],
    },
    {
      label: '分类',
      prop: 'type',
      type: 'select',
      disabled: true,
      clearable: false,
      span: 12,
      rules: [
        {
          required: true,
          message: '分类不能为空',
          trigger: 'blur'
        }],
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
      solt: true,
      formsolt: true,
      component: 'AvueUeditor',
      action: '/admin/file/upload/file',
      span: 24,
      rules: [
        {
          required: true,
          message: '介绍不能为空',
          trigger: 'blur'
        }],
    },
    {
      label: '更新时间',
      prop: 'updateTime',
      readonly: true,
      span: 12,
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    {
      label: '创建时间',
      prop: 'createTime',
      readonly: true,
      disabled: true,
      clearable: false,
      span: 12,
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
    },
  ]
}
