export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 时间格式化
 * @param date
 * @param format 'yyyy-MM-dd hh:mm:ss';
 * @returns {string|*}
 */

export const formatTimeUtil = (date: any, format = 'yyyy-MM-dd'): string => {
  return '';
};

export function deepClone(obj: any) {
  if (!obj) return obj;
  if (typeof obj !== 'object') return obj;
  // 获取到原本类型 Object Array
  const copy = new obj.constructor();
  for (const key in obj) {
    // 只拷贝实例属性
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}
