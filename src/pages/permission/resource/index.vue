<template>
  <div class="warpper">
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
    <el-tree
      :data="resourcesData"
      show-checkbox
      node-key="id"
      :props="{ label: 'title' }"
      default-expand-all
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" @click="handleAppend(data)"
              >添加资源</el-button
            >
            <el-button type="text" @click="handleUpdate(data)"
              >编辑资源</el-button
            >
            <el-button
              class="notice-text-color"
              type="text"
              @click="handleDelete(data.id)"
              >删除资源</el-button
            >
          </span>
        </span>
      </template>
    </el-tree>
    <el-dialog
      :title="`${resourcesForm.id ? '编辑' : '新增'}资源`"
      v-model="formVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="40%"
      :before-close="resourcesFormClose"
    >
      <el-form
        ref="formEle"
        :model="resourcesForm"
        :rules="rules"
        label-width="100px"
        class="demo-resourceForm"
      >
        <el-form-item
          label="父对象"
          prop="parentLable"
          v-if="resourcesForm.parentId"
        >
          <el-input v-model="parentName" disabled></el-input>
        </el-form-item>
        <el-form-item label="资源名称" prop="title">
          <el-input v-model="resourcesForm.title"></el-input>
        </el-form-item>
        <el-form-item label="资源路由" prop="path">
          <el-input v-model="resourcesForm.path"></el-input>
        </el-form-item>
        <el-form-item label="Icon" prop="icon">
          <el-input v-model="resourcesForm.icon"></el-input>
        </el-form-item>
        <el-form-item label="菜单/按钮" prop="type">
          <el-select v-model="resourcesForm.type" placeholder="资源类型">
            <el-option label="菜单" value="menu"></el-option>
            <el-option label="按钮" value="button"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs, nextTick } from 'vue';
import { ElForm, ElMessage, ElMessageBox } from 'element-plus';
import {
  resourcesGet,
  resourcesPost,
  resourcesPatch,
  resourcesDelete,
} from '@/api/resources';

const formEle = ref<typeof ElForm>();
const state = reactive<API.Resources.State>({
  formVisible: false,
  resourcesData: [],
  parentName: '',
});

const getTableData = async () => {
  state.resourcesData = await resourcesGet({});
};

const resetForm = () => {
  formEle.value!.resetFields();
};

const resourcesFormClose = () => {
  resetForm();
  resourcesForm.id = '';
  state.parentName = '';
  resourcesForm.parentId = '';
  state.formVisible = false;
};

const resourcesForm = reactive<API.Resources.ResourcesItem>({
  id: '',
  parentId: '',
  title: '',
  path: '',
  icon: '',
  type: 'menu',
});

const handleAppend = (item: API.Resources.ResourcesItem) => {
  state.parentName = item.title;
  resourcesForm.parentId = item.id;
  state.formVisible = true;
};

const handleUpdate = (item: API.Resources.ResourcesItem) => {
  resourcesForm.id = item.id;
  state.formVisible = true;
  nextTick(() => {
    resourcesForm.title = item.title;
    resourcesForm.path = item.path;
    resourcesForm.icon = item.icon;
    resourcesForm.type = item.type;
  });
};

const handleDelete = async (id: number) => {
  ElMessageBox.confirm('确定删除该资源, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await resourcesDelete(id);
      getTableData();
      ElMessage({
        type: 'success',
        message: '删除成功!',
      });
    })
    .catch(() => {});
};

const rules = reactive({
  title: [{ required: true, message: '请输入资源名称', trigger: 'blur' }],
  path: [{ required: true, message: '请输入资源路径', trigger: 'blur' }],
});

const handleSubmit = async () => {
  await formEle.value!.validate();
  resourcesForm.id
    ? await resourcesPatch(+resourcesForm.id, resourcesForm)
    : await resourcesPost(resourcesForm);
  getTableData();
  ElMessage({
    type: 'success',
    message: resourcesForm.id ? '修改成功' : '新增成功',
  });
  resourcesFormClose();
};

onMounted(() => {
  getTableData();
});

const { formVisible, resourcesData, parentName } = toRefs(state);
</script>

<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.tree-btn {
  padding: 4px !important;
}
</style>
