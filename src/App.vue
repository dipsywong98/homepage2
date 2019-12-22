<template lang="pug">
  div#app(ref="ctn")
    NavBar
    Dipsyland#home
    PhotoBanner(src="/img/banners/game.jpg")
    div#about
    NameCard
    PhotoBanner(src="/img/banners/oscon.jpg")
    div#works
    Works
    //- PhotoBanner(src="")
    
    RippleFullScreen
      template(slot="outside")
        p hello
      template(slot="inside")
        p bla bla bla
    //- button.float-btn
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import RippleFullScreen from "./components/RippleFullScreen.vue";
import NavBar from "./components/NavBar.vue";
import Dipsyland from "./components/Dipsyland.vue";
import PhotoBanner from "./components/PhotoBanner";
import NameCard from "./components/NameCard";
import Works from "./components/Works";

export default {
  name: "app",
  components: {
    HelloWorld,
    RippleFullScreen,
    NavBar,
    Dipsyland,
    PhotoBanner,
    NameCard,
    Works
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
};
</script>

<style lang="scss">
@font-face {
  font-family: "flappy";
  src: url("./assets/fonts/04B_19__.TTF") format("truetype");
}
:root {
  --line-width: 20px;
  --green: #96e282;
  --green-light: #b3e893;
  --blue: #00aeff;
  --blue-pale: #84c3cf;
  --blue-light: #ccefff;
  --dark: #2c3e50;
  --bright: #f8f8f8;
  --gray-light: #d1d5da;
  --gray-very-light: #e1e5ea;
  --bubble-color: var(--blue-light);
}
html,
body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  overflow-y: overlay;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark);
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
  overflow: hidden;
}
.anim {
  transition: all 0.5s cubic-bezier(0.6, 0.03, 0.09, 1.03);
}
.section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.float-btn {
  position: fixed;
  left: 50%;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
</style>
