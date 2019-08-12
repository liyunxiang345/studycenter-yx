import Vue from "vue";
import Vuex from "vuex";
import User from "./module/author";
import Status from "./module/status";
console.log(User);
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    User,
    Status
  }
});
export default store