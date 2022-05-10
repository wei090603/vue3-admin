<template>
  <div class="tags-view-item" :class="active ? 'active' : ''">
    <router-link v-if="menu.meta.title" :to="menu.path">
      {{ menu.meta.title }}
    </router-link>
    <!-- <el-icon v-if="active" class="el-icon-refresh-right" @click.stop="reload">
      <refresh-right />
    </el-icon> -->
    <el-icon
      v-if="!menu.meta.hidden"
      class="el-icon-close"
      @click.stop="closeTab"
    >
      <Close />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { Close, RefreshRight } from '@element-plus/icons-vue';
const props = defineProps({
  menu: {
    type: Object,
    default: () => {
      return {
        path: '',
        meta: {
          title: '',
          hideClose: false,
        },
      };
    },
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);

const closeTab = () => {
  emits('close');
};
</script>

<style lang="scss" scoped>
.tags-view-item {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  height: 24px;
  line-height: 26px;
  border: 1px solid var(--system-header-border-color);
  color: var(--system-header-text-color);
  background: var(--system-header-tab-background);
  padding: 0 8px;
  font-size: 12px;
  margin-left: 5px;
  border-radius: 2px;
  a {
    display: inline-block;
    color: var(--system-header-text-color);
    padding-left: 8px;
    padding-right: 8px;
  }
  .el-icon-refresh-right {
    display: inline-block;
    margin-right: 5px;
  }
  &:first-of-type {
    margin-left: 15px;
  }
  &:last-of-type {
    margin-right: 15px;
  }
  &.active {
    background: var(--system-primary-color);
    border-color: var(--system-primary-color);
    color: var(--system-primary-text-color);
    a {
      color: var(--system-primary-text-color);
    }
    &:hover {
      background: var(--system-primary-color);
    }
  }
  &:hover {
    background-color: var(--system-header-item-hover-color);
  }
}
</style>
