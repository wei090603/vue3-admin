<template>
  <div :title="isFullscreen ? '退出全屏' : '内容全屏'">
    22
    <i
      class="sfont"
      :class="isFullscreen ? 'system-quanping' : 'system-quanping1'"
      @click="toggle"
    ></i>
  </div>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';

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
