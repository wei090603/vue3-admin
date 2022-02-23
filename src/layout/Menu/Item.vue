<template>
  <!-- <i v-if="icon" :class="icon"></i> -->
  <el-icon><eleme /></el-icon>
  <span v-if="title">{{ title }}</span>
</template>

<script lang="ts" setup>
import { Eleme } from '@element-plus/icons-vue';
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});
</script>
