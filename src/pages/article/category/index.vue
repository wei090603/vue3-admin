<template>
  <FilterGroup v-bind="filterGroup"></FilterGroup>
  <div class="operate-wrapper">
    <div class="operate-left-btn">
      <el-button plain @click="formVisible = true">新增</el-button>
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
  </table-pagination>

  <el-dialog
    :title="`${formData.id ? '编辑' : '新增'}分类`"
    v-model="formVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="40%"
    :before-close="fromClose"
  >
    <el-form
      :model="formData"
      status-icon
      :rules="rules"
      ref="formEle"
      label-width="100px"
    >
      <el-form-item label="分类名：" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref, toRefs } from 'vue';
import FilterGroup from '@/components/FilterGroup/index.vue';
import { GroupFilterType } from '@/constants';
import {
  categoryDel,
  categoryGet,
  categoryPatch,
  categoryPost,
} from '@/api/article';
import { ElForm, ElMessage, ElMessageBox } from 'element-plus';

const state = reactive<API.Category.CategoryState>({
  searchForm: { limit: 10, page: 1 },
  formVisible: false,
});

const formData = reactive<API.Category.CategoryItem>({
  id: '',
  title: '',
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
  const { list, total } = await categoryGet(state.searchForm);
  tableData.data = list;
  tableData.total = total;
};

const formEle = ref<typeof ElForm>();
const resetForm = () => {
  formEle.value!.resetFields();
  formData.id = '';
};

const fromClose = () => {
  resetForm();
  state.formVisible = false;
};

// 表单提交
const handleSubmit = async () => {
  await formEle.value!.validate();
  formData.id
    ? await categoryPatch(formData.id, formData)
    : await categoryPost(formData);
  getTableData();
  ElMessage({
    type: 'success',
    message: formData.id ? '修改成功' : '新增成功',
  });
  fromClose();
};

// 点击编辑还原表单数据
const handleEdit = (item: API.Category.CategoryItem) => {
  state.formVisible = true;
  nextTick(() => {
    formData.id = item.id;
    formData.title = item.title;
  });
};

const handleDel = ({ id }: API.Category.CategoryItem) => {
  ElMessageBox.confirm('确定删除该分类, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await categoryDel(id);
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
      label: '分类名：',
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
      label: '分类名',
      prop: 'title',
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
    width: '300',
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

const rules = reactive({
  title: [
    { required: true, message: '请输入分类名', trigger: 'blur' },
    { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' },
  ],
});

const { formVisible } = toRefs(state);

onMounted(() => {
  getTableData();
});
</script>
