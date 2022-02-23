import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const Route: RouteRecordRaw[] = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/manager',
    meta: { title: '权限管理' },
    children: [
      {
        path: 'manager',
        component: () => import('@/pages/permission/manager/index.vue'),
        meta: { title: '管理员列表', hidden: false },
      },
      {
        path: 'roles',
        component: () => import('@/pages/permission/roles/index.vue'),
        meta: { title: '角色列表', hidden: false },
      },
    ],
  },
];

export default Route;
