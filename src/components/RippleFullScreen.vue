<template>
  <div ref="frame" class="frame">
    <div ref="text" class="text wave-effect waves-block" @click="toggle">this is some display text
      <div ref="rippleContainer" class="rippleContainer">
        <div ref="realRipple" class="realRipple"></div>
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
    rippleContainer.style.display = "none";
  },
  methods: {
    toggle(e) {
      const { offsetX: x, offsetY: y } = e;
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
      this.position.x = x;
      this.position.y = y;
      rippleContainer.style.left = this.position.x + "px";
      rippleContainer.style.top = this.position.y + "px";
      rippleContainer.style.display = "";
      window.setTimeout(() => {
        rippleContainer.style.left = null;
        rippleContainer.style.top = null;
        realRipple.className += " anim show";
        rippleContainer.className += " anim show";
      }, 1);
      setTimeout(() => {
        this.isActive = true;
        this.isAnimating = false;
      }, 500);
    },
    hide(x, y) {
      const rippleContainer = this.$refs.rippleContainer;
      const realRipple = this.$refs.realRipple;
      console.log("position", this.position);
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
      }, 500);
    }
  }
};
</script>
<style>
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
  max-width: 100vw;
  max-height: 100vh;
}
.realRipple {
  position: absolute;
  top: -100vh;
  left: -100vw;
  width: 200vw;
  height: 200vh;
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

