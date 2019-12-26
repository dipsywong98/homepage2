<template lang="pug">
  .root
    .container(ref="background")
      .background.sky(ref="sky")
      .background.cloud(ref="cloud" :style="`margin-left: ${x*5-w}px; bottom: ${y*10-50}px;`")
      .background.city(ref="city" :style="`margin-left: ${x*40-w}px; bottom: ${y*50-50}px;`")
      .background.grass(ref="grass" :style="`margin-left: ${x*80-w}px; bottom: ${y*100-50}px;`")
    .float
      h1.title Dipsyland
      h6.quote "Not Lalaland nor Poland"
</template>
<script>
export default {
  data() {
    return { x: 0, y: 0, w: 0, h: 0 };
  },
  mounted() {
    window.onmousemove = this.mouseMove;
    const { clientWidth: w, clientHeight: h } = this.$refs.background;
    this.w = w;
    this.h = h;
  },
  methods: {
    mouseMove(event) {
      const { screenX: x, screenY: y } = event;
      const { clientWidth: w, clientHeight: h } = this.$refs.background;
      // this.x = (x - w / 2) / w - 0.3;
      this.y = -y / h / 2;
      this.w = w;
      this.h = h;
    }
  }
};
</script>
<style lang="scss" scoped>
.root {
  position: relative;
  width: 100%;
  height: 100vh;
}
.container {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #96e282;
  z-index: -1;
}
.background {
  /*position: absolute;*/
  background-position: bottom;
  background-size: auto 1024px;
  background-repeat-y: no-repeat;
  resize: both;
  width: 600vw;
  height: 1024px;
  position: fixed;
  z-index: -1000;
  &.sky {
    background-image: url("../assets/img/sky.png");
  }
  &.cloud {
    background-image: url("../assets/img/cloud.png");
    animation: move 32s 0s infinite linear;
  }
  &.city {
    background-image: url("../assets/img/city.png");
    animation: move 16s 0s infinite linear;
  }
  &.grass {
    background-image: url("../assets/img/grass.png");
    animation: move 8s 0s infinite linear;
  }
}

@keyframes move {
  from {
    left: 0;
  }
  to {
    left: -576px;
  }
}

.float {
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translateX(-50%) translateY(-30%);
  & > h1.title {
    font-family: "flappy";
    text-shadow: 5px 5px 3px #000000;
    color: #ffffff;
    text-align: center;
    font-size: 4.2rem;
    line-height: 110%;
    margin: 1rem;
  }
  & > h6.quote {
    font-size: 1.2rem;
    font-style: italic;
    font-weight: unset;
    margin: 1rem;
  }
}
</style>
