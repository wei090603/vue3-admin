import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Dashboard from './modules/dashboard';
import System from './modules/system';
import Platform from './modules/platform';
import Article from './modules/article';

const routes: RouteRecordRaw[] = [
  ...Dashboard,
  ...System,
  ...Article,
  ...Platform,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
