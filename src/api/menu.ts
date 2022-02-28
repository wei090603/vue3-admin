import request from '@/service';

// 导航列表
export const menuGet = (params: object) =>
  request({
    url: 'menu',
    method: 'get',
    params,
  });

// 添加导航
export const menuPost = (data: object) =>
  request({
    url: 'menu',
    method: 'post',
    data,
  });

// 修改导航信息
export const menuPatch = (id: string, data: object) =>
  request({
    url: `menu/${id}`,
    method: 'patch',
    data,
  });

// 删除导航
export const menuDel = (id: string) =>
  request({
    url: `menu/${id}`,
    method: 'delete',
  });
