import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const Route: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: { title: '登录', hidden: true, keepAlive: true },
  },
];

export default Route;
