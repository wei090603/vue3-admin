import { RouteRecordRaw } from 'vue-router';

const Route: RouteRecordRaw[] = [
  {
    path: '/permission',
    component: () => import('@/layout/index.vue'),
    redirect: '/permission/manager',
    meta: { title: '权限管理' },
    children: [
      {
        path: 'resource',
        component: () => import('@/pages/permission/resource/index.vue'),
        meta: { title: '资源列表', keepAlive: true, hidden: false },
      },
      {
        path: 'roles',
        component: () => import('@/pages/permission/roles/index.vue'),
        meta: { title: '角色列表', keepAlive: true, hidden: false },
      },
      {
        path: 'manager',
        component: () => import('@/pages/permission/manager/index.vue'),
        meta: { title: '管理员列表', keepAlive: true, hidden: false },
      },
    ],
  },
];

export default Route;
