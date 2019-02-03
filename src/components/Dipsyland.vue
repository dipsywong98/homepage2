<template lang="pug">
  div.container(ref="background")
    div.background.sky(ref="sky")
    div.background.cloud(ref="cloud" :style="`left: ${x*10}px; top: ${y*10}px;`")
    div.background.city(ref="city" :style="`left: ${x*50}px; top: ${y*50}px;`")
    div.background.grass(ref="grass" :style="`left: ${x*100}px; top: ${y*100}px;`")
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { x: 0, y: 0 };
  },
  mounted() {
    this.$refs.background.onmousemove = this.mouseMove;
  },
  methods: {
    mouseMove(event) {
      console.log(event);
      const {
        clientX: x,
        clientY: y,
        target: { clientWidth: w, clientHeight: h }
      } = event;
      this.x = (x - w / 2) / w - 0.3;
      this.y = -y / h / 2 + 0.1;
    }
  }
});
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.background {
  position: absolute;
  // background-attachment: fixed;
  background-position: center;
  background-size: auto 100vh;
  resize: both;
  width: 150vw;
  height: 110vh;

  &.sky {
    background-image: url("../assets/img/sky.png");
  }
  &.cloud {
    background-image: url("../assets/img/cloud.png");
  }
  &.city {
    background-image: url("../assets/img/city.png");
  }
  &.grass {
    background-image: url("../assets/img/grass.png");
  }
}
</style>

