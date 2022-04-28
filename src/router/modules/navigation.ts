import { RouteRecordRaw } from 'vue-router';

const Route: RouteRecordRaw[] = [
  {
    path: '/navigation',
    component: () => import('@/layout/index.vue'),
    redirect: '/navigation/navigationList',
    meta: { title: '导航管理' },
    children: [
      {
        path: 'navigationList',
        component: () => import('@/pages/navigation/index.vue'),
        meta: { title: '导航列表', keepAlive: true, hidden: false },
      },
    ],
  },
];

export default Route;
