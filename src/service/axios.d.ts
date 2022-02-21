/*
 * @Description: axios 申明
 * @Author: tao.wei
 * @Date: 2021-03-08 15:33:15
 */
import axios from 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}
