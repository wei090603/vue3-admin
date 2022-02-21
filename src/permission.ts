/*
 * @Description: 路由拦截
 * @Author: tao.wei
 * @Date: 2021-03-16 11:50:24
 */
import router from './router';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条样式
import { ElMessage } from 'element-plus';
import { useUserStore } from './store/user';

const whiteList = ['/login']; // no redirect whitelist

NProgress.configure({ showSpinner: false }); // NProgress Configuration
router.beforeEach(async (to, _from, next) => {
  NProgress.start();
  // Determine whether the user has logged in
  if (useUserStore().token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' });
      NProgress.done();
    } else {
      // Check whether the user has obtained his permission roles
      if (useUserStore().roles?.lenght > 0) {
        next();
      } else {
        try {
          await useUserStore().getInfo();
          // router.addRoute(UserModel.state.menu)
          // next({ ...to, replace: true })
          next();
        } catch (error) {
          await useUserStore().loginOut();
          ElMessage.error('验证失败,请重新登录');
          next({ path: '/login' });
        }
      }
      NProgress.done();
    }
  } else {
    // Has no token
    if (whiteList.includes(to.path)) {
      // In the free login whitelist, go directly
      next();
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach((to) => {
  NProgress.done(); // 结束Progress
  document.title = (to.meta.title as string) || 'admin后台管理系统';
});
