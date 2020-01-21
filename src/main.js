// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "./plugins/Axios";
import App from './App'
import router from './router'
import Filter from "@/filters/index";
import Directives from "@/directives/index";
import store from "./store";
import './plugins/element'
import "./style/main.less";
Vue.config.productionTip = false
Vue.use(Filter);
Vue.use(Directives);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
console.log(Vue.prototype)