<template lang="pug">
  footer
    .footer
      div Make with love by Dipsy, Copyright© 2019 All Right Reserved
      a(href="https://github.com/dipsywong98/dipsywong98.github.io") Last Update: {{lastUpdate}}
</template>
<script>
  export default {
    mounted() {
      fetch('https://api.github.com/repos/dipsywong98/dipsywong98.github.io/commits/master')
        .then(res => res.json())
        .then(json => this.lastUpdate = json.commit.author.date + ' ' + json.commit.message)
    },
    data() {
      return {
        lastUpdate: ''
      }
    }
  }
</script>
<style lang="scss">
  footer {
    background: var(--green-dark);
    padding: 10px;
    color: var(--bright)
  }

  .footer {
    display: flex;
    margin: auto;
    justify-content: space-around;

  a {
    color: var(--bright)
  }

  }
</style>
