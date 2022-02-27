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
      :onBeforeUploadPromise="getBeforeUploadPromise"
      :fileList="state.fileList"
      ><i class="el-icon-plus"></i
    ></BaseUploader>
    <el-dialog
      v-if="isShowPreview"
      :modal="false"
      v-model="state.imgPreviewDialogVisible"
      title=""
      custom-class="preview-dialog"
      width="600px"
    >
      <img :src="imageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ElLoading, ElMessage } from 'element-plus';
import { reactive, watch, computed } from 'vue';
import BaseUploader from './base.vue';

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

const state = reactive({
  hideUpload: false,
  fileList: [],
  imgPreviewDialogVisible: false,
  file: null,
  loading: null,
});

const getBeforeUploadPromise = computed(() => {
  const { pixelLimit, scaleLimit } = props;
  if ((pixelLimit && pixelLimit.length === 2) || scaleLimit) {
    return (file: any) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function readerCB(theFile) {
          const image = new Image();
          image.src = theFile.target!.result as string;
          image.onload = function onloadCB() {
            const { width, height } = this;
            if (pixelLimit && pixelLimit.length === 2) {
              if (width !== pixelLimit[0] || height !== pixelLimit[1]) {
                reject(
                  new Error(
                    `图片尺寸必须为 ${pixelLimit[0]}px * ${pixelLimit[1]}px，请重新上传！`
                  )
                );
              } else {
                resolve();
              }
            } else if (width / height !== scaleLimit) {
              reject(
                new Error(`图片尺寸宽高比必须为 ${scaleLimit}，请重新上传！`)
              );
            } else {
              resolve();
            }
            resolve();
          };
        };
      });
  }
  return null;
});

watch(
  () => props.imageUrl,
  (newVal, oldVal) => {
    console.log(newVal, 'newVal');
    if (newVal) {
      const file = { name: props.imageUrl, url: props.imageUrl };
      state.fileList = [file];
      state.hideUpload = true;
      state.file = file;
    }
  }
);

/**
 * 校验文件类型和大小
 * @param file
 */
const handleBeforeUpload = (file: any) => {
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
        props.file = file;
        state.hideUpload = true;
        state.loading = ElLoading.service({
          customClass: 'global-loading',
          lock: true,
          text: '上传中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
        return true;
      })
      .catch((text) => {
        ElMessage.error(text);
        return Promise.reject();
      });
  }

  state.file = file;
  state.hideUpload = true;
  state.loading = ElLoading.service({
    customClass: 'global-loading',
    lock: true,
    text: '上传中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  return true;
};
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
const handleUploadSuccess = (url) => {
  state.hideUpload = true;
  props.onUploadSuccess?.(url);
  emit('update:imageUrl', url);
  state.loading?.close();
};
/**
 * 上传文件接口报错
 */
const handleUploadError = (errMsg) => {
  props.onUploadFail?.(errMsg);
  setTimeout(() => {
    props.handleRemove();
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
