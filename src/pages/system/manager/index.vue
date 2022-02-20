<template>
  <FilterGroup v-bind="filterGroup"></FilterGroup>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import FilterGroup from '@/components/FilterGroup/index.vue';
import { GroupFilterType } from '@/constants';

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  console.log(filters, 'filters');
};

const filterGroup = reactive({
  onClickSearch: handleFilterChange,
  onClickClear: handleFilterChange,
  filters: [
    {
      type: GroupFilterType.input,
      key: 'nickName',
      label: '用户名：',
      initialValue: '',
      validator: [
        {
          max: 20,
          message: '请输入 20 个以内字符',
          trigger: ['blur', 'change'],
        },
      ],
    },
    {
      type: GroupFilterType.input,
      key: 'account',
      label: '账号：',
      initialValue: '',
      validator: [
        {
          max: 20,
          message: '请输入 20 个以内字符',
          trigger: ['blur', 'change'],
        },
      ],
    },
  ],
});
</script>
