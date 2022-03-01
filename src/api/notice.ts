import request from '@/service';

// 通知公告列表
export const noticeGet = (params: object) =>
  request({
    url: 'notice',
    method: 'get',
    params,
  });

// 添加通知公告
export const noticePost = (data: object) =>
  request({
    url: 'notice',
    method: 'post',
    data,
  });

// 修改通知公告信息
export const noticePatch = (id: string, data: object) =>
  request({
    url: `notice/${id}`,
    method: 'patch',
    data,
  });

// 删除通知公告
export const noticeDel = (id: string) =>
  request({
    url: `notice/${id}`,
    method: 'delete',
  });
