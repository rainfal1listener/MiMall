import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex);

const state = {
  username:'',//用户名
  cartCount:1,//购物车商品数量
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})