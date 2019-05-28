import Layout from '@/page/index/'
export default [{
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [{
        path: 'index',
        name: '首页',
        component: () =>
            import( /* webpackChunkName: "views" */ '@/page/wel')
    }]
}, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/admin/user/info'),
    }]
}, {
    path: '/activti',
    component: Layout,
    redirect: '/activti/detail',
    children: [{
        path: 'detail/:id',
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/activiti/detail')
    }]

},
{
    path: '/web/company',
    component: Layout,
    redirect: '/web/company/edit',
    children: [{
        path: 'edit',
        name: '走进佳博修改',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/web/company/edit'),
    }]
},
{
    path: '/web/production',
    component: Layout,
    redirect: '/web/production/add',
    children: [{
        path: 'add',
        name: '添加商品',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/web/production/add'),
    }]
},
{
    path: '/web/production',
    component: Layout,
    redirect: '/web/production/edit',
    children: [{
        path: 'edit',
        name: '修改商品',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/web/production/edit'),
    }]
},
{
    path: '/web/news',
    component: Layout,
    redirect: '/web/news/add',
    children: [{
        path: 'add',
        name: '添加新闻',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/web/news/add'),
    }]
},
{
    path: '/web/news',
    component: Layout,
    redirect: '/web/news/edit',
    children: [{
        path: 'edit',
        name: '修改新闻',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/web/news/edit'),
    }]
},
]
