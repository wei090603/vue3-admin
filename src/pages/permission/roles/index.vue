<template>
  <FilterGroup v-bind="filterGroup"></FilterGroup>

  <div class="operate-wrapper">
    <div class="operate-left-btn">
      <el-button plain @click="formVisible = true">新增</el-button>
      <el-button plain type="danger">删除</el-button>
    </div>
    <div class="operate-right-btn">
      <el-button type="primary">导入</el-button>
      <el-button type="primary" @click="">导出</el-button>
    </div>
  </div>

  <div class="table-container">
    <table-pagination
      :tableOpts.sync="tableData"
      @getTableData="getTableData"
      @handleEdit="handleEdit"
      @handleDelete="handleDelete"
      @handlePermission="handlePermission"
    >
    </table-pagination>
  </div>

  <el-dialog
    :title="`${formData.id ? '编辑' : '新增'}角色`"
    v-model="formVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="40%"
    :before-close="formClose"
  >
    <el-form
      ref="formEle"
      :model="formData"
      :rules="rules"
      status-icon
      label-width="100px"
      class="demo-resourceForm"
    >
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="formData.roleName"></el-input>
      </el-form-item>
      <el-form-item label="标识" prop="mark">
        <el-input v-model="formData.mark"></el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="remark">
        <el-input v-model="formData.remark" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-dialog
    title="分配菜单"
    v-model="resourcesVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="40%"
    :before-close="resourcesClose"
  >
    <el-tree
      ref="tree"
      :data="resourcesData"
      show-checkbox
      default-expand-all
      :default-checked-keys="resourcesForm.rolesResources"
      node-key="id"
      highlight-current
      :props="{ label: 'title' }"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="handleRolesMenu">保存</el-button>
        <el-button @click="resourcesClose">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, nextTick, toRefs } from 'vue';
import FilterGroup from '@/components/FilterGroup/index.vue';
import { GroupFilterType } from '@/constants';
import TablePagination from '@/components/TablePagination/index.vue';
import {
  rolesDel,
  rolesGet,
  rolesPost,
  rolesPatch,
  rolesMenuList,
  rolesResourcesPatch,
} from '@/api/roles';
import { ElForm, ElMessage, ElMessageBox } from 'element-plus';
import { resourcesGet } from '@/api/resources';

const formEle = ref<typeof ElForm>();
const state = reactive<API.Role.RoleState>({
  rolesData: [],
  searchForm: { limit: 10, page: 1 },
  formVisible: false,
  resourcesData: [],
  resourcesVisible: false,
});

const getTableData = async () => {
  state.searchForm.page = tableData.currentPage;
  state.searchForm.limit = tableData.pageSize;
  const { list, total } = await rolesGet(state.searchForm);
  tableData.data = list;
  tableData.total = total;
};

const getResourcesList = async () => {
  state.resourcesData = await resourcesGet({});
};

const resetForm = () => {
  formEle.value!.resetFields();
};

const formClose = () => {
  resetForm();
  formData.id = '';
  state.formVisible = false;
};

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  console.log(filters, 'filters');
};

const formData = reactive<API.Role.RoleItem>({
  id: '',
  mark: '',
  roleName: '',
  remark: '',
});

const resourcesForm = reactive({
  id: '',
  rolesResources: [],
});

const rules = reactive({
  roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
  mark: [{ required: true, message: '请输入角色标识', trigger: 'blur' }],
});

const handleSubmit = async () => {
  await formEle.value!.validate();
  formData.id
    ? await rolesPatch(+formData.id, formData)
    : await rolesPost(formData);
  getTableData();
  ElMessage({
    type: 'success',
    message: formData.id ? '修改成功' : '新增成功',
  });
  formClose();
};

const handleEdit = (item: API.Role.RoleItem) => {
  formVisible.value = true;
  formData.id = item.id;
  nextTick(() => {
    formData.mark = item.mark;
    formData.remark = item.remark;
    formData.roleName = item.roleName;
  });
};

const tree: any = ref(null);
const handlePermission = async ({ id }: API.Role.RoleItem) => {
  state.resourcesVisible = true;
  resourcesForm.id = id as string;
  resourcesForm.rolesResources = await rolesMenuList(+id);
};

const handleRolesMenu = async () => {
  await rolesResourcesPatch(+resourcesForm.id, {
    resourcesId: tree.value.getCheckedKeys(),
  });
  resourcesClose();
  ElMessage({
    type: 'success',
    message: '修改成功',
  });
};

const resourcesClose = () => {
  tree.value!.setCheckedKeys([]);
  resourcesForm.rolesResources = [];
  resourcesForm.id = '';
  resourcesVisible.value = false;
};

const handleDelete = async ({ id }: API.Role.RoleItem) => {
  ElMessageBox.confirm('确定删除该角色, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await rolesDel(+id);
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
      key: 'roleName',
      label: '角色名：',
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
      type: GroupFilterType.date,
      key: 'createdAt',
      label: '创建时间：',
      className: 'date-range',
      initialValue: '',
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
      label: '角色名',
      prop: 'roleName',
      minWidth: '80',
    },
    {
      label: '标识',
      prop: 'mark',
      minWidth: '80',
    },
    {
      label: '备注',
      prop: 'remark',
      minWidth: '80',
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
    width: '300',
    data: [
      {
        label: '编辑',
        type: 'primary',
        icon: 'el-icon-edit',
        handleFunc: 'handleEdit',
      },
      {
        label: '分配权限',
        type: 'primary',
        icon: 'el-icon-message',
        handleFunc: 'handlePermission',
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

onMounted(() => {
  getTableData();
  getResourcesList();
});

const { formVisible, resourcesVisible, resourcesData } = toRefs(state);
</script>
