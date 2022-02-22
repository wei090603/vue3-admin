export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

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
