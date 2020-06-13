<template lang="pug">
  .rect.shadow-hover(:id="encodeURIComponent(work.title)")
    RippleFullScreen(@animate="onRippleAnimate()" @active="onRippleAnimate()" @close="onClose()" :ripple="ripple" :showByDefault="show")
      template(slot="outside")
        .work-ripple-outside
          h4.title
            a.title.prevent-ripple-full-screen(v-if="work.titleLink" :href="work.titleLink") {{work.title}}
            a.title(v-else="work.titleLink") {{work.title}}
          small.prevent-ripple-full-screen(@click="onTagClick(work.time)")
            i {{work.time}}
          .brief
            span {{(work.brief || '') + ' '}}
            a.title(v-if="showMore" @click="onMoreClick()") more
          .tags
            Tag.prevent-ripple-full-screen(v-for="tag in work.tags" :tag="tag" @click="onTagClick(tag)" :key="tag")
      template(slot="inside")
        .work-ripple-inside
          .loading(v-if="loading") Loading...
          .markdown(v-else)
            Markdown(:source="story")
    .live-root(v-if="work.liveLink")
      a.live(:href="work.liveLink")
        .triangle {{' '}}
        .gradient {{' '}}
        .text Live

</template>
<script>
  import ghcolors from '../lib/ghcolors'
  import Tag from './Tag'
  import RippleFullScreen from './RippleFullScreen'
  import Markdown from './Markdown'

  export default {
    components: { Tag, RippleFullScreen, Markdown },
    props: ['work', 'category'],
    mounted() {
      if (window.location.hash === `#${encodeURIComponent(this.work.title)}`) {
        this.show = true
      }
    },
    data() {
      return {
        ghcolors,
        story: '',
        loading: false,
        show: false,
        ripple: 'story' in this.work && !('more' in this.work)
      }
    },
    computed: {
      showMore() {
        return 'story' in this.work && 'more' in this.work
      }
    },
    methods: {
      onTagClick(tag) {
        this.$emit('tagClick', tag)
      },
      onRippleAnimate() {
        const title = `${this.work.title} | ${this.category} - Dipsyland`
        document.title = title
        window.history.pushState('', title, `#${encodeURIComponent(this.work.title)}`)
        if ('story' in this.work && this.story === '') {
          this.loading = true
          if (typeof this.work.story === 'string') {
            fetch(this.work.story)
              .then(res => res.text())
              .then(text => this.story = text.replace(/^---(\n.*?)*?---/gm, ''))
              .finally(() => this.loading = false)
          } else {
            fetch(`/${this.category}/${this.work.title}.md`)
                .then(res => res.text())
                .then(text => this.story = text)
                .finally(() => this.loading = false)
          }
        }
      },
      onClose() {
        const title = `Dipsyland`
        document.title = title
        window.history.pushState('', title, `/`)
        if ('more' in this.work) {
          this.ripple = false
        }
      },
      onMoreClick() {
        this.ripple = true
      }
    }
  }
</script>
<style lang="scss">
  h4.title {
    margin: 0;
  }

  a.title {
    text-decoration: none;
    color: var(--blue);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .rect {
    flex: 1 1 0;
    overflow: hidden;
    margin: 10px 10px;
    min-width: 300px;
    min-height: 80px;
    border: 1px solid var(--gray-light);
    border-radius: 3px;
    position: relative;
  }

  .work-ripple-outside {
    margin: 16px;
    margin-top: 0;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 32px);
  }

  .work-ripple-inside {
    margin: 40px auto;
    max-width: 1000px;

    & a {
      color: var(--blue-pale);
    }

    & .markdown {
      margin: 0 10px;
    }
  }

  small{
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .brief {
    margin: 8px 0;
    flex: 2 2 0;
  }

  .live-root {
    position: absolute;
    top: -1px;
    right: -1px;
    overflow: hidden;
    width: 75px;
    height: 75px;
    border-radius: 0 4px 0 0;

    & > .live {
      position: absolute;
      top: -50px;
      right: -50px;
      transform: rotate(45deg);
      color: var(--bright);
      text-decoration: none;
      font-weight: bold;
      overflow: hidden;

      & > .triangle {
        width: 100px;
        height: 100px;
        background: #1e5799; /* Old browsers */
        background: -moz-linear-gradient(
                45deg,
                #1e5799 0%,
                #2989d8 50%,
                #207cca 51%,
                #7db9e8 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
                45deg,
                #1e5799 0%,
                #2989d8 50%,
                #207cca 51%,
                #7db9e8 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
                45deg,
                #1e5799 0%,
                #2989d8 50%,
                #207cca 51%,
                #7db9e8 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e5799', endColorstr='#7db9e8', GradientType=1); /* IE6-9 fallback on horizontal gradient */
        z-index: -1;
      }

      & > .gradient {
        transform: rotate(-45deg);
        position: absolute;
        width: 100px;
        height: 100px;
        background: #4c4c4c; /* Old browsers */
        background: -moz-linear-gradient(
                45deg,
                #1e5799 0%,
                #2989d8 2%,
                #7db9e8 7%,
                #207cca 17%,
                var(--dark) 17%,
                var(--bright) 19%,
                var(--bright) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
                45deg,
                #1e5799 0%,
                #2989d8 2%,
                #7db9e8 7%,
                #207cca 17%,
                var(--dark) 17%,
                var(--bright) 19%,
                var(--bright) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
                45deg,
                #1e5799 0%,
                #2989d8 2%,
                #7db9e8 7%,
                #207cca 17%,
                var(--dark) 17%,
                var(--bright) 19%,
                var(--bright) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4c4c4c', endColorstr='#ffffff', GradientType=1); /* IE6-9 fallback on horizontal gradient */
        top: -50px;
        transition: top 0.2s ease-in-out;
        z-index: 10;
      }

      &:hover > .gradient {
        top: -25px;
      }

      & > .text {
        position: absolute;
        width: 100px;
        text-align: center;
        bottom: 0;
      }
    }
  }
</style>
