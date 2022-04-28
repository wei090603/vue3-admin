import { login, loginOut, userInfo } from '@/api/login';
import { asyncRoutes, constantRoutes } from '@/router';
import { removeToken, setToken } from '@/utils/cookies';
import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import { managerResourcest } from '@/api/manager';

interface State {
  roles: number[];
}

// 对外部暴露一个 use 方法，该方法会导出我们定义的 state
export const useUserStore = defineStore('user', {
  // state 表示数据源
  state: () => ({
    token: '',
    roles: [],
    info: {}, // 用户信息
    routes: [] as RouteRecordRaw[],
    dynamicRoutes: [] as RouteRecordRaw[],
    permission: [],
  }),
  // getters 类似于 computed，可对 state 的值进行二次计算
  getters: {
    showRoutes: (state) =>
      state.dynamicRoutes.filter((item: RouteRecordRaw) => !item.meta?.hidden),
  },
  // actions 用来修改 state
  actions: {
    async loginAction(params: { account: string; password: string }) {
      const { token } = await login(params);
      this.token = token;
      setToken(token);
    },
    async getInfo() {
      try {
        const { roles, ...info } = await userInfo();
        this.info = info;
        this.roles = roles;
        const resourcesList = roles.map((item: any) => item.resources);
        this.permission = resourcesList.reduce((a: string | any[], b: any) =>
          a.concat(b)
        );
        console.log(this.permission, 'resourcesList');
      } catch (error) {
        throw new Error(error as string);
      }
    },
    async generateRoutes() {
      const superAdmin = this.roles.some(
        (item: { mark: string }) => item.mark === 'root'
      );
      if (superAdmin) {
        this.dynamicRoutes = asyncRoutes;
      } else {
        const { data } = await managerResourcest({});
        console.log(data, 'data');
        // this.dynamicRoutes = ;
      }
      this.dynamicRoutes.push({
        // 找不到路由重定向到404页面
        path: '/:pathMatch(.*)',
        redirect: '/404',
        meta: { title: '404', keepAlive: false, hidden: true },
      });
      this.dynamicRoutes = constantRoutes.concat(this.dynamicRoutes);
    },
    async loginOut() {
      await loginOut();
      this.roles = [];
      this.info = {};
      removeToken();
      location.reload();
    },
  },
});
