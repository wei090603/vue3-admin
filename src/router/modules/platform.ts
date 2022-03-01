import { RouteRecordRaw } from 'vue-router';

const Route: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: { title: '登录', hidden: true, keepAlive: false },
  },
];

export default Route;
