<!--
 * @Description: 图片展示
 * @Author: tao.wei
 * @Date: 2021-09-10 20:37:57
-->

<template>
  <div class="preview-wrapper mt10 mb10">
    <span class="preview-trigger">
      <span @click="visible = true" v-if="isUseSlot">
        <slot></slot>
      </span>
      <div
        class="image-wrapper"
        v-else-if="url"
        :style="{
          width: size ? `${size}px` : 'auto',
          height: size ? `${size}px` : 'auto',
        }"
      >
        <img :key="url" :src="url" alt="" />
        <div class="operate-mask">
          <el-icon class="el-icon el-icon-zoom-in" @click="visible = true"><circle-plus /></el-icon>
        </div>
      </div>
      <span v-else class="empty-text">-</span>
    </span>
    <el-dialog v-if="url" title="图片查看" width="600px" v-model="visible" append-to-body custom-class="preview-dialog" :before-close="() => (visible = false)">
      <img :src="url" alt="" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CirclePlus } from '@element-plus/icons-vue';

const props = defineProps({
  url: String,
  size: Number,
  isUseSlot: Boolean,
});

const visible = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  margin: 0 auto;
  &:hover .operate-mask {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .operate-mask {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.5);
  }
  .el-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
    cursor: pointer;
    color: #fff;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
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
</style>
