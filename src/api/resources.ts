import request from '@/service';

// 通知公告列表
export const resourcesGet = (params: object) =>
  request({
    url: 'resources',
    method: 'get',
    params,
  });

// 新增资源
export const resourcesPost = (data: object) =>
  request({
    url: 'resources',
    method: 'post',
    data,
  });

// 修改资源
export const resourcesPatch = (id: number, data: object) =>
  request({
    url: `resources/${id}`,
    method: 'patch',
    data,
  });

// 删除资源
export const resourcesDelete = (id: number) =>
  request({
    url: `resources/${id}`,
    method: 'delete',
  });
