<template>
  <div class="logo-container">
    <!-- <img src="@/assets/logo.png" alt=""> -->
    <h1 v-if="!isCollapse">{{ systemTitle }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { systemTitle } from '@/config';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';

const store = useAppStore();
const { isCollapse } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.logo-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--system-logo-background);
  h1 {
    font-size: 20px;
    white-space: nowrap;
    color: var(--system-logo-color);
  }
}
</style>
