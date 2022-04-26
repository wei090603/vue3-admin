/*
 * GroupFilterType 支持的类型枚举
 */
export enum GroupFilterType {
  input = 'input', // input
  select = 'simpleSelect', // 下拉选择器
  dateRange = 'dateRange', // 时间区间选择器
  datetimeRange = 'datetimeRange',
  date = 'date',
  custom = 'custom', // 自定义选择器
}

export const GroupFilter = {
  input: 'input',
  select: 'select',
};

// dict
// const AWARD_LIST_CODE = {
//   GOODS: 2
// };
// const AWARD_LIST_TEXT = {
//   GOODS: '实物',
// };
// const AWARD_TYPE_CODE_TO_TEXT = {
//   [AWARD_LIST_CODE.GOODS]: AWARD_LIST_TEXT.GOODS,
// };

// const getRewardText = (code) => (AWARD_TYPE_CODE_TO_TEXT[code] || '');
