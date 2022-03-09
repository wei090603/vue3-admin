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
        meta: { title: '广告列表', keepAlive: true, hidden: false },
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/pages/system/notice/index.vue'),
        meta: { title: '通知公告', keepAlive: true, hidden: false },
      },
      {
        path: 'notice/add',
        name: 'noticeAdd',
        component: () => import('@/pages/system/notice/detail.vue'),
        meta: {
          title: '新增通知公告',
          keepAlive: true,
          activeMenu: '/system/notice',
          hidden: true,
        },
      },
      {
        path: 'notice/edit/:id',
        name: 'noticeEdit',
        component: () => import('@/pages/system/notice/detail.vue'),
        meta: {
          title: '编辑通知公告',
          activeMenu: '/system/notice',
          hidden: true,
        },
      },
      {
        path: 'notice/check/:id',
        name: 'noticeCheck',
        component: () => import('@/pages/system/notice/detail.vue'),
        meta: {
          title: '查看通知公告',
          keepAlive: true,
          activeMenu: '/system/notice',
          hidden: true,
        },
      },
      {
        path: 'loginLogger',
        name: 'loginLogger',
        component: () => import('@/pages/system/loginLogger/index.vue'),
        meta: { title: '登录日志', keepAlive: true, hidden: false },
      },
      {
        path: 'link',
        name: 'link',
        component: () => import('@/pages/system/link/index.vue'),
        meta: { title: '友情链接', keepAlive: true, hidden: false },
      },
    ],
  },
];

export default Route;
