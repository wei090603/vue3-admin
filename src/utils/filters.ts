import dayjs from 'dayjs';

const filterFunc: any = {
  /**
   * 时间格式化
   * @param date
   * @param format
   * @returns {string|*}
   */
  formatTime(date: string, format = 'YYYY-MM-DD HH:MM:ss'): string {
    return date ? dayjs(date).format(format) : '';
  },
};

export default {
  /**
   * 注册公共方法，方便表格组件使用过滤器
   * @param value
   * @param filterName
   * @param format
   * @returns {*}
   */
  filterFun(value: string, filterParams: any[]): any {
    return filterFunc[filterParams[0]](value, filterParams[1]);
  },
};
