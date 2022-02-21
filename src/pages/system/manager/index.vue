<template>
  <FilterGroup v-bind="filterGroup"></FilterGroup>
  <div class="operate-wrapper">
    <div class="operate-btn-list">
      <router-link to="">
        <el-button plain>新增</el-button>
      </router-link>
      <el-button type="primary" @click="">导出</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import FilterGroup from '@/components/FilterGroup/index.vue';
import { GroupFilterType } from '@/constants';
import { managerGet } from '@/api/manager';

const router = useRouter();

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  console.log(filters, 'filters');
};

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
      label: '昵称',
      prop: 'nickName',
      minWidth: '120',
    },
    {
      label: '账号',
      prop: 'account',
      minWidth: '80',
    },
    {
      label: '邮箱',
      prop: 'email',
      width: '160',
    },
    {
      label: '头像',
      prop: 'avatar',
      width: '100',
      useSlot: true,
    },
    {
      label: '手机号',
      prop: 'phoneNum',
      minWidth: '120',
    },
    {
      label: '角色',
      prop: 'roles',
      minWidth: '80',
      useSlot: true,
    },
    {
      label: '状态',
      prop: 'status',
      minWidth: '80',
      useSlot: true,
    },
    {
      label: '备注',
      prop: 'remark',
      minWidth: '100',
    },
    {
      label: '创建日期',
      prop: 'createdAt',
      minWidth: '100',
      date: true,
    },
  ],
  operation: {
    label: '操作', // 操作
    width: '300',
    data: [
      {
        label: '编辑',
        type: 'primary',
        icon: 'el-icon-edit',
        handleFunc: 'handleEdit',
      },
      {
        label: '重置密码',
        type: 'warning',
        icon: 'el-icon-message',
        handleFunc: 'handleRestPwd',
      },
      {
        label: '删除',
        type: 'danger',
        icon: 'el-icon-delete',
        handleFunc: 'handleDelete',
      },
    ],
  },
});

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

interface PaginationSearch {
  page: number;
  limit: number;
  [propName: string]: any;
}

const searchForm = reactive<PaginationSearch>({ limit: 10, page: 1 });
const getTableData = async () => {
  searchForm.page = tableData.currentPage;
  searchForm.limit = tableData.pageSize;
  const { list, total } = await managerGet(searchForm);
  tableData.data = list;
  tableData.total = total;
};
</script>
