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

// 分类列表
export const categoryGet = (params: object) =>
  request({
    url: 'category',
    method: 'get',
    params,
  });

// 添加分类
export const categoryPost = (data: object) =>
  request({
    url: 'category',
    method: 'post',
    data,
  });

// 修改分类信息
export const categoryPatch = (id: string, data: object) =>
  request({
    url: `category/${id}`,
    method: 'patch',
    data,
  });

// 删除分类
export const categoryDel = (id: string) =>
  request({
    url: `category/${id}`,
    method: 'delete',
  });

// 文章列表
export const articleGet = (params: object) =>
  request({
    url: 'article',
    method: 'get',
    params,
  });

// 删除分类
export const articleDel = (id: string) =>
  request({
    url: `article/${id}`,
    method: 'delete',
  });
