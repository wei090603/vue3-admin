<template>
  <FilterGroup v-bind="filterGroup"></FilterGroup>

  <div class="operate-wrapper">
    <div class="operate-left-btn">
      <el-button plain @click="formVisible = true">新增</el-button>
      <el-button plain>删除</el-button>
    </div>
    <div class="operate-right-btn">
      <el-button type="primary" class="r">导入</el-button>
      <el-button type="primary" @click="">导出</el-button>
    </div>
  </div>

  <div class="table-container">
    <table-pagination :tableOpts.sync="tableData" @getTableData="getTableData">
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

  <!-- <el-dialog
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
        :default-checked-keys="rolesResources"
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
    </el-dialog> -->
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, nextTick, toRefs } from 'vue';
import FilterGroup from '@/components/FilterGroup/index.vue';
import { GroupFilterType } from '@/constants';
import TablePagination from '@/components/TablePagination/index.vue';
import { rolesGet, rolesPost } from '@/api/roles';
import { ElForm, ElMessage, ElMessageBox } from 'element-plus';
import { PaginationSearch, Roles } from '@/interface';

interface State {
  rolesData: Roles[];
  searchForm: PaginationSearch;
  formVisible: boolean;
}

const formEle = ref<typeof ElForm>();
const state = reactive<State>({
  rolesData: [],
  searchForm: { limit: 10, page: 1 },
  formVisible: false,
});

const getTableData = async () => {
  state.searchForm.page = tableData.currentPage;
  state.searchForm.limit = tableData.pageSize;
  const { list, total } = await rolesGet(state.searchForm);
  tableData.data = list;
  tableData.total = total;
};

// const resourcesData = ref([]);
// const getResourcesList = async () => {
//   resourcesData.value = await resourcesList();
// };

const resetForm = () => {
  formEle.value!.resetFields();
};

const formClose = () => {
  resetForm();
  state.formVisible = false;
};

onMounted(() => {
  getTableData();
});

const handleFilterChange = (filters: any) => {
  // 搜索后要回到第一页
  console.log(filters, 'filters');
};

const formData = reactive({
  id: '',
  mark: '',
  roleName: '',
  remark: '',
});
const rules = reactive({
  roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
});

const handleSubmit = async () => {
  await formEle.value?.validate();
  const valid = await formEle.value?.validate();
  if (valid === true) {
    if (formData.id) {
      // await rolesPatch(formData.id, formData);
      getTableData();
      formVisible.value = false;
      ElMessage({
        type: 'success',
        message: '修改成功',
      });
    } else {
      await rolesPost(formData);
      getTableData();
      formVisible.value = false;
      resetForm();
      ElMessage({
        type: 'success',
        message: '新增成功',
      });
    }
  }
};

// const handleEdit = (item) => {
//   formVisible.value = true;
//   rolesId.value = item.id;
//   nextTick(() => {
//     for (let key in formData) {
//       formData[key] = item[key];
//     }
//   });
// };

// const tree = ref(null);
// const resourcesVisible = ref(false);
// const rolesResources = ref([]);
// const handlePermission = async ({ id }) => {
//   resourcesVisible.value = true;
//   rolesId.value = id;
//   const { resources } = await rolesMenuList(id);
//   rolesResources.value = resources;
// };

// const handleRolesMenu = async () => {
//   await rolesResourcesPatch(rolesId.value, {
//     resources: tree.value.getCheckedKeys(),
//   });
//   resourcesClose();
//   rolesId.value = '';
//   ElMessage({
//     type: 'success',
//     message: '修改成功',
//   });
// };

// const resourcesClose = () => {
//   tree.value.setCheckedKeys([]);
//   resourcesVisible.value = false;
// };

// const handleDelete = async ({ id }) => {
//   ElMessageBox.confirm('确定删除该角色, 是否继续?', '提示', {
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//     type: 'warning',
//   })
//     .then(async () => {
//       await rolesDelete(id);
//       ElMessage({
//         type: 'success',
//         message: '删除成功!',
//       });
//     })
//     .catch(() => {});
// };

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

const { formVisible } = toRefs(state);
</script>
