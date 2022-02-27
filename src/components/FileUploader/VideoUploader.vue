<template>
  <div :class="['uploader-wrapper video-uploader', uploaderSize, { 'hide-upload': hideUpload, 'hide-preview': !isShowPreview }]">
    <span v-if="fileTip">{{fileTip}}</span>
    <BaseUploader
      :disabled="disabled"
      :hideUpload="hideUpload"
      :accept="accept"
      :sizeLimit="sizeLimit"
      :onBeforeUpload="onBeforeUpload"
      :onRemove="handleRemove"
      :onPreview="handlePreview"
      :onChange="handleSelect"
      :onUploadSuccess="handleUploadSuccess"
      :onUploadFail="handleUploadError"
      :fileList="fileList"
      ><i class="el-icon-plus"></i></BaseUploader>
    <el-dialog
      v-if="isShowPreview"
      :visible.sync="videoPreviewDialogVisible"
      title=""
      class="preview-dialog"
      width="640px">
      <video width="640" height="400" controls ref="videoRef" v-if="videoPreviewDialogVisible">
        <source :src="videoPreviewDialogUrl" type="video/mp4">
      </video>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable no-unused-expressions */
import { Loading } from 'element-ui';
import BaseUploader from './base';

export default {
  components: { BaseUploader },
  props: {
    disabled: Boolean,
    videoUrl: String,
    uploaderSize: String, // large, small or null
    accept: {
      type: String,
      default: '.mp4',
    },
    isShowPreview: { // 是否需要预览文件，默认为需要, 如果文件不是文件也不会出现预览
      type: Boolean,
      default: true,
    },
    sizeLimit: {
      type: Number, // 单位为 MB
      default: 30, // 文件大小默认限制为 30 M
    },
    listType: {
      type: String,
      default: 'picture-card',
    },
    fileTip: {
      type: String,
      default: '',
    },
    onBeforeUpload: Function,
    onUploadSuccess: Function,
    onRemoveImage: Function,
    onUploadFail: Function,
  },
  data() {
    return {
      hideUpload: false,
      fileList: [],
      videoPreviewDialogVisible: false,
      videoPreviewDialogUrl: null,
      file: null,
      loading: null,

    };
  },
  watch: {
    videoUrl: {
      handler() {
        if (this.videoUrl) {
          const file = { name: this.videoUrl, url: this.videoUrl };
          this.fileList = [file];
          this.hideUpload = true;
          this.file = file;
        }
      },
      immediate: true,
    },
    videoPreviewDialogVisible() {
      if (!this.videoPreviewDialogVisible) {
        this.$refs.videoRef.pause();
      }
    },
  },

  methods: {
    /**
		 * 校验文件类型和大小
		 * @param file
     */
    handleBeforeUpload(file) {
      // 如果需要额外的校验函数使用 onBeforeUpload 函数
      // 返回 msg，则不通过校验，应该，展示给用户 msg，返回一个【非值(false, null, '',等)】则校验通过
      if (this.onBeforeUpload) {
        const result = this.onBeforeUpload(file);
        if (result) {
          this.$utils.errorMsg(result);
          return false;
        }
      }

      if (this.onBeforeUploadPromise) {
        return this.onBeforeUploadPromise(file).then(() => {
          this.file = file;
          this.hideUpload = true;
          this.loading = Loading.service({
            customClass: 'global-loading',
            lock: true,
            text: '上传中...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)',
          });
          return true;
        }).catch((text) => {
          this.$utils.errorMsg(text);
          return Promise.reject();
        });
      }

      this.file = file;
      this.hideUpload = true;
      this.loading = Loading.service({
        customClass: 'global-loading',
        lock: true,
        text: '上传中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
      return true;
    },
    /**
     * 文件上传后执行操作
     */
    handleSelect() {
      this.hideUpload = true;
    },
    /**
     * 预览文件,支持预览的文件如图片会打开预览
     * @param file
     */
    handlePreview() {
      this.videoPreviewDialogUrl = this.videoUrl;
      this.videoPreviewDialogVisible = true;
      this.$nextTick(() => {
        this.$refs.videoRef.currentTime = 0;
        this.$refs.videoRef.play();
      });
    },
    /**
     * 删除文件
     */
    handleRemove() {
      this.fileList.shift();
      this.file = null;
      this.hideUpload = false;

      this.$emit('update:videoUrl', '');
      this.onRemoveImage?.();
    },
    /**
     * 上传文件接口回调
     */
    handleUploadSuccess(url) {
      this.hideUpload = true;
      this.videoPreviewDialogUrl = url;
      this.onUploadSuccess?.(url);

      this.$emit('update:videoUrl', url);
      this.loading?.close();
    },
    /**
     * 上传文件接口报错
     */
    handleUploadError(errMsg) {
      this.onUploadFail?.(errMsg);
      setTimeout(() => {
        this.handleRemove();
      }, 0);
    },
  },
};
</script>
<style lang="less" scoped>
.video-uploader {
  /deep/ .el-upload-list {
    outline: none;
    .el-upload-list__item {
      transition: none !important;
      border: 1px solid #e0e0e0;
      &.is-success {
        background-image: url('~@/assets/img/video_bg.png');
        background-size: cover;
        background-position: 50% 50%;
      }
    }
  }
  &.hide-preview {
    /deep/ .el-upload-list__item-preview {
      display: none !important;
    }
  }
  &.hide-upload {
    /deep/ .el-upload--picture-card {
      display: none !important;
    }
  }

  .setUploadSize(@size: 108px) {
    width: @size;
    /deep/ .el-upload-list__item {
      width: @size;
      height: @size;
    }
    /deep/ .el-upload--picture-card {
      line-height: @size;
      width: @size;
      height: @size;
    }
  }

  &.uploader-wrapper {
    .setUploadSize(108px);
    &.large {
      .setUploadSize(128px);
    }
    &.small {
      .setUploadSize(88px);
    }
  }

  /deep/ .disabled-upload {
    .el-upload--picture-card:hover, .el-upload:focus {
      background-color: #fbfdff;
      border-color: #c0ccda;
      cursor: not-allowed;
    }
    .el-upload-list__item-status-label {
      display: none;
    }
    .el-upload-list.is-disabled .el-upload-list__item:hover .el-upload-list__item-status-label {
      display: none;
    }
  }

  .preview-dialog {
    /deep/ .el-dialog__header {
      padding: 0;
      position: relative;
      z-index: 99;
    }
    /deep/ .el-dialog__body {
      padding: 0;
    }
    /deep/ .el-dialog__headerbtn {
      top: 0;
      right: 0;
      .el-dialog__close {
        color: #fff;
        font-size: 24px;
        background: rgba(0,0,0,.5);
        opacity: .7;
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
