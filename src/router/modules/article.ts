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
        component: () => import('@/pages/article/category.vue'),
        meta: { title: '分类列表', keepAlive: true, activeMenu: '' },
      },
      {
        path: 'tag',
        name: 'tag',
        component: () => import('@/pages/article/tag.vue'),
        meta: { title: '标签列表', keepAlive: true, activeMenu: '' },
      },
      {
        path: 'articleList',
        name: 'articleList',
        component: () => import('@/pages/article/manage.vue'),
        meta: { title: '文章列表', keepAlive: true, activeMenu: '' },
      },
    ],
  },
];

export default Route;
