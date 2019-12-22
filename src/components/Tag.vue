<template lang="pug">
  .tag
    div(v-if="tag in ghcolors")
      span.color(:style="'background-color:'+ghcolors[tag]")
      span {{tag}}
    div(v-else) {{tag}}
</template>
<script>
  import ghcolors from '../lib/ghcolors'
  export default {
    props: ['tag'],
    data() {
      return {ghcolors}
    }
  }
</script>
<style lang="scss">
  .tag{
    font-size: .7em;
    display: inline-block;
    padding: .3em .9em;
    margin: 0 .5em .5em 0;
    white-space: nowrap;
    background-color: #f1f8ff;
    border-radius: 3px;
    &:hover{
      text-decoration: none;
      background-color: #def;
    }
  }

  .color{
    display: inline-block;
    min-width:10px;
    min-height:10px;
    border-radius: 50%;
    margin-right: 6px;
  }
</style>
