<template>
  <div ref="frame" class="frame">
    <div ref="text" class="text wave-effect waves-block" @click="toggle">this is some display text
      <div ref="ripple" class="ripple">
        <div ref="realRipple" class="realRipple"></div>
      </div>
    </div>
    <div ref="content" class="content">this is some content text</div>
  </div>
</template>
<script>
export default {
  methods: {
    toggle(e) {
      const { offsetX: x, offsetY: y } = e;
      console.log(x, y);
      const rippleEl = this.$refs.ripple;
      const realRipple = this.$refs.realRipple;
      if (realRipple.classList.contains("show")) {
        realRipple.classList.remove("show");
        setTimeout(() => {
          realRipple.style.display = "none";
          realRipple.classList.remove("anim");
        }, 500);
      } else {
        rippleEl.style.left = x + "px";
        rippleEl.style.top = y + "px";
        realRipple.style.display = "";
        console.log(rippleEl.classList);
        // rippleEl.classList.push("anim", "show");
        window.setTimeout(() => (realRipple.className += " anim show"), 1);
        // rippleEl.className += "";
      }
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
.ripple {
  position: absolute;
  border: #000000 solid;
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
.show {
  transform: scale(1);
  top: -100vh;
  left: -100vw;
}
</style>

