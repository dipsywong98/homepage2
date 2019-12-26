<template lang="pug">
  .sorter-root
    .container
      table
        tr
          td
          td title
          td time
          td f
          td brief
          td titleLink
          td liveLink
          td tags
        tr.sorter-item(v-for="work in works" @mousedown="e=>onDown(e, work)" @mousemove="e=>onHover(e,work)")
          td m
          td
            input(v-model="work.title")
          td
            input(v-model="work.time")
          td
            input.digit(v-model="work.favorite" type="number")
          td
            input(v-model="work.brief")
          td
            input(v-model="work.titleLink")
          td
            input(v-model="work.liveLink")
          td
            input(v-model="work.tags")
      textarea(:value="yml")
</template>
<script>
  import getWorks from '../lib/getWorks'
  import { safeDump } from 'js-yaml'

  export default {
    props: ['category'],
    data() {
      return {
        works: [],
        down: false,
        hover: false,
        x: 0,
        y: 0
      }
    },
    computed: {
      yml() {
        return safeDump(this.works)
      }
    },
    mounted() {
      getWorks(this.category).then(w => this.works = w)
      window.addEventListener('mouseup', this.onUp)
    },
    beforeDestroy() {
      window.removeEventListener('mouseup', this.onUp)
    },
    methods: {
      onDown(e, w) {
        // console.log(e,w)
        this.down = w
      },
      onUp() {
        if (!!this.down && !!this.hover) {
          this.swap(this.works, this.down, this.hover)
        }
        this.down = false
        this.hover = false
      },
      onHover(e, w) {
        if (this.down) {
          this.swap(this.works, this.down, w)
        }
      },
      swap(works, a, b) {
        works.forEach((w, k) => {
          if (w === a) {
            works[k] = b
          } else if (w === b) {
            works[k] = a
          }
        })
        this.works = works.concat([])
      }
    }
  }
</script>
<style lang="scss">
  .sorter-root {
    --time-width: 100px;
    position: relative;
    background-color: #f8f8f8;
    max-width: 1200px;
    margin: 10rem auto;
    overflow: hidden;
    -webkit-box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.25);

    & .container {
      margin: 5rem;
    }

    .sorter-item {
      width: 1000px;
      text-align: left;
      user-select: none;

      & input.digit {
        width: 20px;
      }
    }

    & textarea {
      width: 100%;
      height: 100px;
    }
  }

</style>
