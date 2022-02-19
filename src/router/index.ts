import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Dashboard from './modules/dashboard';
import System from './modules/system';
import Platform from './modules/platform';

const routes: RouteRecordRaw[] = [...Dashboard, ...System, ...Platform];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
