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
        path: 'manager',
        component: () => import('@/pages/system/manager/index.vue'),
        meta: { title: '管理员列表', hidden: false },
      },
      {
        path: 'roles',
        component: () => import('@/pages/system/roles/index.vue'),
        meta: { title: '角色列表', hidden: false },
      },
    ],
  },
];

export default Route;
