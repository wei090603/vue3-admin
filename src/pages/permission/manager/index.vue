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
    @handleRestPwd="handleRestPwd"
  >
    <template #avatar="props">
      <ImagePreview :url="props.value" :size="64"></ImagePreview>
    </template>
    <template #status="props">
      {{ props.value ? '启用' : '禁用' }}
      <el-switch
        active-color="#409eff"
        v-model="props.value"
        @change="handleStatusClick(props.data.id)"
      ></el-switch>
    </template>
    <template #roles="props">
      <span v-for="item in props.data.roles" :key="item.id">
        <el-button type="success" size="small">{{ item.roleName }}</el-button>
      </span>
    </template>
  </table-pagination>

  <el-dialog
    :title="`${formData.id ? '编辑' : '新增'}用户`"
    v-model="formVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="40%"
    :before-close="managerFromClose"
  >
    <el-form
      :model="formData"
      status-icon
      :rules="rules"
      ref="managerFormEle"
      label-width="100px"
    >
      <el-form-item label="用户名：" prop="account">
        <el-input
          v-model="formData.account"
          :disabled="!!formData.id"
        ></el-input>
      </el-form-item>
      <el-form-item label="姓名：" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="角色：" prop="roles">
        <el-select
          v-model="formData.roles"
          multiple
          placeholder="请选择"
          size="default"
        >
          <el-option
            v-for="item in rolesData"
            :key="item.id"
            :label="item.roleName"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="手机号码：" prop="phone">
        <el-input v-model="formData.phone"></el-input>
      </el-form-item>
      <el-form-item label="描述：" prop="remark">
        <el-input v-model="formData.remark"></el-input>
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
import ImagePreview from '@/components/ImagePreview/index.vue';
import { GroupFilterType } from '@/constants';
import {
  managerGet,
  managerPatch,
  managerPost,
  managerPwdPatch,
  managerStatusPatch,
} from '@/api/manager';
import { ElForm, ElMessage, ElMessageBox } from 'element-plus';
import { rolesGetList } from '@/api/roles';

const state = reactive<API.Manager.ManagerState>({
  rolesData: [],
  searchForm: { limit: 10, page: 1, name: '', account: '', phone: '' },
  formVisible: false,
});

// 获取角色列表
const rolesList = async () => {
  state.rolesData = await rolesGetList();
};

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  tableData.currentPage = 1;
  state.searchForm = filters;
  getTableData();
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
      label: '用户名',
      prop: 'account',
      minWidth: '80',
    },
    {
      label: '姓名',
      prop: 'name',
      minWidth: '120',
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
      prop: 'phone',
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
      filterParams: ['formatTime', 'YYYY-MM-DD HH:MM:ss'],
      minWidth: '100',
    },
  ],
  operation: {
    label: '操作', // 操作
    width: '260',
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
      key: 'account',
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
      key: 'name',
      label: '姓名：',
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

const getTableData = async () => {
  state.searchForm.page = tableData.currentPage;
  state.searchForm.limit = tableData.pageSize;
  const { list, total } = await managerGet(state.searchForm);
  tableData.data = list;
  tableData.total = total;
};

// 清空表单
const managerFormEle = ref<typeof ElForm>();
const resetForm = () => {
  managerFormEle.value!.resetFields();
};

const managerFromClose = () => {
  resetForm();
  formData.id = '';
  state.formVisible = false;
};

const formData = reactive<API.Manager.ManagerFormItem>({
  id: '',
  name: '',
  account: '',
  email: '',
  phone: '',
  remark: '',
  roles: [],
});

const checkPhone = (rule: any, value: string, callback: any) => {
  if (value) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if (!reg.test(value)) {
      return callback(new Error('请输入正确的手机号'));
    }
  }
  callback();
};

const rules = reactive({
  account: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' },
  ],
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' },
  ],
  email: [
    {
      required: false,
      // type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: 'blur',
    },
  ],
  roles: [{ required: true, message: '请选择角色', trigger: 'blur' }],
  phone: [
    {
      required: false,
      trigger: 'blur',
      validator: checkPhone,
      message: '手机号格式错误',
    },
  ],
});

// 表单提交
const handleSubmit = async () => {
  await managerFormEle.value?.validate();
  formData.id
    ? await managerPatch(formData.id, formData)
    : await managerPost(formData);
  getTableData();
  ElMessage({
    type: 'success',
    message: formData.id ? '修改成功' : '新增成功',
  });
  managerFromClose();
};

// 重置密码
const handleRestPwd = async (item: API.Manager.ManagerTableItem) => {
  ElMessageBox.confirm('确定重置该用户密码为123456, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await managerPwdPatch(item.id);
      ElMessage({
        type: 'success',
        message: '重置成功!',
      });
    })
    .catch(() => {});
};

// 禁用用户
const handleStatusClick = async (id: string) => {
  await managerStatusPatch(id);
  getTableData();
  ElMessage({
    message: '修改成功',
    type: 'success',
  });
};

// 点击编辑还原表单数据
const handleEdit = (item: API.Manager.ManagerTableItem) => {
  state.formVisible = true;
  nextTick(() => {
    formData.id = item.id;
    formData.account = item.account;
    formData.name = item.name;
    formData.phone = item.phone;
    formData.email = item.email;
    const roles: any = item.roles.map(({ id }) => id);
    formData.remark = item.remark;
    formData.roles = roles;
  });
};

const { rolesData, formVisible } = toRefs(state);

onMounted(() => {
  getTableData();
  rolesList();
});
</script>

<style lang="scss" scoped>
:deep(.el-select.el-select--default) {
  width: 100%;
}
</style>
