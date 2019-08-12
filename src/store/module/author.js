const state = {
  userinfo: "LeeYunxiang"
}

const getter = {
  getUserInfo: state => state.userinfo
}

const mutations = {
  changeUserInfo: (state, name) => {
    state.userinfo = name;
  }
}
const actions = {
  changeUser(ctx, name) {
    ctx.commit("changeUserInfo", name);
  }
}
export default {
  namespaced: true,
  state,
  getter,
  mutations,
  actions
}