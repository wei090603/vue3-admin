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
    :title="`${formData.id ? '编辑' : '新增'}导航`"
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
      <el-form-item label="导航标题：" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="导航链接：" prop="link">
        <el-input v-model="formData.link"></el-input>
      </el-form-item>
      <el-form-item label="排序：" prop="sort">
        <el-input v-model="formData.sort"></el-input>
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
import { menuDel, menuGet, menuPatch, menuPost } from '@/api/menu';
import { ElForm, ElMessage, ElMessageBox } from 'element-plus';

const state = reactive<API.Menu.MenuState>({
  searchForm: {},
  formVisible: false,
});

const formData = reactive<API.Menu.MenuItem>({
  id: '',
  title: '',
  link: '',
  sort: '',
});

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  tableData.currentPage = 1;
  state.searchForm = filters;
  getTableData();
};

const getTableData = async () => {
  tableData.data = await menuGet(state.searchForm);
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
    ? await menuPatch(formData.id, formData)
    : await menuPost(formData);
  getTableData();
  ElMessage({
    type: 'success',
    message: formData.id ? '修改成功' : '新增成功',
  });
  fromClose();
};

// 点击编辑还原表单数据
const handleEdit = (item: API.Menu.MenuItem) => {
  state.formVisible = true;
  nextTick(() => {
    formData.id = item.id;
    formData.title = item.title;
    formData.link = item.link;
    formData.sort = item.sort;
  });
};

const handleDel = ({ id }: API.Menu.MenuItem) => {
  ElMessageBox.confirm('确定删除该导航, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await menuDel(id);
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
      label: '导航名：',
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
  pagination: false,
  pageHandleFunc: 'getTableData',
  column: [
    {
      label: '导航名',
      prop: 'title',
    },
    {
      label: '链接',
      prop: 'link',
    },
    {
      label: '排序',
      prop: 'sort',
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
    { required: true, message: '请输入导航名', trigger: 'blur' },
    { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' },
  ],
  link: [{ required: true, message: '请输入导航链接', trigger: 'blur' }],
});

const { formVisible } = toRefs(state);

onMounted(() => {
  getTableData();
});
</script>
