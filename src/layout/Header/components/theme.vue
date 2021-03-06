<template>
  <div title="系统设置" @click="drawerChange(true)">
    <el-icon class="sfont system-shezhi"><setting /></el-icon>
  </div>
  <el-drawer
    v-model="drawer"
    title="系统设置"
    size="300px"
    :show-close="false"
    direction="rtl"
  >
    <h3>整体风格设置</h3>
    <div class="theme-box">
      <theme-icon
        v-for="(row, index) in style"
        :key="index"
        v-model:active="state.style"
        :name="index + ''"
        :tip="row.name"
        :logo="row.logo.background"
        :menu="row.menu.background"
        :header="row.header.background"
        :main="row.container.background"
        :active-color="row.page.color"
      ></theme-icon>
    </div>
    <h3>主题色</h3>
    <div class="theme-box">
      <theme-color
        v-for="(item, key) in themeColorArr"
        :key="key"
        v-model:active="state.primaryColor"
        v-model:activeTextColor="state.primaryTextColor"
        :color="item.color"
        :text-color="item.textColor"
        :tip="item.tip"
      ></theme-color>
    </div>
    <h3>其他设置</h3>
    <div class="list">
      <div v-for="option in options" :key="option.name" class="list-item">
        <span>{{ option.name }}</span>
        <el-switch
          v-model="option.value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="change(option)"
        >
        </el-switch>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue';
import themeIcon from './theme/theme-icon.vue';
import themeColor from './theme/theme-color.vue';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
import { Setting } from '@element-plus/icons-vue';
import type { Style, Colors } from '@/theme/index';
import { style } from '@/theme/index';

enum StyleEnmu {
  showLogo = 'showLogo',
  showTabs = 'showTabs',
  expandOneMenu = 'expandOneMenu',
}

interface Option {
  name: string;
  value: boolean;
  store: StyleEnmu;
}

interface State {
  style: string;
  primaryColor: string;
  menuType: string;
  primaryTextColor: string;
}

const store = useAppStore();

const { theme, showLogo, showTabs, expandOneMenu } = storeToRefs(store);

// 只取值，不做computed
const state: State = reactive({
  style: theme.value.style,
  primaryColor: theme.value.primaryColor,
  primaryTextColor: theme.value.primaryTextColor,
  menuType: theme.value.menuType,
});
const themeColorArr = [
  { color: '#409eff', textColor: '#fff', tip: '默认蓝' },
  { color: '#d60f20', textColor: '#fff', tip: '玫瑰红' },
  { color: '#ac25e6', textColor: '#fff', tip: '优雅紫' },
  { color: '#4dc86f', textColor: '#fff', tip: '故事绿' },
  { color: '#13c2c2', textColor: '#fff', tip: '明青' },
  { color: '#333', textColor: '#fff', tip: '极客黑' },
];
const setTheme = () => {
  const userTheme = style[state.style];
  const body = document.getElementsByTagName('body')[0];
  // 设置全局顶部body上的class名称，即为主题名称，便于自定义配置符合当前主题的样式统一入口
  body.className = state.style;
  // 需要设置的颜色参照theme.scss，位置：assets/style/theme.scss
  // 设置主题色
  body.style.setProperty('--system-primary-color', state.primaryColor);
  for (let i in userTheme) {
    const item: any = userTheme[i as keyof Colors];
    for (let y in item) {
      let cssVarName =
        '--system-' + i + '-' + y.replace(/([A-Z])/g, '-$1').toLowerCase();
      body.style.setProperty(cssVarName, item[y]);
    }
  }
};
// 监听数据的变化
watch(state, (newVal) => {
  store.theme = newVal;
  setTheme();
});
let drawer = ref(false);
const options = reactive([
  { name: '显示logo', value: showLogo, store: StyleEnmu.showLogo },
  {
    name: '显示面包屑导航',
    value: showTabs,
    store: StyleEnmu.showTabs,
  },
  {
    name: '保持一个菜单展开',
    value: expandOneMenu,
    store: StyleEnmu.expandOneMenu,
  },
]);
const drawerChange = (value: boolean) => {
  drawer.value = value;
};
const change = (option: Option) => {
  store[option.store] = option.value;
};
setTheme();
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
  &:focus {
    outline: none;
  }
}

.list {
  padding: 0 20px;
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    span {
      font-size: 16px;
    }
  }
}
h3 {
  margin-top: 40px;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  padding: 0 20px;
  &:first-child {
    margin-top: 0;
  }
}
.theme-box {
  text-align: left;
  padding-left: 20px;
}
</style>
