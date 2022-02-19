import { defineStore } from 'pinia';

// 对外部暴露一个 use 方法，该方法会导出我们定义的 state
export const useAppStore = defineStore({
  // 每个 store 的 id 必须唯一
  id: 'app',
  // state 表示数据源
  state: () => ({
    isCollapse: false, // 侧边栏是否收缩展示
    contentFullScreen: false, // 内容是否可全屏展示
    showLogo: true, // 是否显示Logo
    fixedTop: false, // 是否固定顶部, todo，暂未使用
    showTabs: true, // 是否显示导航历史
    expandOneMenu: true, // 一次是否只能展开一个菜单
    elementSize: 'mini', // element默认尺寸，支持官网四个大小参数
    theme: {
      state: {
        style: 'default',
        primaryColor: '#409eff',
        menuType: 'side',
      },
    },
  }),
  // getters 类似于 computed，可对 state 的值进行二次计算
  getters: {},
  // actions 用来修改 state
  actions: {
    isCollapseChange(type: boolean) {
      this.isCollapse = type;
    },
    contentFullScreenChange(type: boolean) {
      this.contentFullScreen = type;
    },
  },
});
