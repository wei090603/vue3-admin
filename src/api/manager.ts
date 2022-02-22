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

// 修改管理员状态
export const managerStatusPatch = (id: string) =>
  request({
    url: `manager/status/${id}`,
    method: 'patch',
  });

// 重置管理员密码
export const managerPwdPatch = (id: string) =>
  request({
    url: `manager/restPassword/${id}`,
    method: 'patch',
  });
