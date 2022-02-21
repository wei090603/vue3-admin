import { login, loginOut, userInfo } from '@/api/login';
import { removeToken, setToken } from '@/utils/cookies';
import { defineStore } from 'pinia';

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
  }),
  // getters 类似于 computed，可对 state 的值进行二次计算
  getters: {},
  // actions 用来修改 state
  actions: {
    async loginAction(params: { account: string; password: string }) {
      const { token } = await login(params);
      this.token = token;
      setToken(token);
    },
    async getInfo() {
      try {
        const { info, roles } = await userInfo();
        this.info = info;
        this.roles = roles;
      } catch (error) {
        throw new Error(error as string);
      }
    },
    async loginOut() {
      await loginOut();
      this.roles = [];
      this.info = '';
      removeToken();
      location.reload();
    },
  },
});
