<template lang="pug">
  .rect
    h4.title
      a.title(:href="work.titleLink") {{work.title}}
    p.brief {{work.brief}}
    .tags
      Tag(v-for="tag in work.tags" :tag="tag" @click="onTagClick(tag)")
    .live-root(v-if="work.liveLink")
      a.live(:href="work.liveLink")
        .triangle {{' '}}
        .gradient {{' '}}
        .text Live

</template>
<script>
  import ghcolors from '../lib/ghcolors'
  import Tag from './Tag'

  export default {
    components: { Tag },
    props: ['work'],
    data() {
      return { ghcolors }
    },
    methods: {
      onTagClick(tag) {
        this.$emit('tagClick', tag)
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

    &:hover {
      text-decoration: underline;
    }
  }

  .rect {
    overflow:hidden;
    flex: 1 1 0;
    margin: 10px 10px;
    padding: 16px;
    min-width: 200px;
    min-height: 80px;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .brief {
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
        background: -moz-linear-gradient(45deg, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e5799', endColorstr='#7db9e8', GradientType=1); /* IE6-9 fallback on horizontal gradient */
        z-index: -1;
      }

      & > .gradient {
        transform: rotate(-45deg);
        position: absolute;
        width: 100px;
        height: 100px;
        background: #4c4c4c; /* Old browsers */
        background: -moz-linear-gradient(45deg, #1e5799 0%, #2989d8 2%, #7db9e8 7%, #207cca 17%, var(--dark) 17%, var(--bright) 19%, var(--bright) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #1e5799 0%, #2989d8 2%, #7db9e8 7%, #207cca 17%, var(--dark) 17%, var(--bright) 19%, var(--bright) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #1e5799 0%, #2989d8 2%, #7db9e8 7%, #207cca 17%, var(--dark) 17%, var(--bright) 19%, var(--bright) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
        bottom: 0px;
      }
    }
  }
</style>
