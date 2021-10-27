<template lang="pug">
  .poptip-root(:style="`top:${y}px; left:${x}px;`")
    Tooltip(:title="title" always-show="true")
</template>
<script>
import Tooltip from './Tooltip'
import debounce from 'lodash.debounce'

export default {
  components: { Tooltip },
  computed: {
    title () {
      return this.$store.state.popText
    }
  },
  data () {
    return {
      x: 0,
      y: 0
    }
  },
  mounted () {
    window.addEventListener('mousemove', debounce(event => {
      this.x = event.screenX
      this.y = event.screenY - 50
    }))
  }
}
</script>
<style lang="scss">
.poptip-root {
  position: fixed;
  z-index: 1000;
}
</style>
