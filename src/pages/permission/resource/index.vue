<template>
  <div class="warpper">
    <div class="operate clearfix">
      <div class="operate-btn-list">
        <el-button
          type="primary"
          class="btn-plain"
          @click="resourcesVisible = true"
          >新增资源</el-button
        >
        <el-button type="primary" class="btn-plain">删除选中</el-button>
        <el-button type="primary" class="btn-plain r">导入</el-button>
        <el-button type="primary" class="btn-plain r">导出</el-button>
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
              @click="handleDelete(data)"
              >删除资源</el-button
            >
          </span>
        </span>
      </template>
    </el-tree>
    <el-dialog
      :title="`${resourcesId ? '编辑' : '新增'}资源`"
      v-model="resourcesVisible"
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
          v-if="resourcesForm.parent"
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
import { onMounted, reactive, ref, nextTick } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';

onMounted(() => {
  getTableData();
});

const resourcesData = ref([]);
const getTableData = async () => {
  resourcesData.value = await resourcesList();
};

const formEle = ref(null);
const resetForm = () => {
  formEle.value.resetFields();
  resourcesId.value = '';
};

const resourcesFormClose = () => {
  resetForm();
  resourcesVisible.value = false;
};

const resourcesVisible = ref(false);
const resourcesForm = reactive({
  parent: '',
  title: '',
  path: '',
  icon: '',
  type: 'menu',
});

const rules = reactive({
  title: [{ required: true, message: '请输入资源名称', trigger: 'blur' }],
  path: [{ required: true, message: '请输入资源路径', trigger: 'blur' }],
});

const parentName = ref('');
const handleAppend = (parent) => {
  parentName.value = parent.title;
  resourcesForm.parent = parent.id;
  resourcesVisible.value = true;
};

const resourcesId = ref('');
const handleUpdate = (item) => {
  console.log(item, 'item');
  resourcesVisible.value = true;
  resourcesId.value = item.id;
  nextTick(() => {
    for (let key in resourcesForm) {
      resourcesForm[key] = item[key];
    }
  });
};

const handleSubmit = async () => {
  const valid = await formEle.value?.validate();
  if (valid === true) {
    if (resourcesId.value) {
      await resourcesPatch(resourcesId.value, resourcesForm);
      getTableData();
      resourcesVisible.value = false;
      ElMessage({
        type: 'success',
        message: '修改成功',
      });
    } else {
      await resourcesCreate(resourcesForm);
      getTableData();
      resourcesVisible.value = false;
      resetForm();
      ElMessage({
        type: 'success',
        message: '新增成功',
      });
    }
  }
};

const handleDelete = async ({ id }) => {
  ElMessageBox.confirm('确定删除该资源, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      await resourcesDelete(id);
      ElMessage({
        type: 'success',
        message: '删除成功!',
      });
    })
    .catch(() => {});
};
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
