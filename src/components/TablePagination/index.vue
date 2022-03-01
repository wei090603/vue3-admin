<template>
  <div class="table">
    <el-table
      ref="table"
      :data="
        tableOpts.dynamic
          ? tableOpts.data
          : tableOpts.data.slice(
              (tableOpts.currentPage - 1) * tableOpts.pageSize,
              tableOpts.currentPage * tableOpts.pageSize
            )
      "
      :border="!tableOpts.hideBorder"
      :span-method="tableOpts.spanMethod"
      row-key="id"
      :aa="tableOpts.rowKey"
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="tableOpts.multipleTable"
        type="selection"
        class-name="multiple-column"
        width="45"
      >
      </el-table-column>
      <el-table-column
        v-if="tableOpts.indexes"
        type="index"
        :label="tableOpts.indexes[0]"
        class-name="serial-number"
        :width="tableOpts.indexes[1] || 60"
      >
      </el-table-column>
      <template v-for="(item, index) in tableOpts.column">
        <el-table-column
          v-if="!item.hidden"
          :key="index"
          :label="item.label"
          :prop="item.prop"
          :class-name="item.className || ''"
          :width="item.width || ''"
          :min-width="item.minWidth || ''"
          align="center"
        >
          <template #header="scope">
            <template v-if="item.useHeaderSlot">
              <slot
                :name="item.prop + 'Header'"
                :data="scope"
                :column="item"
              ></slot>
            </template>
            <template v-else>{{ item.label }}</template>
          </template>
          <template #default="scope">
            <template v-if="item.useSlot">
              <slot
                :name="item.prop"
                :data="scope.row"
                :index="scope.$index"
                :value="scope.row[item.prop]"
                :column="item"
              ></slot>
            </template>
            <template v-else-if="item.render">
              {{ item.render(scope.row[item.prop], scope.$index, scope.row) }}
            </template>
            <template
              v-else-if="
                item.showPopover &&
                scope.row[item.prop] &&
                scope.row[item.prop].length > 20
              "
            >
              <el-popover
                placement="bottom-start"
                width="200"
                trigger="hover"
                :content="scope.row[item.prop]"
              >
                <div slot="reference" class="text-hidden">
                  {{ scope.row[item.prop] }}
                </div>
              </el-popover>
            </template>
            <span v-else>
              {{
                item.date
                  ? dayjs(scope.row[item.prop]).format('YYYY-MM-DD HH:MM:ss')
                  : scope.row[item.prop]
              }}
            </span>
          </template>
        </el-table-column>
      </template>
      <el-table-column
        v-if="tableOpts.hasOperation"
        fixed="right"
        :label="tableOpts.operation.label"
        :width="tableOpts.operation.width || ''"
        :min-width="tableOpts.operation.minWidth || ''"
        :class-name="tableOpts.operation.className || ''"
      >
        <template #default="scope">
          <template v-for="item in tableOpts.operation.data">
            <el-button
              v-if="item.isShow ? item.isShow(scope.row) : true"
              :key="item.id"
              :type="item.type || 'text'"
              :size="item.size || 'default'"
              :class="
                item.classNameFun
                  ? item.classNameFun(scope.row)
                  : item.className || ''
              "
              @click.stop="
                handleOperation(item.handleFunc, scope.row, scope.$index)
              "
              >{{ item.label }}
            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="tableOpts.pagination"
      v-model:currentPage="tableOpts.currentPage"
      background
      :page-sizes="tableOpts.pageList || [10, 20, 30, 40]"
      v-show="tableOpts.total"
      :page-size="tableOpts.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableOpts.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { ref, onActivated } from 'vue';
import dayjs from 'dayjs';

const props = defineProps({
  tableOpts: {
    type: Object,
    default: () => ({
      currentPage: 1, // 当前页
      pageSize: 10, // 每页显示条数
      total: 0, // 总条数
      data: [], // 数据源
      column: [
        // 列填充
        {
          hidden: false, // 是否显示该列
          label: '', // 表头文字
          prop: '', // 属性名
          width: '', // 列宽
          minWidth: '', // 最小列表宽
          className: '', // 自定义class
          filterParams: [], // 过滤参数：目前支持两个参数，第一个过滤器名称(必传)，第二个过滤器参数(可省略)
          showPopover: false, // 文本内容过多时显示Popover(超过20个字符)
          emptyText: '', // 字段为 null 或者 undefined 时的展示内容
          useSlot: false, // 使用 slot 渲染内容, slot name 由 prop 指定
          useHeaderSlot: false, // 使用 slot 渲染表头, slot name 由 prop + 'Header' 指定
        },
      ],
      indexes: ['编号', 60], // 是否显示编号，第一个值：编号名称，第二个值：自定义列宽
      hasOperation: false, // 有无操作功能
      dynamic: true, // 是否为动态分页，即重新调用接口请求
      pagination: true, // 有无分页功能
      pageList: null, // 分页选择
      pageHandleFunc: '', // 分页操作执行回调函数
      multipleTable: false, // 表格可选择
      multipleSelection: [],
      hideBorder: false,
      spanMethod: () => [1, 1], // 合并行或列的计算方法
      operation: {
        // 操作功能
        label: '操作', // 操作列的行首文字
        width: '200', // 操作列的宽度
        minWidth: '', // 操作列最小宽度
        className: 'show', // 操作列的class名
        data: [
          // 操作列数据
          {
            label: '通过', // 按钮文字
            handleFunc: 'handleSubmit', // 点击按钮后触发的父组件事件
            size: 'mini', // 按钮大小
            className: 'show', // 按钮的类名
            type: 'primary', // 按钮类型
            icon: '',
            isShow: (item: any) => item.status === 'show', // 按条件展示
            dataTestId: '', // 按钮的 data-test-id 属性，写单测使用
          },
        ],
      },
    }),
  },
});

// const emits = props.tableOpts.operation.data.map(item => item.handleFunc)
// console.log(emits);

const emit = defineEmits([
  'handleEdit',
  'handleRestPwd',
  'handlePermission',
  'handleDel',
  'getTableData',
  'handleCreate',
]);

/**
 * 每页显示条数切换
 * @param pageSize
 */
const handleSizeChange = (pageSize: number) => {
  props.tableOpts.pageSize = pageSize;
  if (props.tableOpts.pageHandleFunc) {
    emit(props.tableOpts.pageHandleFunc);
  }
};

const table = ref<any>(null);
const doLayout = () => {
  table.value.doLayout();
};

onActivated(() => {
  // 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法
  // 解决 keeplive 导致表格 fixed column 错位的问题
  doLayout();
});

/**
 * 翻页切换
 * @param currentPage
 */
const handleCurrentChange = (currentPage: number) => {
  props.tableOpts.currentPage = currentPage;
  if (props.tableOpts.pageHandleFunc) {
    emit(props.tableOpts.pageHandleFunc);
  }
};
/**
 * 按钮操作
 * @param handleName
 * @param row
 * @param subscript
 */
const handleOperation = (handleName: any, row: any, subscript: any) => {
  emit(handleName, row, subscript);
  // if (sotre.getters.roles.includes('admin')) {
  //   emit(handleName, row, subscript);
  // } else {
  //   proxy.$message({
  //     showClose: true,
  //     message: '对不起，您暂无权限执行该操作！',
  //     type: 'warning',
  //   })
  // }
};
/**
 * 复选操作
 * @param val
 */
const handleSelectionChange = (val: any) => {
  props.tableOpts.multipleSelection = val;
};
</script>

<style lang="scss" scoped>
.operaters {
  .el-button {
    margin-right: 8px;
  }
  .el-button + .el-button {
    margin-left: 0px;
  }
}
</style>
