<template>
  <div ref="frame" class="frame" @click="toggle">
    <div ref="text" class="text" @click="toggle">
      <slot name="outside"></slot>
      <!-- <span>this is some display text</span> -->
      <div ref="whole" class="whole">
        <div :class="`content anim ${(!isAnimating&&isActive?'show':'')}`">
          <slot name="inside"></slot>
        </div>
        <div ref="rippleContainer" class="rippleContainer">
          <div ref="realRipple" class="realRipple"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      position: {},
      isActive: false,
      isAnimating: false
    };
  },
  mounted() {
    const rippleContainer = this.$refs.rippleContainer;
    const realRipple = this.$refs.realRipple;
    const whole = this.$refs.whole;
    rippleContainer.style.display = "none";
    whole.style.display = "none";
    this.setRippleCircle();
  },
  methods: {
    setRippleCircle() {
      const rippleContainer = this.$refs.rippleContainer;
      const realRipple = this.$refs.realRipple;
      var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName("body")[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
      const radius = Math.sqrt(x ** 2 + y ** 2);
      realRipple.style.width = radius + "px";
      realRipple.style.left = -radius / 2 + "px";
      realRipple.style.height = radius + "px";
      realRipple.style.top = -radius / 2 + "px";
      // realRipple.style.width = 2 * Math.max(x, y) + "px";
      // realRipple.style.left = -Math.max(x, y) + "px";
      // realRipple.style.height = 2 * Math.max(x, y) + "px";
      // realRipple.style.top = -Math.max(x, y) + "px";
    },
    toggle(e) {
      const { clientX: x, clientY: y } = e;
      console.log(x, y);
      const rippleContainer = this.$refs.rippleContainer;
      const realRipple = this.$refs.realRipple;
      if (!this.isAnimating) {
        this.isAnimating = true;
        if (this.isActive) {
          this.hide(x, y);
        } else {
          this.show(x, y);
        }
      }
    },
    show(x, y) {
      const rippleContainer = this.$refs.rippleContainer;
      const realRipple = this.$refs.realRipple;
      const whole = this.$refs.whole;
      this.position.x = x;
      this.position.y = y;
      whole.style.display = "";
      rippleContainer.style.left = this.position.x + "px";
      rippleContainer.style.top = this.position.y + "px";
      rippleContainer.style.display = "";
      setTimeout(() => {
        realRipple.className += " anim show";
        rippleContainer.className += " anim show";
        rippleContainer.style.left = null;
        rippleContainer.style.top = null;
      }, 1);
      setTimeout(() => {
        this.isActive = true;
        this.isAnimating = false;
        // this.setRippleSquare();
      }, 500);
    },
    hide(x, y) {
      const rippleContainer = this.$refs.rippleContainer;
      const realRipple = this.$refs.realRipple;
      const whole = this.$refs.whole;
      setTimeout(() => {
        rippleContainer.style.left = this.position.x + "px";
        rippleContainer.style.top = this.position.y + "px";
      }, 1);
      realRipple.classList.remove("show");
      rippleContainer.classList.remove("show");
      setTimeout(() => {
        rippleContainer.style.display = "none";
        realRipple.classList.remove("anim");
        rippleContainer.classList.remove("anim");
        this.isActive = false;
        this.isAnimating = false;
        whole.style.display = "none";
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.whole {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}
.frame {
  border: 2px solid #000000;
  position: relative;
}
.text {
  position: relative;
}
.rippleContainer {
  position: absolute;
  &.show {
    top: 50vh;
    left: 50vw;
  }
}
.realRipple {
  position: absolute;
  top: -100vh;
  left: -100vw;
  /* width: 200vw;
  height: 200vh; */
  border-radius: 100%;
  background-color: #41b883;
  transform: scale(0.001);
  overflow: hidden;
  &.show {
    transform: scale(1);
    top: -100vh;
    left: -100vw;
  }
}
.anim {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.content {
  color: #ffffff;
  z-index: 1;
  position: relative;
  opacity: 0;
  &.show {
    opacity: 1;
  }
}
</style>

