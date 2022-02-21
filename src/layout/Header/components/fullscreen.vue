<template>
  <div :title="isFullscreen ? '退出全屏' : '内容全屏'">
    <el-icon
      class="sfont"
      :class="isFullscreen ? 'system-quanping' : 'system-quanping1'"
      @click="toggle"
      ><full-screen
    /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';
import { FullScreen } from '@element-plus/icons-vue';

const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
  font-size: 18px;
  &:focus {
    outline: none;
  }
}
</style>
