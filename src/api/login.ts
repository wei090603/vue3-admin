import request from '@/service';

// 登录
export const login = (data: object) =>
  request({
    url: '/auth/login',
    method: 'post',
    data,
  });

// 返回当前用户登录信息
export const userInfo = () =>
  request({
    url: '/api/admin/auth',
    method: 'get',
  });
