<template>
  <div
    :class="[
      'uploader-wrapper image-uploader',
      uploaderSize,
      { 'hide-upload': state.hideUpload, 'hide-preview': !isShowPreview },
    ]"
  >
    <BaseUploader
      :disabled="disabled"
      :hideUpload="state.hideUpload"
      :accept="accept"
      :sizeLimit="sizeLimit"
      :onBeforeUpload="onBeforeUpload"
      :onRemove="handleRemove"
      :onPreview="handlePreview"
      :onChange="handleSelect"
      :onUploadSuccess="handleUploadSuccess"
      :onUploadFail="handleUploadError"
      :fileList="state.fileList"
      ><el-icon class="avatar-uploader-icon"><plus /></el-icon
    ></BaseUploader>
    <el-dialog
      v-if="isShowPreview"
      :modal="false"
      v-model="state.imgPreviewDialogVisible"
      title="图片预览"
      custom-class="preview-dialog"
      width="600px"
    >
      <img :src="fileBaseUrl + imageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, computed, ref, Ref } from 'vue';
import BaseUploader from './base.vue';
import { Plus } from '@element-plus/icons-vue';

const props = defineProps({
  disabled: Boolean,
  imageUrl: String,
  uploaderSize: {
    type: String,
    default: 'large',
  }, // large, small or null
  accept: {
    type: String,
    default: '.jpg, .jpeg, .png',
  },
  isShowPreview: {
    // 是否需要预览文件，默认为需要, 如果文件不是文件也不会出现预览
    type: Boolean,
    default: true,
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
  onUploadSuccess: Function,
  onRemoveImage: Function,
  onUploadFail: Function,
  pixelLimit: Array, // 宽高的限制，如 [750, 300] 限制上传大小为 750px * 300px
  scaleLimit: Number, // 宽高比的限制，如1:1为1
});

const emit = defineEmits(['update:imageUrl']);
const loading = ref<any>();
const fileBaseUrl: Ref<string> = ref(
  import.meta.env.VITE_FILE_BASE_URL as string
);

interface State {
  [proppName: string]: any;
}

const state = reactive<State>({
  hideUpload: false,
  fileList: [],
  imgPreviewDialogVisible: false,
  file: null,
});

watch(
  () => props.imageUrl,
  (newVal, oldVal) => {
    console.log(newVal, 'newVal');
    if (newVal) {
      const file = {
        name: props.imageUrl,
        url: `${fileBaseUrl.value}${props.imageUrl}`,
      };
      console.log(file, 'file');
      console.log(file, 'file');
      state.fileList = [file];
      state.hideUpload = true;
      state.file = file;
    }
  }
);

/**
 * 文件上传后执行操作
 */
const handleSelect = () => {
  state.hideUpload = true;
};
/**
 * 预览文件,支持预览的文件如图片会打开预览
 * @param file
 */
const handlePreview = () => {
  state.imgPreviewDialogVisible = true;
};
/**
 * 删除文件
 */
const handleRemove = () => {
  state.fileList.shift();
  state.file = null;
  state.hideUpload = false;
  emit('update:imageUrl', '');
  props.onRemoveImage?.();
};
/**
 * 上传文件接口回调
 */
const handleUploadSuccess = (url: string) => {
  state.hideUpload = true;
  props.onUploadSuccess?.(url);
  emit('update:imageUrl', url);
  loading.value?.close();
};
/**
 * 上传文件接口报错
 */
const handleUploadError = (errMsg: string) => {
  props.onUploadFail?.(errMsg);
  setTimeout(() => {
    handleRemove();
  }, 0);
};
</script>

<style lang="scss" scoped>
.image-uploader {
  :deep(.el-upload-list) {
    outline: none;
    .el-upload-list__item {
      transition: none !important;
      border: 1px solid #e0e0e0;
    }
  }
  &.hide-preview {
    :deep(.el-upload-list__item-preview) {
      display: none !important;
    }
  }
  &.hide-upload {
    :deep(.el-upload--picture-card) {
      display: none !important;
    }
  }

  @mixin setUploadSize($size: 108px) {
    width: $size;
    :deep(.el-upload-list__item) {
      width: $size;
      height: $size;
    }
    :deep(.el-upload--picture-card) {
      line-height: $size;
      width: $size;
      height: $size;
    }
  }

  &.uploader-wrapper {
    @include setUploadSize(108px);
    &.large {
      @include setUploadSize(128px);
    }
    &.small {
      @include setUploadSize(88px);
    }
  }

  :deep(.disabled-upload) {
    .el-upload--picture-card:hover,
    .el-upload:focus {
      background-color: #fbfdff;
      border-color: #c0ccda;
      cursor: not-allowed;
    }
    .el-upload-list__item-status-label {
      display: none;
    }
    .el-upload-list.is-disabled
      .el-upload-list__item:hover
      .el-upload-list__item-status-label {
      display: none;
    }
  }

  .preview-dialog {
    :deep(.el-dialog__header) {
      padding: 0;
    }
    :deep(.el-dialog__body) {
      padding: 0;
    }
    :deep(.el-dialog__headerbtn) {
      top: 0;
      right: 0;
      .el-dialog__close {
        color: #fff;
        font-size: 24px;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
