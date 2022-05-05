<template>
  <el-sub-menu
    v-if="item.children?.length"
    :index="resolvePath(item.path)"
    popper-append-to-body
  >
    <template #title>
      <item
        v-if="item.meta && !item.meta.hidden"
        :icon="item.meta.icon"
        :title="item.meta.title"
      />
    </template>
    <template v-for="child in item.children">
      <menu-item
        v-if="child.children?.length"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
      <app-link v-else :to="resolvePath(child.path)">
        <el-menu-item :index="resolvePath(child.path)">
          <item
            v-if="child.meta"
            :icon="child.meta.icon"
            :title="child.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>
  </el-sub-menu>

  <template v-else>
    <app-link
      v-if="item.meta"
      :to="resolvePath(item.path)"
      :type="resolvePath(item.path)"
    >
      <el-menu-item :index="resolvePath(item.path)">
        <item :icon="item.meta.icon" :title="item.meta.title" />
      </el-menu-item>
    </app-link>
  </template>
</template>

<script lang="ts" setup>
import path from 'path-browserify';
import Item from './Item.vue';
import appLink from './Link.vue';
import { isExternal } from '@/utils';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: '',
  },
});

const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>
