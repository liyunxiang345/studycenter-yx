"use strict";

import Vue from "vue";
import axios from "axios";
import qs from "qs";
import {
  Loading,
  Message
} from "element-ui";

// loading 配置文件
const options = {
  fullscreen: true,
  background: "rgba(0,0,0,0.1)"
};
// loading 实例
let loadingInstance = null;

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

// api 配置
let config = {
  baseURL: process.env.VUE_APP_API_ROOT + process.env.VUE_APP_API_VERSION,
  timeout: 10000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // if(config.method.toLowerCase() === 'post'){
    //   config.data = qs.stringify(config.data)
    // }
    if (!config.loadingHide) {
      loadingInstance = Loading.service(options);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (!response.config.loadingHide) {
      loadingInstance.close();
    }
    if (response.status === 200 && response.error === "ERROR") {
      loadingInstance.close();
      Message({
        duration: 2000,
        message: response.message
      });
      return Promise.reject(response);
    } else {
      return response;
    }
  },
  function (error) {
    loadingInstance.close();
    // if (!error.response) {
    //   window.location.href = window.location.origin + "/NoNetWorkError"
    // }
    if (error.response.status === 500 && error.response.data.error === "ERROR") {
      Message({
        type: "error",
        duration: 2000,
        message: error.response.data.message
      });
      // 登录过期
      if (error.response.data.code === 200004) {
        setTimeout(() => {
          window.location.href = window.location.origin + "/login";
        }, 2500);
      }
    }

    return Promise.reject(error.response.data);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;