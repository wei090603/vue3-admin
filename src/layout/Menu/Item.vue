<template>
  <i v-if="icon" :class="icon"></i>
  <span v-if="title">{{ title }}</span>
</template>

<script lang="ts" setup>
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
