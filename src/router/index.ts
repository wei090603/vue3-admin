import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Dashboard from './modules/dashboard';
import System from './modules/system';
import Permission from './modules/permission';
import Platform from './modules/platform';
import Article from './modules/article';
import Navigation from './modules/navigation';

const routes: RouteRecordRaw[] = [
  ...Dashboard,
  ...Navigation,
  ...Permission,
  ...Article,
  ...Platform,
  ...System,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
