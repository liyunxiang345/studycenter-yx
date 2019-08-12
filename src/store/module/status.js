const state = {
  status: false
}

const getter = {
  getStatus: state => state.status
}

const mutations = {
  changeStatus: (state) => {
    state.status = !state.status;
  }
}
const actions = {
  changeStatusAct(ctx) {
    ctx.commit("changeStatus");
  }
}
export default {
  namespaced: true,
  state,
  getter,
  mutations,
  actions
}