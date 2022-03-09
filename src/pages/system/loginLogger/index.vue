<template>
  <FilterGroup v-bind="filterGroup"></FilterGroup>
  <div class="operate-wrapper">
    <div class="operate-left-btn">
      <el-button plain type="danger">删除</el-button>
    </div>
    <div class="operate-right-btn">
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
  </div>
  <table-pagination
    v-model:tableOpts="tableData"
    @getTableData="getTableData"
    @handleDel="handleDel"
  >
    <template #manager="props">
      <span>{{ props.value.account }}</span>
    </template>
  </table-pagination>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import FilterGroup from '@/components/FilterGroup/index.vue';
import { GroupFilterType } from '@/constants';
import { loginLoggerDel, loginLoggerGet } from '@/api/loginLogger';
import { ElMessage, ElMessageBox } from 'element-plus';

const state = reactive<API.CommonState>({
  searchForm: { limit: 10, page: 1 },
});

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  tableData.currentPage = 1;
  state.searchForm = filters;
  getTableData();
};

const getTableData = async () => {
  state.searchForm.page = tableData.currentPage;
  state.searchForm.limit = tableData.pageSize;
  const { list, total } = await loginLoggerGet(state.searchForm);
  tableData.data = list;
  tableData.total = total;
};

const handleDel = ({ id }: API.LoginLogger.LoginLoggerItem) => {
  ElMessageBox.confirm('确定删除该记录, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await loginLoggerDel(id);
      getTableData();
      ElMessage({
        type: 'success',
        message: '删除成功!',
      });
    })
    .catch(() => {});
};

const filterGroup = reactive({
  onClickSearch: handleFilterChange,
  onClickClear: handleFilterChange,
  filters: [
    {
      type: GroupFilterType.input,
      key: 'name',
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
  ],
});

const tableData = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 1,
  data: [],
  multipleTable: true,
  multipleSelection: [],
  indexes: ['序号'],
  dynamic: true,
  hasOperation: true,
  pagination: true,
  pageHandleFunc: 'getTableData',
  column: [
    {
      label: '用户名',
      prop: 'manager',
      useSlot: true,
    },
    {
      label: '登录地址',
      prop: 'loginAddress',
    },
    {
      label: '登录IP',
      prop: 'loginIp',
    },
    {
      label: '登录时间',
      prop: 'createdAt',
      filterParams: ['formatTime', 'YYYY-MM-DD HH:MM:ss'],
    },
  ],
  operation: {
    label: '操作', // 操作
    width: '200',
    data: [
      {
        label: '删除',
        type: 'danger',
        icon: 'el-icon-delete',
        handleFunc: 'handleDel',
      },
    ],
  },
});

onMounted(() => {
  getTableData();
});
</script>
