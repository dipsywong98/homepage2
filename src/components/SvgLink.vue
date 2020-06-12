<template lang="pug">
  Tooltip(:title="title")
    a(:href="href")
      img(width="32px" height="32px" :src="`/svg/${icon}.svg`" :alt="icon")
</template>
<script>
import Tooltip from './Tooltip'

export default {
  props: ['href', 'icon', 'color', 'title'],
  components: { Tooltip }
}
</script>
