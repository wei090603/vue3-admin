import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const Route: RouteRecordRaw[] = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/manager',
    meta: { title: '系统管理' },
    children: [
      {
        path: '/system',
        component: () => import('@/pages/system/manager/index.vue'),
        meta: { title: '管理员列表', hidden: true },
      },
    ],
  },
];

export default Route;
