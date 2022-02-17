import { defineStore } from 'pinia';

// 对外部暴露一个 use 方法，该方法会导出我们定义的 state
const useCounterStore = defineStore({
  // 每个 store 的 id 必须唯一
  id: 'counter',
  // state 表示数据源
  state: () => ({
    count: 0,
  }),
  // getters 类似于 computed，可对 state 的值进行二次计算
  getters: {},
  // actions 用来修改 state
  actions: {
    increment() {
      // action 中的 this 指向👉 state
      this.count++;
    },
  },
});

export default useCounterStore;
