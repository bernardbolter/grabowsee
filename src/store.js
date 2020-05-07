import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    darkColor: "rgba(0,0,0,0.9)",
    lightColor: "rgba(255,255,255,0.9)",
    lastPage: '',
    links: [
        { name: "about", id: 1, active: false },
        { name: "open call", id: 2, active: false },
        { name: "past projects", id: 3, active: false },
        { name: "contact", id: 4, active: false }
    ]
  },
  getters: {
    makeOpaque: (state) => (dark, value) => {
        return dark ? `${state.darkColor.slice(0,-2)}${value})` : `${state.lightColor.slice(0,-2)}${value})`
    }
  },
  mutations: {
    decideNav(state, name) {
        state.links.map((link, i) => {
            if (link.name === name) {
                state.links[i].active = true;
                if (name !== "past projects") {
                    state.lastPage = name;
                }
                console.log(state.lastPage);
            } else {
                state.links[i].active = false;
            }
        });
    },
    resetNav(state) {
        state.links.map(( i ) => {
            state.links[i].active = false;
        })
    },
    decideColors(state) {
        state.lightColor = `rgba(${lightColors[Math.floor(Math.random() * lightColors.length)]}0.9)`;
        state.darkColor = `rgba(${darkColors[Math.floor(Math.random() * darkColors.length)]}0.9}`;
    }
  }
});

const darkColors = [
    "0,0,0,",
    "33,43,35,",
]

const lightColors = [
    "255,255,255,",
    "122,232,180,"
]

export default store