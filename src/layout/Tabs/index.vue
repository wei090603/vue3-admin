<template>
  <div class="tabs">
    <div class="item-main">
      <Item
        v-for="menu in menuList"
        :key="menu.meta.title"
        :menu="menu"
        :active="activeMenu.path === menu.path"
        @close="delMenu(menu)"
        @reload="pageReload"
      />
    </div>
    <div class="handle">
      <el-dropdown placement="bottom">
        <div class="el-dropdown-link">
          <el-icon><arrow-down /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-refresh-left" @click="pageReload"
              >重新加载</el-dropdown-item
            >
            <el-dropdown-item
              icon="el-icon-circle-close"
              :disabled="currentDisabled"
              @click="closeCurrentRoute"
              >关闭当前标签</el-dropdown-item
            >
            <el-dropdown-item
              icon="el-icon-circle-close"
              :disabled="menuList.length < 3"
              @click="closeOtherRoute"
              >关闭其他标签</el-dropdown-item
            >
            <el-dropdown-item
              icon="el-icon-circle-close"
              :disabled="menuList.length <= 1"
              @click="closeAllRoute"
              >关闭所有标签</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-tooltip
        class="item"
        effect="dark"
        :content="contentFullScreen ? '退出全屏' : '内容全屏'"
        placement="bottom"
      >
        <el-icon class="el-icon-full-screen" @click="onFullscreen"
          ><full-screen
        /></el-icon>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, unref, watch, reactive, ref } from 'vue';
import Item from './Item.vue';
import {
  RouteLocationNormalizedLoaded,
  RouteRecordRaw,
  useRoute,
  useRouter,
} from 'vue-router';
import tabsHook from './tabsHook';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { FullScreen, ArrowDown } from '@element-plus/icons-vue';

const store = useAppStore();
const route = useRoute();
const router = useRouter();
const defaultMenu: any = {
  path: '/dashboard',
  meta: { title: '首页', hideClose: true },
};
const { contentFullScreen } = storeToRefs(store);
const currentDisabled = computed(() => route.path === defaultMenu.path);

let activeMenu = reactive({ path: '' });
let menuList = ref(tabsHook.getItem());
if (menuList.value.length === 0) {
  // 判断之前有没有调用过
  addMenu(defaultMenu);
}
watch(menuList.value, (newVal) => {
  tabsHook.setItem(newVal);
});
watch(menuList, (newVal) => {
  tabsHook.setItem(newVal);
});
router.afterEach(() => {
  addMenu(route);
  initMenu(route);
});

// 全屏
const onFullscreen = () => {
  store.contentFullScreen = !store.contentFullScreen;
};

// 当前页面组件重新加载
function pageReload() {
  // const self: any = route.matched[route.matched.length - 1].instances.default;
}

// 关闭当前标签，首页不关闭
function closeCurrentRoute() {
  if (route.path !== defaultMenu.path) {
    delMenu(route);
  }
}
// 关闭除了当前标签之外的所有标签
function closeOtherRoute() {
  menuList.value = [defaultMenu];
  if (route.path !== defaultMenu.path) {
    addMenu(route);
  }
}

// 关闭所有的标签，除了首页
function closeAllRoute() {
  menuList.value = [defaultMenu];
  router.push(defaultMenu.path);
}

// 添加新的菜单项
function addMenu(menu: RouteLocationNormalizedLoaded) {
  let { path, meta, name } = menu;
  if (meta?.hideTabs) {
    return;
  }
  let hasMenu = menuList.value.some((obj: RouteRecordRaw) => {
    return obj.path === path;
  });
  if (!hasMenu) {
    menuList.value.push({
      path,
      meta,
      name,
    });
  }
}

// 删除菜单项
function delMenu(menu: RouteLocationNormalizedLoaded) {
  let index = 0;
  if (!menu.meta.hideClose) {
    index = menuList.value.findIndex((item: any) => item.path === menu.path);
    menuList.value.splice(index, 1);
  }
  if (menu.path === activeMenu.path) {
    index - 1 > 0
      ? router.push(menuList.value[index - 1].path)
      : router.push(defaultMenu.path);
  }
}

// 初始化activeMenu
function initMenu(menu: { path: string }) {
  activeMenu = menu;
}

// 初始化时调用：1. 新增菜单 2. 初始化activeMenu
addMenu(route);
initMenu(route);
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  position: relative;
  z-index: 99;
  background: var(--system-header-background);
  border-bottom: 1px solid var(--system-header-border-color);
  border-top: 1px solid var(--system-header-border-color);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  .item-main {
    flex: 1;
    overflow-y: hidden;
  }
  .handle {
    min-width: 95px;
    height: 100%;
    display: flex;
    align-items: center;
    .el-dropdown-link {
      margin-top: 5px;
      border-left: 1px solid var(--system-header-border-color);
      height: 25px;
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    i {
      color: var(--system-header-text-color);
    }
  }
}
.el-icon-full-screen {
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
  &:focus {
    outline: none;
  }
}
</style>
