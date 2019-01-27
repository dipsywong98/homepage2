<template>
  <div ref="frame" class="frame">
    <div ref="text" class="text wave-effect waves-block" @click="toggle">this is some display text
      <div ref="whole" class="whole">
        <div ref="rippleContainer" class="rippleContainer">
          <div ref="realRipple" class="realRipple"></div>
        </div>
      </div>
    </div>
    <div ref="content" class="content">this is some content text</div>
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
      realRipple.style.width = 2 * Math.max(x, y) + "px";
      realRipple.style.left = -Math.max(x, y) + "px";
      realRipple.style.height = 2 * Math.max(x, y) + "px";
      realRipple.style.top = -Math.max(x, y) + "px";
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
<style>
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
  margin: 20px;
  position: relative;
}
.content {
  display: none;
}
.rippleContainer {
  position: absolute;
  border: #000000 solid;
}
.realRipple {
  position: absolute;
  top: -100vh;
  left: -100vw;
  /* width: 200vw;
  height: 200vh; */
  border-radius: 100%;
  background-color: #000000;
  transform: scale(0.01);
  overflow: hidden;
}
.anim {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.realRipple.show {
  transform: scale(1);
  top: -100vh;
  left: -100vw;
}
.rippleContainer.show {
  top: 50vh;
  left: 50vw;
}
</style>

