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
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">保存</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ElForm, ElMessage } from 'element-plus';
import { noticePut, noticePost } from '@/api/notice';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const state = reactive({});

// 表单提交
const handleSubmit = async () => {
  await formEle.value!.validate();
  formData.id
    ? await noticePut(formData.id, formData)
    : await noticePost(formData);
  ElMessage({
    type: 'success',
    message: formData.id ? '修改成功' : '新增成功',
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
  title: [{ required: true, message: '请输入广告标题', trigger: 'blur' }],
  type: [{ required: true, message: '请选择类型', trigger: 'change' }],
};

const formEle = ref<typeof ElForm>();
const resetForm = () => {
  formEle.value!.resetFields();
  formData.id = '';
};
</script>

<style lang="scss" scoped>
.demo-form {
  width: 500px;
  .el-select {
    width: 100%;
  }
}
</style>
