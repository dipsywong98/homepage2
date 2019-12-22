<template>
  <div >
    <a :href="href">
      <img width="24px" height="24px" :src="`/svg/${icon}.svg`" :alt="icon">
    </a>
  </div>
</template>
<script>
  export default {
    props: ['href', 'icon', 'color']
  }
</script>
