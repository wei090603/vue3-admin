<!--
 * @Description: 搜索筛选
 * filters 配置详情说明，常规配置：
 *  {
 *    type: GroupFilterType.input, // 支持的 类型为 GroupFilterType 的定义
 *    key: 'orderNo', // 字段对应的 key名字
 *    label: '商品名称：',
 *    initialValue: null, // 初始设置的值，可选
 *    validator: [ // 表单校验，可选，如下设置了 input 的输入长度限制
 *      { max: 22, message: '请输入 22 个以内字符', trigger: ['blur', 'change'] },
 *    ],
 *  },
 *
 * type 为 GroupFilterType.simpleSelect 会有一些额外的配置
 *  {
 *    type: GroupFilterType.simpleSelect, // 支持的 类型为 GroupFilterType 的定义
 *    isShowAll: false, // select 是否展示“全部”
 *    selectConfig: { // 其它需要传入的 select 配置，比如下面的配置选择器多选
 *      multiple: true,
 *    },
 *    options: [ // select的下拉 options， 和 getOptions 二选一
 *      {
 *        label: PROMOTION_STATUS_TEXT.TO_AUDIT,
 *        value: PROMOTION_STATUS_CODE.TO_AUDIT,
 *      },
 *    ],
 *    // 返回 select 的下拉 options，和 getOptions 二选一，会接受当前所有输入的筛选项，
 *    // 主要用于联动多个 select 的场景
 *    getOptions: (form) => Options,
 *  },
 -->
<template>
  <div class="search-wrapper">
    <el-form
      ref="searchForm"
      :rules="formRules"
      :inline="true"
      :model="form"
      class="search-form clearfix"
      :label-width="`${labelWidth}px`"
    >
      <el-form-item
        v-for="item in filters"
        :key="item.key"
        :label="item.label"
        :class="item.className"
        :prop="item.key"
      >
        <el-input
          v-if="item.type === GroupFilterType.input"
          v-model="form[item.key]"
          placeholder="请输入搜索内容"
          clearable
          v-bind="item.inputConfig"
        ></el-input>
        <el-select
          v-if="item.type === GroupFilterType.select"
          v-model="form[item.key]"
          placeholder="请选择"
          clearable
          v-bind="item.selectConfig"
        >
          <el-option v-if="item.isShowAll" label="全部" value=""> </el-option>
          <template v-if="item.getOptions">
            <el-option
              v-for="option in item.getOptions(form)"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            >
            </el-option>
          </template>
          <template v-else>
            <el-option
              v-for="option in item.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            >
            </el-option>
          </template>
        </el-select>
        <el-date-picker
          v-if="item.type === GroupFilterType.date"
          v-model="form[item.key]"
          type="date"
          size="default"
          :value-format="item.filterParams ?? 'YYYY-MM-DD'"
          placeholder="选择日期"
          v-bind="item.dateConfig"
          :default-value="defaultDate"
        >
        </el-date-picker>
        <el-date-picker
          v-if="item.type === GroupFilterType.dateRange"
          v-model="form[item.key]"
          type="daterange"
          size="default"
          :value-format="item.filterParams ? item.filterParams : 'YYYY-MM-DD'"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          v-bind="item.dateConfig"
        >
        </el-date-picker>
        <el-date-picker
          v-if="item.type === GroupFilterType.datetimeRange"
          v-model="form[item.key]"
          type="datetimerange"
          size="default"
          :value-format="item.filterParams ? item.filterParams : 'YYYY-MM-DD'"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          v-bind="item.dateConfig"
        >
        </el-date-picker>
        <template v-if="item.type === GroupFilterType.custom">
          <slot
            :name="item.key"
            :slotValue="form[item.key]"
            :item="item"
            :change="handleChangeFilterValue(item.key)"
          ></slot>
        </template>
      </el-form-item>
      <div class="search-btn-list">
        <slot name="operate-before"></slot>
        <el-button
          type="primary"
          class="btn-primary"
          @click.native="handleClickSearch"
          >{{ searchBtnText }}</el-button
        >
        <el-button
          v-if="isShowClearBtn"
          type="primary"
          class="btn-search"
          @click="handleClickClear"
          >{{ clearBtnText }}</el-button
        >
        <slot name="operate-after"></slot>
      </div>
    </el-form>
    <!-- <el-divider class="search-divider"></el-divider> -->
  </div>
</template>

<script lang="ts" setup>
import { GroupFilterType } from '@/constants';
import { ElForm } from 'element-plus';
import { reactive, ref } from 'vue';

interface FormItem {
  [propName: string]: string;
}

interface FiltersItem {
  initialValue: string;
  key: string;
  label: string;
  type: string;
  validator?: any[];
  [propName: string]: any;
}

const props = defineProps({
  labelWidth: {
    type: Number,
    default: 100,
  },
  isShowClearBtn: {
    type: Boolean,
    default: true,
  },
  clearBtnText: {
    type: String,
    default: '清除条件',
  },
  searchBtnText: {
    type: String,
    default: '搜索',
  },
  onClickSearch: {
    type: Function,
    required: true,
  },
  onClickClear: {
    type: Function,
    required: true,
  },
  filters: {
    type: Array as () => Array<FiltersItem>,
    required: true,
  },
});

const form: FormItem = reactive({});
const formRules: any = reactive({});
const defaultDate = ref(new Date());
props.filters.forEach((item: any) => {
  const key = item.key;
  form[key] = item.initialValue;
  if (item.validator) {
    formRules[key] = item.validator;
  }
});

const searchForm = ref<typeof ElForm>();
const handleClickSearch = async () => {
  const valid = await searchForm.value!.validate();
  if (valid) {
    props.onClickSearch(form);
  }
};

const handleChangeFilterValue = (key: string) => {
  return (value: string) => {
    form[key] = value;
  };
};

const handleClickClear = () => {
  searchForm.value!.clearValidate();
  props.filters.forEach((item: FiltersItem) => {
    const key = item.key;
    form[key] = item.initialValue;
  });
  defaultDate.value = new Date();
  props.onClickClear(form);
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  border-bottom: 1px solid #f1f1f1;
}
// 查询表单
.search-form {
  .el-form-item__content {
    width: 210px;
  }
  .date-range {
    .el-form-item__content {
      width: auto;
      .el-date-editor--daterange.el-input__inner {
        width: 210px;
        padding-right: 0;
      }
    }
    .el-range-separator {
      color: red !important;
      line-height: 20px !important;
      padding: 0;
    }
    .el-range__close-icon {
      width: 20px;
    }
  }
  .el-form-item {
    margin: 0 20px 22px 0 !important;
  }
  .search-btn-list {
    float: right;
    margin: 0 0 25px !important;
    .el-button--small {
      width: 94px;
      margin: 0 0 0 18px;
    }
  }
}

.btn-search {
  min-width: 80px;

  &,
  &:focus {
    border-color: #f90;
    background: #f90;
  }

  &:hover {
    background: #f60;
    border-color: #f60;
  }

  &:active {
    background: #fc3;
    border-color: #fc3;
  }
}
</style>
