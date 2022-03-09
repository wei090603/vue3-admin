import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const Route: RouteRecordRaw[] = [
  {
    path: '/navigation',
    component: Layout,
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
