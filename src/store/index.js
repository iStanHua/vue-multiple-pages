import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    userInfo: null
  },
  getters: {
  },
  mutations: {
    /**
     * 设置用户信息
     */
    SET_USER_INFO(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    /**
      * 用户信息
      */
    userInfo({ commit }) {
      commit('SET_USERINFO', {})
    }
  }

})
