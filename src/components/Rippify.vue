<template>
  <div
    class="rippifyRoot"
    ref="rippifyRoot"
    :style="`--radius:${radius}px;--x:${x}px;--y:${y}px`"
    @click="click"
  >
    <slot></slot>
    <div ref="rippleContainer" :class="'rippleContainer '+(isAnimating?'':'hide')">
      <div ref="realRipple" class="realRipple"></div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      radius: 0,
      x: 0,
      y: 0,
      isAnimating: false
    };
  },
  mounted() {
    // this.setRippleCircle();
  },
  methods: {
    setRippleCircle() {
      const {
        offsetWidth: width,
        offsetHeight: height
      } = this.$refs.rippifyRoot;
      const { rippleContainer, realRipple } = this.$refs;
      const radius = Math.max(width, height) / 2;
      this.radius = radius;
      rippleContainer.style.width = width + "px";
      rippleContainer.style.height = height + "px";
      realRipple.style.width = 2 * radius + "px";
      realRipple.style.height = 2 * radius + "px";
      realRipple.style.top = -radius + "px";
    },
    click(e) {
      // console.log(e);
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.setRippleCircle();
      const { layerX: x, layerY: y } = e;

      // this.x = x;
      // this.y = y;
      const { rippifyRoot, realRipple } = this.$refs;
      realRipple.style.left = x - this.radius + "px";
      realRipple.style.top = y - this.radius + "px";
      realRipple.classList += " animating end";
      // setTimeout(() => {
      //   this.setRippleCircle();
      // }, 1);
      setTimeout(() => {
        realRipple.classList.remove("animating");
        // setTimeout(() => {
        realRipple.classList.remove("end");
        // }, 1);
        this.isAnimating = false;
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.rippifyRoot {
  position: relative;
  &:hover {
    background-color: #ff000044;
  }
}
.rippleContainer {
  color: inherit;
  border-radius: inherit;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 0;
  // pointer-events: none;
}
.realRipple {
  background-color: #ff0000aa;
  // transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  position: absolute;
  border: solid #000000 1px;
  transform-origin: center center;
  transform: scale(0.0001);
  &.end {
    opacity: 0;
    transform: scale(1);
  }
  &.hide {
    display: none;
  }
}
.animating {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
