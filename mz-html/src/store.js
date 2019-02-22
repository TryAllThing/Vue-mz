import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 3. 实例化 store 对象
const store = new Vuex.Store({
  state: {
    shop: localStorage.getItem('shop') ? JSON.parse(localStorage.getItem('shop')) : [],
    cityName: localStorage.getItem('city') ? localStorage.getItem('city') : ''
  },
  getters: {},
  mutations: {
    buyBegin (state, payload) {
      state.shop.push(payload)
    },
    changCity (state, payload) {
      state.cityName = payload
    }
  },
  // 做异步操作的时候，要用到。
  actions: {},
  // 对 store 做拆分，拆分成一个一个的小 store
  modules: {}
})

// 4. 暴露出 store 实例对象
export default store
