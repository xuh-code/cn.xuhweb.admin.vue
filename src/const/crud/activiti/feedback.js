export const tableOption = {
  column: [{
    label: '未处理',
    prop: '1',
    icon: 'el-icon-date',
    option: {
      defaultSort: {
        prop: 'id',
        order: 'descending'
      },
      border: true,
      index: false,
      viewBtn: true,
      addBtn: false,
      delBtn: false,
      stripe: true,
      menuAlign: 'center',
      align: 'center',
      column: [
        {
          label: '主键',
          prop: 'id',
          span: 24,
          editDisabled: true,
          addVisdiplay: false,
        },
        {
          label: '进程',
          prop: 'type',
          solt: true,
          type: 'select',
          dicData: [
            {
              label: '未处理',
              value: 1
            },
            {
              label: '处理中',
              value: 2
            },
            {
              label: '已完成',
              value: 3
            },
          ]
        },
        {
          label: '用户名',
          prop: 'username',
          editDisabled: true,
        },
        {
          label: '邮箱',
          prop: 'email',
          editDisabled: true,
        },
        {
          label: '手机号',
          prop: 'phone',
          editDisabled: true,
        },
        {
          label: '主题',
          prop: 'topic',
          editDisabled: true,
          span: 24,
        },
        {
          label: '内容',
          prop: 'content',
          editDisabled: true,
          span: 24,
          overHidden: true,
          type: 'textarea',
        },
        {
          label: '备注',
          prop: 'remark',
          span: 24,
          rules: [{
            required: true,
            message: '请填写备注',
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
  },
  {
    label: '处理中',
    prop: '2',
    icon: 'el-icon-date',
    option: {
      defaultSort: {
        prop: 'id',
        order: 'descending'
      },
      border: true,
      viewBtn: true,
      addBtn: false,
      delBtn: false,
      editBtn: false,
      stripe: true,
      menuAlign: 'center',
      align: 'center',
      column: [
        {
          label: '主键',
          prop: 'id',
          span: 24,
          editDisabled: true,
          addVisdiplay: false,
        },
        {
          label: '进程',
          prop: 'type',
          solt: true,
          type: 'select',
          dicData: [
            {
              label: '处理中',
              value: 2
            },

            {
              label: '已完成',
              value: 3
            },
          ]
        },
        {
          label: '用户名',
          prop: 'username',
          editDisabled: true,
        },
        {
          label: '邮箱',
          prop: 'email',
          editDisabled: true,
        },
        {
          label: '手机号',
          prop: 'phone',
          editDisabled: true,
        },
        {
          label: '主题',
          prop: 'topic',
          editDisabled: true,
          span: 24,
        },
        {
          label: '内容',
          prop: 'content',
          editDisabled: true,
          span: 24,
          overHidden: true,
          type: 'textarea',
        },
        {
          label: '备注',
          prop: 'remark',
          span: 24,
          rules: [{
            required: true,
            message: '请填写备注',
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
  },
  {
    label: '处理完成',
    prop: '3',
    icon: 'el-icon-date',
    option: {
      border: true,
      index: true,
      viewBtn: true,
      addBtn: false,
      delBtn: false,
      editBtn: false,
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
          label: '进程',
          prop: 'type',
          solt: true,
          type: 'select',
          editDisabled: true,
          dicData: [
            {
              label: '未处理',
              value: 1
            },
            {
              label: '处理中',
              value: 2
            },

            {
              label: '已完成',
              value: 3
            },
          ]
        },
        {
          label: '用户名',
          prop: 'username',
          editDisabled: true,
        },
        {
          label: '邮箱',
          prop: 'email',
          editDisabled: true,
        },
        {
          label: '手机号',
          prop: 'phone',
          editDisabled: true,
        },
        {
          label: '主题',
          prop: 'topic',
          editDisabled: true,
          span: 24,
        },
        {
          label: '内容',
          prop: 'content',
          editDisabled: true,
          span: 24,
          overHidden: true,
          type: 'textarea',
        },
        {
          label: '备注',
          prop: 'remark',
          editDisabled: true,
          span: 24,
          rules: [{
            required: true,
            message: '请填写备注',
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
  }
  ]
}
