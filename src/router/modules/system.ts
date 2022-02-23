import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const Route: RouteRecordRaw[] = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/advertise',
    meta: { title: '系统管理' },
    children: [
      {
        path: 'advertise',
        name: 'advertise',
        component: () => import('@/pages/system/advertise/index.vue'),
        meta: { title: '广告列表', hidden: false },
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/pages/system/notice/index.vue'),
        meta: { title: '通告列表', hidden: false },
      },
      {
        path: 'loginLogger',
        name: 'loginLogger',
        component: () => import('@/pages/system/loginLogger/index.vue'),
        meta: { title: '登录日志', hidden: false },
      },
      {
        path: 'link',
        name: 'link',
        component: () => import('@/pages/system/link/index.vue'),
        meta: { title: '友情链接', hidden: false },
      },
    ],
  },
];

export default Route;
