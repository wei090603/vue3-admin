<template>
  <div class="app-wrapper">
    <el-aside
      v-show="!contentFullScreen"
      :width="isCollapse ? '60px' : '250px'"
      :class="isCollapse ? 'hide-aside' : 'show-side'"
    >
      <Logo v-if="showLogo" />
      <Menu />
    </el-aside>
    <div class="main-container">
      <el-header v-show="!contentFullScreen">
        <Header />
      </el-header>
      <Tabs v-show="showTabs" />
      <div class="app-main">
        <router-view #default="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <div class="app-container" :key="route.path">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </div>
      <!-- <router-view #default="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <keep-alive :include="route.meta.keepAlive ? route.name : ''">
              <el-scrollbar
                max-height="100%"
                wrap-class="el-main-box"
                :key="route.path"
              >
                <component :is="Component" :key="route.path" />
              </el-scrollbar>
            </keep-alive>
          </transition>
        </router-view> -->
    </div>
  </div>
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

// 隐藏菜单
const hideMenu = (status = true) => {
  store.isCollapse = status;
};

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
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}
.el-header {
  padding-left: 0;
  padding-right: 0;
}
.el-aside {
  transition: width 0.28s;
  // width: 210px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

.main-container {
  height: 100%;
  transition: margin-left 0.28s;
  margin-left: $sideBarWidth;
  position: relative;
}

.app-main {
  position: relative;
  height: calc(100% - 120px);
  overflow-x: hidden;
  box-shadow: 0 4px 4px 0 rgb(26 38 70 / 10%);
  background-color: #f0f2f5;
  .app-container {
    min-height: 100%;
    padding: 15px;
    background: #fff;
  }
}

// @media screen and (max-width: 1000px) {
//   .el-aside {
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     z-index: 1000;
//     &.hide-aside {
//       left: -250px;
//     }
//   }
//   .mask {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     z-index: 999;
//     background: rgba(0, 0, 0, 0.5);
//   }
// }
</style>
