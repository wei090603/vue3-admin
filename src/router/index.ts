import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Dashboard from './modules/dashboard';
import Platform from './modules/platform';

const routes: RouteRecordRaw[] = [...Dashboard, ...Platform];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
