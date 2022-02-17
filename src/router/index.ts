import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'), // 注意这里要带上 文件后缀.vue
    meta: { title: '登录', hidden: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
