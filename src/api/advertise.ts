import request from '@/service';

// 广告列表
export const advertiseGet = (params: object) =>
  request({
    url: 'advertise',
    method: 'get',
    params,
  });

// 添加广告
export const advertisePost = (data: object) =>
  request({
    url: 'advertise',
    method: 'post',
    data,
  });

// 修改广告信息
export const advertisePatch = (id: string, data: object) =>
  request({
    url: `advertise/${id}`,
    method: 'patch',
    data,
  });

// 删除广告
export const advertiseDel = (id: string) =>
  request({
    url: `advertise/${id}`,
    method: 'delete',
  });
