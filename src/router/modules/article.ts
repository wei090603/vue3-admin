import Layout from '@/layout/index.vue';

const Route = [
  {
    path: '/article',
    name: 'article',
    meta: { title: '文章管理', icon: 'el-icon-s-operation' },
    component: Layout,
    redirect: '/article/articleList',
    children: [
      {
        path: 'category',
        name: 'category',
        component: () => import('@/pages/article/category/index.vue'),
        meta: { title: '分类列表', keepAlive: true, activeMenu: '' },
      },
      {
        path: 'tag',
        name: 'tag',
        component: () => import('@/pages/article/tag/index.vue'),
        meta: { title: '标签列表', keepAlive: true, activeMenu: '' },
      },
      {
        path: 'articleList',
        name: 'articleList',
        component: () => import('@/pages/article/article/index.vue'),
        meta: { title: '文章列表', keepAlive: true, activeMenu: '' },
      },
      {
        path: 'article/add',
        name: 'articleAdd',
        component: () => import('@/pages/article/article/detail.vue'),
        meta: {
          title: '新增文章',
          activeMenu: '/article/articleList',
          hidden: true,
        },
      },
      {
        path: 'article/edit/:id',
        name: 'articleEdit',
        component: () => import('@/pages/article/article/detail.vue'),
        meta: {
          title: '编辑文章',
          activeMenu: '/article/articleList',
          hidden: true,
        },
      },
    ],
  },
];

export default Route;
