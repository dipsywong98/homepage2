<template lang="pug">
  div#app
    NavBar
    img(alt="Vue logo" src="./assets/logo.png")
    RippleFullScreen
      template(slot="outside")
        p hello
      template(slot="inside")
        p bla bla bla
    div.perspectiveContainer
      div(:style="`transform: rotateX(${rx}deg);`" ref="ctn")
        HelloWorld( msg="Welcome to Your Vue.js App")
      div(style="width:100%;height:100vh")
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import RippleFullScreen from "./components/RippleFullScreen.vue";
import NavBar from "./components/NavBar.vue";

export default Vue.extend({
  name: "app",
  components: {
    HelloWorld,
    RippleFullScreen,
    NavBar
  },
  data() {
    return { rx: 0 };
  },
  methods: {
    handleScroll() {
      this.rx = Math.min(
        (window.scrollY / this.$refs.ctn.clientHeight) * 110,
        110
      );
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100vw;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.perspectiveContainer {
  perspective: 300px;
  position: relative;
  padding: 3vh 4vw;
  -webkit-perspective: 300px;
  perspective: 300px;
  -webkit-filter: drop-shadow(0 0.5vh 1vh rgba(0, 0, 0, 0.3));
  filter: drop-shadow(0 0.5vh 1vh rgba(0, 0, 0, 0.3));
  perspective-origin: top;
}
.anim {
  transition: all 0.5s cubic-bezier(0.6, 0.03, 0.09, 1.03);
}
</style>
