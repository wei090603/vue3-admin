import request from '@/service';

// 分页 角色列表
export const rolesGet = (data: object) =>
  request({
    url: 'roles',
    method: 'get',
    data,
  });
// 无分页角色列表
export const rolesGetList = () =>
  request({
    url: 'roles/list',
    method: 'get',
  });

// 新增角色
export const rolesPost = (data: object) =>
  request({
    url: 'roles',
    method: 'post',
    data,
  });
