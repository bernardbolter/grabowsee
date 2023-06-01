import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    darkColor: "rgba(0,0,0,0.9)",
    lightColor: "rgba(255,255,255,0.9)",
    lastPage: 0,
    activeLink: 0,
    links: [
      { name: "about", id: 1, active: false },
      { name: "open call", id: 2, active: false },
      { name: "archive", id: 3, active: false },
      { name: "contact", id: 4, active: false },
    ],
  },
  getters: {
    makeOpaque: state => (dark, value) => {
      return dark
        ? `${state.darkColor.slice(0, -2)}${value})`
        : `${state.lightColor.slice(0, -2)}${value})`;
    },
  },
  mutations: {
    decideNav(state, id) {
      state.activeLink = id;
      if (id !== 3) {
        state.lastPage = id;
      }
    },
  },
});

export default store;
