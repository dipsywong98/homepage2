<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <RippleFullScreen>
      <template slot="outside">
        <p>hello</p>
      </template>
      <template slot="inside">
        <p>bla bla bla</p>
      </template>
    </RippleFullScreen>
    <!-- <Rippify>
      <div>x</div>
    </Rippify>-->
    <div class="perspectiveContainer">
      <div :style="`
      transform: rotateX(${rx}deg);
    `" ref="ctn">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
    <div style="width:100%;height:100vh"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import RippleFullScreen from "./components/RippleFullScreen.vue";
import Rippify from "./components/Rippify.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    RippleFullScreen,
    Rippify
  },
  data() {
    return { rx: 0 };
  },
  methods: {
    handleScroll(e) {
      console.log(window.scrollY);
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
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.perspectiveContainer {
  perspective: 300px;
  position: relative;
  padding: 3vh 4vw;
  z-index: 1;
  -webkit-perspective: 300px;
  perspective: 300px;
  -webkit-filter: drop-shadow(0 0.5vh 1vh rgba(0, 0, 0, 0.3));
  filter: drop-shadow(0 0.5vh 1vh rgba(0, 0, 0, 0.3));
  perspective-origin: top;
}
</style>
