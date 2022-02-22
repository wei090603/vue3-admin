import request from '@/service';

// 管理员列表
export const managerGet = (params: object) =>
  request({
    url: 'manager',
    method: 'get',
    params,
  });

// 添加管理员
export const managerPost = (data: object) =>
  request({
    url: 'manager',
    method: 'post',
    data,
  });

// 修改管理员信息
export const managerPatch = (id: string, data: object) =>
  request({
    url: `manager/${id}`,
    method: 'patch',
    data,
  });
