<template>
  <component :is="type" v-bind="linkProps(to)" @click="hideMenu">
    <slot> </slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'appLink',
});
</script>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const store = useAppStore();
const porps = defineProps({
  to: {
    type: String,
    required: true,
  },
});
const { isCollapse, expandOneMenu } = storeToRefs(store);
const type = 'router-link';
const linkProps = (to: string) => {
  return {
    to: to,
  };
};
const hideMenu = () => {
  if (document.body.clientWidth <= 1000 && !isCollapse.value) {
    store.isCollapse = true;
  }
};
</script>
<style lang=""></style>
