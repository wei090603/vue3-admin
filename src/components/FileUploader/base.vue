<template>
  <el-upload
    :limit="1"
    :list-type="listType"
    :accept="accept"
    :class="[{ 'hide-upload': hideUpload, 'disabled-upload': disabled }]"
    :disabled="disabled"
    :data="{}"
    :action="action"
    :headers="state.uploadHeaders"
    :on-preview="onPreview"
    :on-change="onChange"
    :on-remove="onRemove"
    :before-upload="handleBeforeUpload"
    :on-success="handleUploadSuccess"
    :on-error="handleUploadError"
    :file-list="fileList"
  >
    <slot></slot>
  </el-upload>
</template>

<script lang="ts" setup>
import { ElLoading, ElMessage } from 'element-plus';
import { getToken } from '@/utils/cookies';
import { reactive, ref } from 'vue';
import type {
  UploadFile,
  ElUploadProgressEvent,
  ElFile,
} from 'element-plus/es/components/upload/src/upload.type';

const props = defineProps({
  hideUpload: Boolean,
  disabled: Boolean,
  fileList: {
    type: Array,
    required: true,
  },
  accept: {
    type: String,
    default: '.jpg, .jpeg, .png',
  },
  sizeLimit: {
    type: Number, // 单位为 MB
    default: 20, // 文件大小默认限制为 20 M
  },
  listType: {
    type: String,
    default: 'picture-card',
  },
  onBeforeUpload: Function,
  onBeforeUploadPromise: Function, // return promise
  onUploadSuccess: {
    type: Function,
    required: true,
  },
  onPreview: {
    type: Function,
    required: true,
  },
  onChange: {
    type: Function,
    required: true,
  },
  onRemove: {
    type: Function,
    required: true,
  },
  onUploadFail: {
    type: Function,
    required: true,
  },
});

const state = reactive({
  uploadHeaders: {
    Authorization: `Bearer ` + getToken(),
  },
  file: null,
});

const loading = ref<any>();

const action = import.meta.env.VITE_BASE_URL + '/upload/file';

/**
 * 校验文件类型和大小
 * @param file
 */
const handleBeforeUpload = (file: any) => {
  const isValidFileType = props.accept.includes(
    file.name.toLowerCase().split('.').pop() as string
  );
  const isValidFileSize = file.size <= props.sizeLimit * 1024 * 1024;
  if (!isValidFileType) {
    ElMessage.error('文件格式不正确');
  }
  if (!isValidFileSize) {
    ElMessage.error(`文件大小必须小于 ${props.sizeLimit}MB`);
  }

  // 保存当前的文件对象
  const isValid = isValidFileType && isValidFileSize;
  if (!isValid) {
    return false;
  }

  // 如果需要额外的校验函数使用 onBeforeUpload 函数
  // 返回 msg，则不通过校验，应该，展示给用户 msg，返回一个【非值(false, null, '',等)】则校验通过
  if (props.onBeforeUpload) {
    const result = props.onBeforeUpload(file);
    if (result) {
      ElMessage.error(result);
      return false;
    }
  }

  if (props.onBeforeUploadPromise) {
    return props
      .onBeforeUploadPromise(file)
      .then(() => {
        state.file = file;
        loading.value = ElLoading.service({
          lock: true,
          text: '上传中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
        return true;
      })
      .catch((text: string) => {
        ElMessage.error(text);
        return Promise.reject(text);
      });
  }

  state.file = file;
  loading.value = ElLoading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  return true;
};
/**
 * 上传文件接口回调
 */
const handleUploadSuccess = (res: any, file: UploadFile) => {
  if (res.code === 200) {
    const { data } = res;
    props.onUploadSuccess?.(data.filename);
  } else {
    ElMessage.error(res.message || '上传文件失败');
    props.onUploadFail?.(res.message, state.file);
  }
  loading.value.close?.();
};

/**
 * 上传文件接口报错
 */
const handleUploadError = () => {
  ElMessage.error('上传文件失败');
  props.onUploadFail?.('上传文件失败', state.file);
  loading.value.close?.();
};
</script>
