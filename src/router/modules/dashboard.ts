import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const Route: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'dashboard' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: { title: '首页', icon: 'el-icon-s-home', hideClose: true },
      },
    ],
  },
];

export default Route;
