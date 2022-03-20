<template>
  <div class="warpper">
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
      :tableOpts.sync="tableData"
      @getTableData="getTableData"
      @handleEdit="handleEdit"
      @handleDel="handleDel"
    >
      <template v-slot:picture="props">
        <ImagePreview
          :url="fileBaseUrl + props.value"
          :size="64"
        ></ImagePreview>
      </template>
    </table-pagination>

    <el-dialog
      :title="`${formData.id ? '编辑' : '新增'}广告`"
      v-model="formVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="40%"
      :before-close="fromClose"
    >
      <el-form
        ref="formEle"
        :model="formData"
        :rules="rules"
        label-width="100px"
        class="demo-form"
      >
        <el-form-item label="广告标题" prop="title">
          <el-input
            v-model="formData.title"
            placeholder="请填写广告标题"
          ></el-input>
        </el-form-item>
        <el-form-item label="广告位置" prop="type">
          <el-select v-model="formData.type" placeholder="请选择广告位置">
            <el-option label="首页" value="home"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="广告位置" prop="picture">
          <ImageUploader
            class="uploadFile"
            uploaderSize="large"
            v-model:imageUrl="formData.picture"
          ></ImageUploader>
        </el-form-item>
        <el-form-item label="广告状态" prop="status">
          <el-radio v-model="formData.status" :label="true" size="large"
            >显示</el-radio
          >
          <el-radio v-model="formData.status" :label="false" size="large"
            >隐藏</el-radio
          >
        </el-form-item>
        <el-form-item label="描述：" prop="describe">
          <el-input v-model="formData.describe" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, nextTick, toRefs } from 'vue';
import FilterGroup from '@/components/FilterGroup/index.vue';
import { GroupFilterType } from '@/constants';
import TablePagination from '@/components/TablePagination/index.vue';
import ImageUploader from '@/components/FileUploader/ImageUploader.vue';
import ImagePreview from '@/components/ImagePreview/index.vue';
import {
  advertiseDel,
  advertiseGet,
  advertisePatch,
  advertisePost,
} from '@/api/advertise';
import { ElMessage, ElMessageBox, ElForm } from 'element-plus';

const fileBaseUrl = import.meta.env.VITE_FILE_BASE_URL;
const state = reactive<API.Advertise.AdvertiseState>({
  searchForm: { limit: 10, page: 1, title: '', type: '' },
  formVisible: false,
});

enum Type {
  HOME = 'home',
}

const formData = reactive<API.Advertise.AdvertiseItem>({
  id: '',
  title: '',
  picture: '',
  type: Type.HOME,
  status: true,
  describe: '',
});

const type = {
  home: '首页',
};

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  tableData.currentPage = 1;
  state.searchForm = filters;
  getTableData();
};

const getTableData = async () => {
  state.searchForm.page = tableData.currentPage;
  state.searchForm.limit = tableData.pageSize;
  const { list, total } = await advertiseGet(state.searchForm);
  tableData.data = list;
  tableData.total = total;
};

const formEle = ref<typeof ElForm>();
const resetForm = () => {
  formEle.value!.resetFields();
};

const fromClose = () => {
  resetForm();
  formData.id = '';
  state.formVisible = false;
};

// 表单提交
const handleSubmit = async () => {
  await formEle.value!.validate();
  formData.id
    ? await advertisePatch(formData.id, formData)
    : await advertisePost(formData);
  getTableData();
  ElMessage({
    type: 'success',
    message: formData.id ? '修改成功' : '新增成功',
  });
  fromClose();
};

// 点击编辑还原表单数据
const handleEdit = (item: API.Advertise.AdvertiseItem) => {
  state.formVisible = true;
  nextTick(() => {
    formData.id = item.id;
    formData.title = item.title;
    formData.picture = item.picture;
    formData.type = item.type;
  });
};

const handleDel = ({ id }: API.Advertise.AdvertiseItem) => {
  ElMessageBox.confirm('确定删除该广告, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await advertiseDel(id);
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
      label: '广告标题',
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
      type: GroupFilterType.select,
      key: 'type',
      label: '广告位置',
      initialValue: '',
      options: [
        {
          label: '首页',
          value: 'home',
        },
      ],
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
      label: '广告标题',
      prop: 'title',
    },
    {
      label: '广告位置',
      prop: 'type',
      render: (value: Type) => type[value],
    },
    {
      label: '广告图',
      prop: 'picture',
      width: '100',
      useSlot: true,
    },
    {
      label: '广告状态',
      prop: 'status',
      render: (value: boolean) => (value ? '显示' : '隐藏'),
    },
    {
      label: '广告描述',
      prop: 'describe',
    },
    {
      label: '创建日期',
      prop: 'createdAt',
      minWidth: '80',
      filterParams: ['formatTime', 'YYYY-MM-DD HH:MM:ss'],
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

const rules = reactive({
  title: [{ required: true, message: '请输入广告标题', trigger: 'blur' }],
  status: [{ required: true, message: '请选择广告状态', trigger: 'change' }],
  type: [{ required: true, message: '请选择广告位置', trigger: 'change' }],
  picture: [{ required: true, message: '请上传广告图片', trigger: 'change' }],
});

const { formVisible } = toRefs(state);

onMounted(() => {
  getTableData();
});
</script>

<style lang="scss" scoped>
:deep(.el-select.el-select--default) {
  width: 100%;
}
</style>
