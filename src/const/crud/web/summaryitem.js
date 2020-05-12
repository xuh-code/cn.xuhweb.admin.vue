export const tableOption = {
  border: true,
  index: false,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: '主键',
      prop: 'id',
      editDisabled: true,
      addDisplay: false,
      span: 24,
    },
    {
      label: '标题',
      prop: 'title',
      span: 24,
      overHidden: true,
      rules: [{
        required: true,
        message: '请输入标题',
        trigger: 'blur'
      }],
    },
    {
      label: '内容',
      prop: 'content',
      span: 24,
      overHidden: true,
      rules: [{
        required: true,
        message: '请输入内容',
        trigger: 'blur'
      }],
    },
    {
      label: '父标题',
      prop: 'parentId',
      addDisplay: false,
      editVisdisplay: false,
      viewVisdiplay: false,
      span: 24,
      hide: true,

      // hide: true,
    },
    {
      label: '父标题',
      prop: 'parentTitle',
      formslot: true,
      slot: true,
      hidden: true,
      addDisplay: true,
      editVisdisplay: true,
      span: 24,
    },
    {
      label: '位置',
      prop: 'position',
      span: 24,
    },
  ]
}
