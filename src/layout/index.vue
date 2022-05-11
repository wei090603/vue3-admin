<template>
  <div class="app-wrapper">
    <el-aside v-show="!contentFullScreen" :width="isCollapse ? '60px' : '250px'" :class="isCollapse ? 'hide-aside' : 'show-side'">
      <Logo v-if="showLogo" />
      <Menu />
    </el-aside>
    <div :class="[{ active: isCollapse }, 'main-container']">
      <el-header v-show="!contentFullScreen">
        <Header />
      </el-header>
      <Tabs v-show="showTabs" />
      <div class="app-main">
        <router-view #default="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <keep-alive>
              <el-scrollbar max-height="100%" wrap-class="app-container" :key="route.path">
                <component :is="Component" />
              </el-scrollbar>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useEventListener } from '@vueuse/core';
import Menu from './Menu/index.vue';
import Logo from './Logo/index.vue';
import Header from './Header/index.vue';
import Tabs from './Tabs/index.vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';

const store = useAppStore();

// 隐藏菜单
const hideMenu = (status = true) => {
  store.isCollapse = status;
};

// computed
const { isCollapse, contentFullScreen, showLogo, showTabs } = storeToRefs(store);
// 页面宽度变化监听后执行的方法
const resizeHandler = () => {
  if (document.body.clientWidth <= 1000 && !isCollapse.value) {
    hideMenu();
  } else if (document.body.clientWidth > 1000 && isCollapse.value) {
    hideMenu(false);
  }
};
// 初始化调用
resizeHandler();
// beforeMount
onBeforeMount(() => {
  // 监听页面变化
  useEventListener('resize', resizeHandler);
});
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  height: 100vh;
}
.el-header {
  padding-left: 0;
  padding-right: 0;
}
.el-aside {
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  overflow-x: hidden;
  transition: 0.3s;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

.main-container {
  width: calc(100% - 250px);
  &.active {
    width: 100% !important;
  }
}
.app-main {
  width: 100%;
  position: relative;
  top: 10px;
  height: calc(100% - 120px);
  padding: 0;
  overflow-x: hidden;
  box-shadow: 0 4px 4px 0 rgb(26 38 70 / 10%);
  background-color: #fff;
  :deep(.app-container) {
    padding: 15px;
    background: #fff;
  }
}

@media screen and (max-width: 1000px) {
  .el-aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    &.hide-aside {
      left: -250px;
    }
  }
}
</style>
