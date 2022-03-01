<template>
  <FilterGroup v-bind="filterGroup"></FilterGroup>
  <div class="operate-wrapper">
    <div class="operate-left-btn">
      <el-button plain>新增</el-button>
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
    @handleEdit="handleEdit"
    @handleDel="handleDel"
  >
    <template #type="props">
      <el-tag class="ml-2" type="success" v-if="props.value === 1">通知</el-tag>
      <el-tag class="ml-2" type="success" v-if="props.value === 2">公告</el-tag>
    </template>
  </table-pagination>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import FilterGroup from '@/components/FilterGroup/index.vue';
import { GroupFilterType } from '@/constants';
import { noticeDel, noticeGet } from '@/api/notice';
import { ElMessage, ElMessageBox } from 'element-plus';
import router from '@/router';

const state = reactive<API.Notice.NoticeState>({
  searchForm: { limit: 10, page: 1 },
});

// const formData = reactive<API.Notice.NoticeItem>({
//   id: '',
//   title: '',
//   type: 1,
//   status: true,
//   createBy: '',
// });

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  tableData.currentPage = 1;
  state.searchForm = filters;
  getTableData();
};

const getTableData = async () => {
  state.searchForm.page = tableData.currentPage;
  state.searchForm.limit = tableData.pageSize;
  const { list, total } = await noticeGet(state.searchForm);
  tableData.data = list;
  tableData.total = total;
};

const handleEdit = (item: API.Notice.NoticeItem) => {
  router.push({ name: 'noticeDetil', params: { id: item.id } });
};

const handleDel = ({ id }: API.Notice.NoticeItem) => {
  ElMessageBox.confirm('确定删除该标签, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await noticeDel(id);
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
      key: 'title',
      label: '标题：',
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
      key: 'title',
      label: '创建人：',
      initialValue: '',
      validator: [
        {
          max: 50,
          message: '请输入 50 个以内字符',
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
      label: '标题',
      prop: 'title',
    },
    {
      label: '类型',
      prop: 'type',
      useSlot: true,
    },
    {
      label: '状态',
      prop: 'status',
      render: (value: boolean) => (value ? '正常' : '关闭'),
    },
    {
      label: '创建人',
      prop: 'createBy',
    },
    {
      label: '创建日期',
      prop: 'createdAt',
      date: true,
    },
    {
      label: '更新日期',
      prop: 'updateAt',
      date: true,
    },
  ],
  operation: {
    label: '操作', // 操作
    width: '200',
    data: [
      {
        label: '编辑',
        type: 'primary',
        icon: 'el-icon-edit',
        handleFunc: 'handleEdit',
      },
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
