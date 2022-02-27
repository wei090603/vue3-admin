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
        <ImagePreview :url="props.value" :size="64"></ImagePreview>
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

const state = reactive<API.Advertise.AdvertiseState>({
  searchForm: { limit: 10, page: 1 },
  formVisible: false,
});

const formData = reactive<API.Advertise.AdvertiseItem>({
  id: '',
  title: '',
  picture: '',
  type: API.Advertise.Type.HOME,
  status: true,
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
  const { list, total } = await advertiseGet(state.searchForm);
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

const handleDel = ({ id }: API.Tag.TagItem) => {
  ElMessageBox.confirm('确定删除该标签, 是否继续?', '提示', {
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
      type: GroupFilterType.input,
      key: 'position',
      label: '广告位置',
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
      label: '广告标题',
      prop: 'title',
      minWidth: '80',
    },
    {
      label: '广告位置',
      prop: 'position',
      minWidth: '80',
    },
    {
      label: '广告图',
      prop: 'picture',
      width: '100',
      useSlot: true,
    },
    {
      label: '创建日期',
      prop: 'createdAt',
      minWidth: '80',
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
        handleFunc: 'handleDelete',
      },
    ],
  },
});

const rules = reactive({
  title: [{ required: true, message: '请输入广告名称', trigger: 'blur' }],
  position: [{ required: true, message: '请选择广告位置', trigger: 'change' }],
  picture: [{ required: true, message: '请上传广告图片', trigger: 'change' }],
});

const { formVisible } = toRefs(state);

onMounted(() => {
  getTableData();
});
</script>

<style lang="scss" scoped></style>
