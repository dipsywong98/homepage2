<template lang="pug">
  .tag(@click="onClick")
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
      return { ghcolors }
    },
    methods: {
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tag {
    font-size: 0.7em;
    display: inline-block;
    padding: 0.3em 0.9em;
    margin: 0.25em 0.25em;
    white-space: nowrap;
    background-color: #f1f8ff;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      background-color: #def;
    }
  }

  .color {
    display: inline-block;
    min-width: 10px;
    min-height: 10px;
    border-radius: 50%;
  margin-right: 6px;
}
</style>
