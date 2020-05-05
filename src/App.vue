<template>
  <div id="app" class="app" :style="{'color': light}">
    <Nav />
    <Background />
    <Countdown />
    <Art />
    <About />
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
import Countdown from './components/Countdown.vue';
import Wave from './components/Wave.vue';

import Nav from "./components/Nav.vue";
import Art from "./components/Art.vue";
import About from './components/About.vue';
import Contact from "./components/Contact.vue";
import Map from "./components/Map.vue";

export default {
  name: 'App',
  data() {
    return {
      light: this.$store.state.lightColor,
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
    Countdown,
    Wave,
    Art,
    About,
    Contact,
    Nav,
    Map
  },
  created() {
    this.$store.commit('decideColors');
    this.light = this.$store.state.lightColor;
    this.dark = this.$store.state.darkColor;
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);

#app {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}
</style>
