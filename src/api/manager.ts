import request from '@/service';

// 登录
export const managerGet = (data: object) =>
  request({
    url: 'manager',
    method: 'get',
    data,
  });
