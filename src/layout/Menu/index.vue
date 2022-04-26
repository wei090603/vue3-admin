<template>
  <el-scrollbar>
    <el-menu
      class="layout-menu system-scrollbar"
      background-color="var(--system-menu-background)"
      text-color="var(--system-menu-text-color)"
      active-text-color="var(--system-primary-color)"
      :default-active="activeMenu"
      :class="isCollapse ? 'collapse' : ''"
      :collapse="isCollapse"
      :collapse-transition="false"
      :unique-opened="expandOneMenu"
    >
      <menu-item
        v-for="(item, key) in sidebarMenus"
        :key="key"
        :item="item"
        :base-path="item?.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import MenuItem from './MenuItem.vue';

const store = useAppStore();
const { isCollapse, expandOneMenu } = storeToRefs(store);

const allRoutes = useRouter()
  .options.routes.filter((item) => !item.meta?.hidden)
  .map((item) => {
    if (item.path === '/' && item.children) {
      return item.children[0];
    }
    return item;
  });

const route = useRoute();
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

const isRouteShow = (route: any) => {
  return !route.meta?.hidden;
};

const sidebarMenus = computed(() => {
  const result = allRoutes.map((item) => {
    if (!isRouteShow(item)) return;
    return {
      ...item,
      children: item.children ? item.children.filter(isRouteShow) : null,
    };
  });
  return result;
});
</script>

<style lang="scss" scoped>
.el-scrollbar {
  background-color: var(--system-menu-background);
}
:deep(.layout-menu) {
  width: 100%;
  border-right: none;
  &.collapse {
    margin-left: 0px;
  }
  .el-sub-menu {
    background-color: var(--system-menu-background) !important;
  }
  .el-menu-item i,
  .el-menu-item-group__title,
  .el-sub-menu__title i {
    color: var(--system-menu-text-color);
  }
  .el-menu-item,
  .el-sub-menu__title {
    &.is-active {
      background-color: var(--system-primary-color) !important;
      color: var(--system-primary-text-color) !important;
      i {
        color: var(--system-primary-text-color) !important;
      }
      &:hover {
        background-color: var(--system-primary-color) !important;
        color: var(--system-primary-text-color) !important;
      }
    }
    &:hover {
      background-color: var(--system-menu-hover-background) !important;
    }
  }
  .el-sub-menu {
    &.is-active {
      > .el-sub-menu__title,
      > .el-sub-menu__title i {
        color: var(--system-menu-submenu-active-color) !important;
      }
    }
    .el-menu {
      .el-menu-item {
        background-color: var(--system-menu-children-background) !important;
        &.is-active {
          background-color: var(--system-primary-color) !important;
          color: var(--system-primary-text-color) !important;
          &:hover {
            background-color: var(--system-primary-color) !important;
            color: var(--system-primary-text-color) !important;
          }
        }
        &:hover {
          background-color: var(--system-menu-hover-background) !important;
        }
      }
    }

    .el-sub-menu {
      .el-sub-menu__title {
        background-color: var(--system-menu-children-background) !important;
        &:hover {
          background-color: var(--system-menu-hover-background) !important;
        }
      }
    }
  }
}
</style>
