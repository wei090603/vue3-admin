<template>
  <el-container style="height: 100vh">
    <div
      v-show="!isCollapse && !contentFullScreen"
      class="mask"
      @click="hideMenu()"
    ></div>
    <el-aside
      v-show="!contentFullScreen"
      :width="isCollapse ? '60px' : '250px'"
      :class="isCollapse ? 'hide-aside' : 'show-side'"
    >
      <Logo v-if="showLogo" />
      <Menu />
    </el-aside>
    <el-container>
      <el-header v-show="!contentFullScreen">
        <Header />
      </el-header>
      <Tabs v-show="showTabs" />
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <el-scrollbar max-height="100%" wrap-class="el-main-box">
              <keep-alive v-if="route.meta.keepAlive" include="">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
              <component v-else :is="Component" :key="route.fullPath" />
            </el-scrollbar>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { useEventListener } from '@vueuse/core';
import Menu from './Menu/index.vue';
import Logo from './Logo/index.vue';
import Header from './Header/index.vue';
import Tabs from './Tabs/index.vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';

const store = useAppStore();

// computed
const { isCollapse, contentFullScreen, showLogo, showTabs } =
  storeToRefs(store);
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
// 隐藏菜单
const hideMenu = (status = true) => {
  store.isCollapse = status;
};
</script>

<style lang="scss" scoped>
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
.el-main {
  background-color: #f0f2f5;
  position: relative;
  flex: none;
  top: 10px;
  height: calc(100% - 120px);
  padding: 0;
  overflow-x: hidden;
  box-shadow: 0 4px 4px 0 rgb(26 38 70 / 10%);
  :deep(.el-main-box) {
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
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
