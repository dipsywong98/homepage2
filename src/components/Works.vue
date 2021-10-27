<template lang="pug">
.card(ref="top")
  .container
    .my-work
      h1 My {{ Category }}
      .description(@click="onDescriptionClick")
        Markdown(:source="meta ? meta.description : ''")
      .filter
        .label Filter:
        ChipInput(:availables="allTags", v-model="filters")
      .works
        Work(
          v-for="work in works",
          :work="work",
          @tagClick="onTagClick",
          :category="category",
          :key="work.title"
        )
        .placeholder
        .placeholder
</template>
<script>
import Work from './Work'
import ChipInput from './ChipInput'
import getWorks from '../lib/getWorks'
import updateScroll from '../lib/updateScroll'
import Tag from './Tag'
import Markdown from '@/components/Markdown'

export default {
  components: { Markdown, Work, ChipInput, Tag },
  props: {
    category: String,
    defaultFilters: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    getWorks(this.category)
      .then((v) => {
        this.allWorks = v.filter(({ meta }) => !meta)
        this.meta = v.find(({ meta }) => meta)
        this.allWorks.forEach(({ title }) => {
          if (encodeURIComponent(title) === this.hash) {
            this.filters = [title]
          }
        })
      })
      .then(() => {
        this.$nextTick(() => {
          updateScroll()
        })
      })
  },
  computed: {
    works () {
      if (this.filters.length === 0) {
        return this.allWorks
      } else {
        return this.allWorks.filter(({ tags, time, title }) => {
          const template = (tags || [])
            .concat([time, title])
            .filter((b) => b)
            .map((s) => s.toLowerCase())
          return (
            this.filters.filter((f) => template.includes(f.toLowerCase()))
              .length === this.filters.length
          )
        })
      }
    },
    allTags () {
      return this.allWorks
        .map(({ title, time, tags }) => (tags || []).concat(time, title))
        .flat()
        .filter((t) => typeof t !== 'undefined')
        .sort()
        .filter((t, k, s) => t && s.indexOf(t) === k)
    },
    /**
     * @return {string}
     */
    Category () {
      return this.category[0].toUpperCase() + this.category.substring(1)
    },
    hash () {
      return window.location.hash.replace('#', '')
    }
  },
  data () {
    return {
      filters: this.defaultFilters,
      allWorks: [],
      meta: undefined
    }
  },
  methods: {
    onTagClick (tag, reset = false) {
      if (reset) {
        this.filters.splice(0, this.filters.length)
      }
      if (tag && !this.filters.includes(tag)) {
        this.filters.push(tag)
        this.$refs.top.scrollIntoView()
      }
    },
    onDescriptionClick (event) {
      if (event.path.map((e) => e.tagName).includes('A')) {
        const tag = event.target.innerText
        if (tag !== 'all') {
          this.onTagClick(tag, true)
        } else {
          this.onTagClick(false, true)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  --time-width: 100px;
  position: relative;
  background-color: #f8f8f8;
  max-width: 1200px;
  min-height: calc(var(--section-height) - 10rem * 2);
  margin: 10rem auto;
  overflow: hidden;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 600px) {
    margin: 10rem 0;
    --time-width: 12px;
  }
}

.container {
  margin: 5rem;
  position: relative;
  @media screen and (max-width: 800px) {
    margin: 5rem 20px;
  }
  @media screen and (max-width: 600px) {
    margin: 5rem 10px;
  }
}

.my-work {
  text-align: left;
}

.filter {
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > .label {
    margin: 0 4px;
  }
}

.works {
  display: flex;
  flex-flow: wrap;
  /*justify-content: space-between;*/
  & .placeholder {
    content: "";
    flex: 1 1 0;
    margin: 11px 11px;
    min-width: 300px;
  }
}
</style>
