import Vue from "vue";
const http = Vue.axios;
console.log(Vue.axios);
let apis = {
  // node.js express本地服务启动接口
  userInfo(data) {
    return http("/users/user-info", {
      method: "GET",
      params: data
    });
  }
}
export default apis;