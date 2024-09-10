// src/api/request.js
import axios from "axios";

const service = axios.create({
  baseURL: "/api", // 使用代理
  timeout: 5000 * 60, // 请求超时时间
});

// 请求拦截器删除为unll、undefined的传参
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("TOKEN"); // 或 sessionStorage.getItem('token');

    if (token) {
      // 如果存在 token，则添加到请求头
      config.headers["Authorization"] = token;
      // config.headers['Authorization'] = 'Bearer ' + token;
    }
    Object.keys(config.params).forEach((key) => {
      if (config.params[key] === null || config.params[key] === undefined || config.params[key] === '') {
        delete config.params[key];
      }
    });
    console.log(config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response;
    // 这里可以根据后端的响应结构来做一些统一处理
    if (res.status !== 200) {
      // 处理错误
      return res.message;
    } else {
      return res;
    }
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default service;
