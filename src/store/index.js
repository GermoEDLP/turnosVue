import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    toggleSidebar(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {},
  modules: {}
});
