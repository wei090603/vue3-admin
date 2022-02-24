<template>
  <div class="operate-wrapper">
    <div class="operate-left-btn">
      <el-button plain @click="formVisible = true">新增</el-button>
    </div>
    <div class="operate-right-btn">
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref, toRefs } from 'vue';
import FilterGroup from '@/components/FilterGroup/index.vue';
import ImagePreview from '@/components/ImagePreview/index.vue';
import { GroupFilterType } from '@/constants';

interface State {
  formVisible: boolean;
}

const state = reactive<State>({
  // searchForm: { limit: 10, page: 1 },
  formVisible: false,
});

const { formVisible } = toRefs(state);
</script>
