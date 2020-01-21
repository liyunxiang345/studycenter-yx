import Vue from "vue";
import axios from "axios";
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
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
let config = {
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 10000, // Timeout
  headers: {},
  withCredentials: true // Check cross-site Access-Control
};
console.log(process.env);
const _axios = axios.create(config);
console.log(_axios);

_axios.interceptors.request.use(
  function (config) {
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
    loadingInstance.close();
    if ((response.status === 200 || response.status === 210) && response.data.error === "ERROR") {
      Message({
        showClose: true,
        type: "error",
        duration: 2000,
        message: response.data.message
      });
      return Promise.reject(response);
    } else {
      return response;
    }
  },
  function (error) {
    loadingInstance.close();
    if (
      error.response.status === 500 &&
      error.response.data.error === "ERROR"
    ) {
      Message({
        showClose: true,
        type: "error",
        duration: 2000,
        message: error.response.data.message
      });
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
console.log(Vue.axios);

export default Plugin;