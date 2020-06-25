<template>
  <div id="app" class="app" :style="globalTextColor">
    <Nav />
    <Background />
    <Countdown />
    <Home />
    <Archive />
    <Opencall />
    <About />
    <Instagram />
    <Wave 
      v-for="wave in waves" 
      v-bind:bottom="wave.bottom"
      v-bind:title="wave.title"
      v-bind:curve="wave.curve"
      v-bind:speed="wave.speed"
      :key="wave.id" 
    />
    <Contact />
    <Map />
  </div>
</template>

<script>
import Background from './components/Background.vue';
import Home from './components/Home.vue';
import Countdown from './components/Countdown.vue';
import Wave from './components/Wave.vue';

import Nav from "./components/Nav.vue";
import About from './components/About.vue';
import Instagram from "./components/Instagram.vue"
import Opencall from './components/Opencall.vue';
import Archive from "./components/Archive.vue";
import Contact from "./components/Contact.vue";
import Map from "./components/Map.vue";

export default {
  name: 'App',
  data() {
    return {
      dark: this.$store.state.darkColor,
      waves: [
        {
          id: 1,
          bottom: 20,
          curve: 70,
          speed: 60
        },
        {
          id: 2,
          bottom: 50,
          curve: 50,
          speed: 200
        },
        {
          id: 3,
          bottom: 0,
          curve: 100,
          speed: 30
        }
      ]
    }
  },
  components: {
    Background,
    Home,
    Countdown,
    Wave,
    Archive,
    Opencall,
    About,
    Instagram,
    Contact,
    Nav,
    Map
  },
  created() {
    this.$store.state.lightColor = this.createColor(245,255);
    this.$store.state.darkColor = this.createColor(20,40);
  },
  computed: {
    globalTextColor() {
      return {
        color: this.$store.state.darkColor
      }
    }
  },
  methods: {
    createColor(min, max) {
      let color = '';
      for ( let i = 0; i < 3; i++ ) {
        color += Math.floor(Math.random() * (max - min + 1) + min) + ',';
      }
      return `rgba(${color}0.9)`;
    }
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800&display=swap);
@import url(https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,400&display=swap);
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  top: 0;
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// z-index table
// 0 - background picture
// 100 - home content + countdown
// 200 - about
// 300 - contact
// 450 - opencall
// 400 - waves
// 500 - navigation
// 600 - past projects
// 700 - close

</style>
