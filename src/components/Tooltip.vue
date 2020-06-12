<template lang="pug">
  .tooltip-root(@mouseover="onMouseIn()" @mouseleave="onMouseOut()")
    .title(:style="`opacity: ${(show && title) ? 1 : 0}`") {{title}}
    slot
</template>
<script>
export default {
  props: ['title', 'alwaysShow'],
  data() {
    return {
      show: this.alwaysShow || false
    }
  },
  methods: {
    onMouseIn() {
      if (!!this.title)
        this.show = true
    },
    onMouseOut() {
      this.show = this.alwaysShow || false
    }
  }
}
</script>
<style lang="scss">
.tooltip-root {
  position: relative;

  .title {
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: var(--bright);
    background-color: var(--dark-2);
    padding: 8px 16px;
    border-radius: 8px;
    box-shadow: 2px 3px 4px -1px rgba(0, 0, 0, 0.61);
    font-size: 0.83rem;
    transition: opacity 0.1s ease-out;

    &::after {
      position: absolute;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
      content: ' ';
      border: solid 8px transparent;
      border-bottom-color: var(--dark-2);
    }
  }
}
</style>
