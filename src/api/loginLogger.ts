import request from '@/service';

// 登录日志列表
export const loginLoggerGet = (params: object) =>
  request({
    url: 'login-logger',
    method: 'get',
    params,
  });

// 删除登录日志
export const loginLoggerDel = (id: string) =>
  request({
    url: `login-logger/${id}`,
    method: 'delete',
  });
