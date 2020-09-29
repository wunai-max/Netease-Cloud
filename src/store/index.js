import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "陈钱",
    id:"",
    imgurl:"../../assets/logo.png"
  },
  mutations: {
    choose(state, obj) {
      state.name = obj.name
      state.id=obj.id
      state.imgurl=obj.imgurl
    },
  },
  actions: {},
  modules: {}
})