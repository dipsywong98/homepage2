<template>
  <header>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#home" class="nav-item title anim">Dipsyland</a>
          <div v-if="windowWidth > 600" style="display: inherit;">
            <a href="#about" class="nav-item anim">About Me</a>
            <a href="#works" class="nav-item anim">Works</a>
            <a href="#blog" class="nav-item anim">Blog</a>
            <a href="#about" class="nav-item anim">Contact</a>
          </div>
          <RippleFullScreen v-else :ripple="ripple" @close="ripple=true">
            <template slot="outside">
              <a style="display: inherit;" class="nav-item anim">menu</a>
            </template>
            <template slot="inside">
              <div class="inner-links">
                <a @click="ripple=false" href="#home" class="inner-link">Home</a>
                <a @click="ripple=false" href="#about" class="inner-link">About Me</a>
                <a @click="ripple=false" href="#works" class="inner-link">Works</a>
                <a @click="ripple=false" href="#blog" class="inner-link">Blog</a>
                <a @click="ripple=false" href="#about" class="inner-link">Contact</a>
              </div>
            </template>
          </RippleFullScreen>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import RippleFullScreen from './RippleFullScreen'

export default {
  components: { RippleFullScreen },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      this.onResize()
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  data () {
    return {
      windowWidth: 0,
      ripple: true
    }
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
<style lang="scss" scoped>
  .navbar-fixed {
    height: var(--nav-height);
    box-shadow: 0 0 8px 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    background-color: var(--blue-light);
    color: var(--blue);
    padding: 0 1em;
  }

  .nav-item {
    color: unset;
    text-decoration: none;
    padding: 1em 1em;
    font-size: 1em;

    &:hover {
      background-color: #00000010;
      text-decoration: none;
    }

    &.title {
      padding: 0.5em 1em;
      font-size: 1.5em;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .inner-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;

    & .inner-link {
      display: block;
      color: #ffffff;
      text-decoration: none;
      width: 100%;
      padding: 1rem 0;
      &:hover {
        background: var(--blue);
      }
    }
  }
</style>
