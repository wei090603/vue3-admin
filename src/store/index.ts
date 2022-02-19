import { defineStore } from 'pinia';

// 对外部暴露一个 use 方法，该方法会导出我们定义的 state
export const useUserStore = defineStore('user', {
  // state 表示数据源
  state: () => ({}),
  // getters 类似于 computed，可对 state 的值进行二次计算
  getters: {},
  // actions 用来修改 state
  actions: {},
});
