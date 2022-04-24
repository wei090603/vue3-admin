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

// 删除角色
export const rolesDel = (id: number) =>
  request({
    url: `roles/${id}`,
    method: 'delete',
  });

// 修改角色信息
export const rolesPatch = (id: number, data: object) =>
  request({
    url: `roles/${id}`,
    method: 'patch',
    data,
  });

// 获取角色权限
export const rolesMenuList = (id: number) =>
  request({
    url: `roles/${id}`,
    method: 'get',
  });

// 修改角色权限
export const rolesResourcesPatch = (id: number, data: object) =>
  request({
    url: `roles/resources/${id}`,
    method: 'patch',
    data,
  });
