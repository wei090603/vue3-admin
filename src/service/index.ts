import router from '@/router';
import { getToken, removeToken } from '@/utils/cookies';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { ElMessageBox, ElMessage, ElLoading } from 'element-plus';

// 自定属性 转换为可选
interface AxiosRequestConfigCustomize extends AxiosRequestConfig {
  $config?: {
    loading: boolean;
    file: boolean;
  };
}

let loadingFn: any;

// 配置新建一个 axios 实例
const service: AxiosInstance = axios.create({
  timeout: 30000,
  baseURL: import.meta.env.VITE_BASE_URL as string, // api的base_url
  responseType: 'json',
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfigCustomize) => {
    if (getToken()) {
      config.headers!.Authorization = `Bearer ` + getToken() || '';
    }

    // 默认加载loading,配置为true时不加载
    if (!config.$config?.loading) {
      loadingFn = ElLoading.service({
        lock: true,
        text: '玩命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, .5)',
      });
    }

    // 下载文件时设置 responseType='blob';
    if (config.$config?.file) {
      config.responseType = 'blob';
    }

    return config;
  },
  (error: AxiosError) => {
    // Do something with request error
    loadingFn?.close();
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    loadingFn?.close();
    if (res.code !== 200) {
      switch (res.code) {
        case 401:
          removeToken();
          ElMessageBox.confirm(
            '你已被登出，可以取消继续留在该页面，或者重新登录',
            '确定登出',
            {
              confirmButtonText: '重新登录',
              cancelButtonText: '取消',
              type: 'warning',
            }
          ).then(() => {
            router.replace({
              // 跳转到登录页面
              path: '/login',
              // query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
          });
          break;
        case 403:
          ElMessage({
            message: '对不起，您暂无权限执行该操作',
            type: 'error',
            duration: 5 * 1000,
          });
          break;
        default:
          ElMessage({
            message: res.message,
            type: 'error',
            duration: 5 * 1000,
          });
      }
      return Promise.reject(service.interceptors.response);
    } else {
      return response.data;
    }
  },
  (error: AxiosError) => {
    loadingFn?.close();
    ElMessage({
      message: '内部服务器错误',
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
