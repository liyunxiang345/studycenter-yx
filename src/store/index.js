import Vue from "vue";
import Vuex from "vuex";
import User from "./module/author";
console.log(User);
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    User
  }
});
export default store