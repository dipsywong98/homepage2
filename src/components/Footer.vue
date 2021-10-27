<template lang="pug">
  footer
    .footer
      .footer-item Make with love by Dipsy, Copyright© 2021 All Right Reserved
      .footer-item
        a(href="https://github.com/dipsywong98/dipsywong98.github.io")
          div Last Update: {{lastTime}}
          div {{lastMessage}}
</template>
<script>
import { fresh } from '@/lib/fresh'

export default {
  mounted () {
    fresh('https://api.github.com/repositories/167823230/commits/dev')
      .then(res => res.json())
      .then(json => {
        this.lastTime = json.commit.author.date + ' '
        this.lastMessage = json.commit.message
      })
  },
  data () {
    return {
      lastMessage: '',
      lastTime: ''
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
    flex-wrap: wrap;

    & a {
      color: var(--bright);
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      margin: auto;
      & div {
        text-align: center;
        margin: auto;
        white-space: nowrap;
      }
    }

    & .footer-item {
      margin: 4px;
    }
  }
</style>
