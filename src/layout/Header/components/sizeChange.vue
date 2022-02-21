<template>
  <el-dropdown size="medium" @command="handleCommand">
    <span class="el-dropdown-link">
      <el-icon class="sfont system-zuixiaohua"><copy-document /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="d in list"
          :key="d.size"
          :command="d.size"
          :disabled="elementSize === d.size"
        >
          {{ d.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
import { CopyDocument } from '@element-plus/icons-vue';

const store = useAppStore();
const route = useRoute();
const router = useRouter();
const { elementSize } = storeToRefs(store);
const list = [
  { size: 'default', name: '默认' },
  { size: 'medium', name: '中' },
  { size: 'small', name: '小' },
  { size: 'mini', name: '迷你' },
];
const { fullPath } = unref(route);

const handleCommand = (command: string) => {
  store.elementSize = command;
  setElementSize();
};
const setElementSize = () => {
  // this.$ELEMENT.size = this.elementSize;
  router.replace({
    path: '/redirect' + route.fullPath,
  });
};
</script>

<style lang="scss" scoped></style>
