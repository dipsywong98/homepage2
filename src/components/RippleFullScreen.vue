<template>
  <div ref="frame" :class="`frame ${(!ripple)&&'disabled'}`" @click="toggle">
    <div ref="text" class="text" @click="toggle">
      <slot name="outside"></slot>
      <!-- <span>this is some display text</span> -->
      <div ref="whole" class="whole">
        <div :class="`content anim ${!isAnimating && isActive ? 'show' : ''}`">
          <slot name="inside"></slot>
          <div class="close" @click="hide">x</div>
        </div>
        <div ref="rippleContainer" class="rippleContainer anim">
          <div ref="realRipple" class="realRipple anim"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { setTimeout } from 'timers'

  export default {
    props: { ripple: { default: true }, showByDefault: { default: false } },
    data() {
      return {
        position: {},
        isActive: false,
        isAnimating: false
      }
    },
    mounted() {
      const rippleContainer = this.$refs.rippleContainer
      const whole = this.$refs.whole
      rippleContainer.style.display = 'none'
      window.addEventListener('keydown', this.onKeyDown)
      whole.style.display = 'none'
      this.isActive = this.showByDefault
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.onKeyDown)
    },
    methods: {
      onKeyDown({ key }) {
        if (key === 'Escape') this.hide()
      },
      toggle(e) {
        if (!this.ripple) return false
        const prevent = e.composedPath()
          .map(el => el.classList)
          .filter(a => !!a)
          .map(l => l.contains('prevent-ripple-full-screen'))
          .reduce((a, b) => a || b, false)
        if (prevent) {
          return false
        }
        const { clientX: x, clientY: y } = e
        if (!this.isAnimating) {
          if (!this.isActive) {
            this.show(x, y)
          }
        }
      },
      show(x, y) {
        this.isAnimating = true
        this.$emit('animate')
        const rippleContainer = this.$refs.rippleContainer
        const realRipple = this.$refs.realRipple
        const whole = this.$refs.whole
        this.position.x = x
        this.position.y = y
        whole.style.display = ''
        rippleContainer.style.left = this.position.x + 'px'
        rippleContainer.style.top = this.position.y + 'px'
        rippleContainer.style.display = ''
        document.body.style.overflowY = 'hidden'
        setTimeout(() => {
          this.$nextTick(() => {
            realRipple.classList.add('show')
            rippleContainer.classList.add('show')
            rippleContainer.style.left = '50vw'
            rippleContainer.style.top = '50vh'
          })
        }, 1)
        setTimeout(() => {
          this.$emit('active')
          this.isActive = true
          this.isAnimating = false
        }, 500)
      },
      hide() {
        this.isAnimating = true
        const rippleContainer = this.$refs.rippleContainer
        const realRipple = this.$refs.realRipple
        const whole = this.$refs.whole
        realRipple.classList.remove('show')
        rippleContainer.classList.remove('show')
        rippleContainer.style.left = this.position.x + 'px'
        rippleContainer.style.top = this.position.y + 'px'
        document.body.style.overflowY = ''
        setTimeout(() => {
          rippleContainer.style.display = 'none'
          this.isActive = false
          this.isAnimating = false
          whole.style.display = 'none'
          this.$emit('close')
        }, 500)
      },
    },
    watch: {
      ripple(newv) {
        console.log(newv)
        if (newv === false) {
          this.hide()
        }
      },
      showByDefault(newv) {
        if (newv) {
          this.show(0, 0)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .whole {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    cursor: auto;
  }

  .frame {
    height: 100%;
    position: relative;
    cursor: pointer;

    &.disabled {
      cursor: unset;
    }
  }

  .text {
    position: relative;
    height: 100%;
  }

  .rippleContainer {
    position: absolute;
    -moz-transition: top,left 0.5s cubic-bezier(0.6, 0.03, 0.09, 1.03);
    &.show {
      top: 50vh;
      left: 50vw;
    }
  }

  .realRipple {
    position: absolute;
    top: calc(-50vw - 50vh);
    left: calc(-50vw - 50vh);
    width: calc(100vw + 100vh);
    height: calc(100vw + 100vh);
    border-radius: 100%;
    background-color: var(--blue-dark);
    transform: scale(0.001);
    overflow: hidden;
    transition: transform 0.5s cubic-bezier(0.6, 0.03, 0.09, 1.03);
    -moz-transition: -moz-transform 0.5s cubic-bezier(0.6, 0.03, 0.09, 1.03);

    &.show {
      transform: scale(1);
      top: calc(-50vw - 50vh);
      left: calc(-50vw - 50vh);
    }
  }

  .content {
    color: #ffffff;
    z-index: 1;
    position: relative;
    opacity: 0;
    overflow-y: auto;
    max-height: 100vh;

    &.show {
      opacity: 1;
    }
  }

  .close {
    position: fixed;
    right: 10px;
    top: 0;
    width: 1em;
    height: 1em;
    margin: 0.5em;
    padding: 0.5em;
    border-radius: 100%;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #ffffff44;
    }
  }
</style>
