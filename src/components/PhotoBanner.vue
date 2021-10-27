<template lang="pug">
  .section.photo(:style = "styled")
</template>
<script>
export default {
  props: ['src'],
  computed: {
    styled () {
      return `background-image: url(${this.src})`
    }
  }
}
</script>
<style lang="scss">
.section.photo {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-color: #000000;
  height: var(--section-height);
}
</style>
