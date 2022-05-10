import { RouteRecordRaw } from 'vue-router';

const Route: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: { title: '登录', hidden: true, keepAlive: false },
  },
  {
    path: '/platform',
    component: () => import('@/layout/index.vue'),
    redirect: '/404',
    meta: { title: '系统目录', hidden: true },
    children: [
      {
        path: '/404',
        component: () => import('@/pages/platform/404.vue'),
        meta: { title: '404', hidden: true },
      },
      {
        path: '/401',
        component: () => import('@/pages/platform/401.vue'),
        meta: { title: '401', hidden: true },
      },
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/platform/redirect.vue'),
        meta: { title: 'redirect', hidden: true },
      },
    ],
  },
];

export default Route;
