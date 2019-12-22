<template lang="pug">
  .rect
    a.title(:href="work.titleLink")
      h4.title {{work.title}}
    p.brief {{work.brief}}
    .tags
      Tag(v-for="tag in work.tags" :tag="tag")



</template>
<script>
  import ghcolors from '../lib/ghcolors'
  import Tag from './Tag'

  export default {
    components: { Tag },
    props: ['work'],
    data() {
      return { ghcolors }
    }
  }
</script>
<style lang="scss">
  .title {
    margin: 0;
    text-decoration: none;
    color: var(--blue);

    &:hover {
      text-decoration: underline;
    }
  }

  .rect {
    flex: 1 1 0;
    margin: 10px 10px;
    padding: 16px;
    min-width: 200px;
    min-height: 80px;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
  }

  .brief {
    flex: 2 2 0;
  }
</style>
