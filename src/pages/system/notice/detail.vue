<template>
  <el-form
    ref="formEle"
    :model="formData"
    :rules="rules"
    label-width="100px"
    class="demo-form"
  >
    <el-form-item label="标题：" prop="title">
      <el-input v-model="formData.title"></el-input>
    </el-form-item>
    <el-form-item label="类型：" prop="type">
      <el-select v-model="formData.type" placeholder="请选择类型">
        <el-option label="通知" :value="1"></el-option>
        <el-option label="公告" :value="2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="状态：" prop="status">
      <el-radio-group v-model="formData.status">
        <el-radio :label="true">显示</el-radio>
        <el-radio :label="false">隐藏</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="内容：" prop="content">
      <Tinymce ref="editorRef" v-model:content="formData.content" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from 'vue';
import { ElForm, ElMessage } from 'element-plus';
import { noticePut, noticePost, noticeGetDetail } from '@/api/notice';
import { useRouter, useRoute } from 'vue-router';
import Tinymce from '@/components/Tinymce/index.vue';

const router = useRouter();
const route = useRoute();

const editorRef = ref<HTMLElement>();
const state = reactive({
  isAdd: route.name === 'noticeAdd', // 新增
  isEdit: route.name === 'noticeEdit', // 编辑
});

const handleGetDetail = async (id: number) => {
  const data = await noticeGetDetail(id);
  formData.id = data.id;
  formData.title = data.title;
  formData.type = data.type;
  formData.status = data.status;
  formData.content = data.content;
  console.log(data, 'data');
};

// 表单提交
const handleSubmit = async () => {
  await formEle.value!.validate();
  state.isEdit
    ? await noticePut(route.params.id as string, formData)
    : await noticePost(formData);
  ElMessage({
    type: 'success',
    message: state.isEdit ? '修改成功' : '新增成功',
  });
  resetForm();
  router.back();
};

const formData = reactive<API.Notice.NoticeFormItem>({
  id: '',
  title: '',
  type: 1,
  status: true,
  content: '',
});

const rules = {
  title: [{ required: true, message: '请输入通告标题', trigger: 'blur' }],
  type: [{ required: true, message: '请选择类型', trigger: 'change' }],
  status: [{ required: true, message: '请选择状态', trigger: 'change' }],
};

const formEle = ref<typeof ElForm>();
const resetForm = () => {
  formData.content = '';
  formEle.value!.resetFields();
};

onMounted(() => {
  if (route.params.id) handleGetDetail(+route.params.id);
});
</script>

<style lang="scss" scoped>
.demo-form {
  :deep(.el-input) {
    width: 400px;
  }
  .el-select {
    width: 400px;
  }
}
</style>
