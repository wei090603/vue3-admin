<template>
  <header>
    <div class="left-box">
      <!-- 收缩按钮 -->
      <div class="menu-icon" @click="opendStateChange">
        <el-icon>
          <component :is="isCollapse ? Expand : Fold"></component>
        </el-icon>
      </div>
      <Breadcrumb />
    </div>
    <div class="right-box">
      <!-- 快捷功能按钮 -->
      <div class="function-list">
        <div class="function-list-item hidden-sm-and-down"><Fullscreen /></div>
        <div class="function-list-item"><SizeChange /></div>
        <div class="function-list-item hidden-sm-and-down"><Theme /></div>
      </div>
      <!-- 用户信息 -->
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ userStore.info.name }}
            <el-icon class="el-icon-arrow-down el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="showPasswordLayer">修改密码</el-dropdown-item>
              <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <!-- <password-layer v-if="layer.show" :layer="layer" /> -->
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { Expand, Fold, ArrowDown } from '@element-plus/icons-vue';
import SizeChange from './components/sizeChange.vue';
import Fullscreen from './components/fullscreen.vue';
import Theme from './components/theme.vue';
import Breadcrumb from './Breadcrumb.vue';
// import PasswordLayer from './passwordLayer.vue';
import { useAppStore } from '@/store/app';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const store = useAppStore();
const userStore = useUserStore();

const layer = reactive({
  show: false,
  showButton: true,
});

const { isCollapse } = storeToRefs(store);
// isCollapse change to hide/show the sidebar
const opendStateChange = () => {
  store.isCollapse = !store.isCollapse;
};

// login out the system
const loginOut = () => {
  userStore.loginOut();
};

const showPasswordLayer = () => {
  layer.show = true;
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: var(--system-header-background);
  padding-right: 22px;
}
.left-box {
  height: 100%;
  display: flex;
  align-items: center;
  .menu-icon {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 100;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
      background-color: var(--system-header-item-hover-color);
    }
    i {
      color: var(--system-header-text-color);
    }
  }
}
.right-box {
  display: flex;
  justify-content: center;
  align-items: center;
  .function-list {
    display: flex;
    .function-list-item {
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      :deep(i) {
        color: var(--system-header-text-color);
      }
    }
  }
  .user-info {
    margin-left: 20px;
    .el-dropdown-link {
      color: var(--system-header-breadcrumb-text-color);
      cursor: pointer;
    }
  }
}
</style>
