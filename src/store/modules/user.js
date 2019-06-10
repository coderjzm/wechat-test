const state = {
  isIOS: null,
  userInfo: {}
}

const getters = {}

const mutations = {
  setIOS (state, bol) {
    state.isIOS = bol
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  judgeIOS ({commit}) {
    let u = navigator.userAgent
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    commit('setIOS', isIOS)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
