import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Dashboard from './modules/dashboard';
import System from './modules/system';
import Permission from './modules/permission';
import Platform from './modules/platform';
import Article from './modules/article';
import Navigation from './modules/navigation';

export const asyncRoutes: RouteRecordRaw[] = [
  ...Navigation,
  ...Permission,
  ...Article,
  ...System,
];

export const constantRoutes: RouteRecordRaw[] = [...Platform, ...Dashboard];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
