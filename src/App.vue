<template lang="pug">
  div#app(ref="ctn")
    Poptip
    #head
      NavBar
    #content
      #dipsyland
        Dipsyland#home
      PhotoBanner(src="/img/banners/game.jpg")
      #about
      NameCard
      PhotoBanner(src="/img/banners/oscon.jpg")
      #works
      Works(
        category="works"
        :default-filters="['featured']")
      PhotoBanner(src="/img/banners/success.JPG")
      #blog
      Works(category="blog")
      Footer
</template>

<script>
import RippleFullScreen from './components/RippleFullScreen.vue'
import NavBar from './components/NavBar.vue'
import Dipsyland from './components/Dipsyland.vue'
import PhotoBanner from './components/PhotoBanner'
import NameCard from './components/NameCard'
import Works from './components/Works'
import Footer from './components/Footer'
import Sorter from './components/Sorter'
import Poptip from './components/Poptip'

export default {
  name: 'app',
  components: {
    Poptip,
    RippleFullScreen,
    NavBar,
    Dipsyland,
    PhotoBanner,
    NameCard,
    Works,
    Sorter,
    Footer
  },
  data () {
    return { rx: 0 }
  },
  methods: {
    handleScroll () {
      this.rx = Math.min(
        (window.scrollY / this.$refs.ctn.clientHeight) * 110,
        110
      )
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "flappy";
    src: url("./assets/fonts/04B_19__.TTF") format("truetype");
  }

  :root {
    --line-width: 20px;
    --nav-height: 52px;
    --section-height: calc(100vh - var(--nav-height));
    --green: #96e282;
    --green-dark: #8ACF81;
    --green-light: #b3e893;
    --blue: #00aeff;
    --blue-pale: #84c3cf;
    --blue-light: #ccefff;
    --blue-dark: #021a34;
    --dark: #2c3e50;
    --dark-1: #383e43;
    --dark-2: #484f56;
    --dark-background: #282c30;
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
    // overflow-y: overlay;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--dark);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    overflow-x: hidden;
    // grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    // grid-template-areas: "head" "content";
  }

  #head {
    // grid-area: head;
    height: 52px;
    grid-row: 1;
  }

  #content {
    // grid-area: content;
    position: relative;
    scroll-behavior: smooth;
    grid-row: 2;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .perspectiveContainer {
    perspective: 300px;
    position: relative;
    padding: 3vh 4vw;
    -webkit-perspective: 300px;
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

  .shadow-hover {
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);;
    }
  }
</style>
