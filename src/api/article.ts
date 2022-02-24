import request from '@/service';

// 标签列表
export const tagGet = (params: object) =>
  request({
    url: 'tag',
    method: 'get',
    params,
  });

// 添加标签
export const tagPost = (data: object) =>
  request({
    url: 'tag',
    method: 'post',
    data,
  });

// 修改标签信息
export const tagPatch = (id: string, data: object) =>
  request({
    url: `tag/${id}`,
    method: 'patch',
    data,
  });

// 删除标签
export const tagDel = (id: string) =>
  request({
    url: `tag/${id}`,
    method: 'delete',
  });
