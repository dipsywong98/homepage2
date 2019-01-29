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
    </Rippify> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
</style>
