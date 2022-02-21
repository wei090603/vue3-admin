// import { login } from '@/api/login';
// import { setToken } from '@/utils/cookies';
import { defineStore } from 'pinia';

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
    login(params: { account: string; password: string }) {
      return new Promise((resolve) => {
        // login(params).then((res) => {
        //   this.token = res.token;
        //   setToken(res.token);
        //   resolve(res.token);
        // });
        resolve('');
      });
    },
    getInfo() {},
    loginOut() {},
  },
});
