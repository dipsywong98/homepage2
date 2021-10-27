<template lang="pug">
a.tag(@click='onClick', :title='title')
  .flex
    div(v-if='_tag in ghcolors')
      span.color(:style='"background-color:" + ghcolors[_tag]')
    div {{ _tag }}
    .cross(v-if='removable')
      img(width='8px', height='8px', :src='`/svg/cross.svg`', alt='cross')
</template>
<script>
import ghcolors from '../lib/ghcolors'

export default {
  props: ['tag', 'removable'],
  computed: {
    _tag () {
      return this.tag || this.$slots.default[0].text
    },
    title () {
      return this.removable
        ? 'Toggle to remove this filter'
        : 'Toggle to add this filter'
    }
  },
  data () {
    return { ghcolors }
  },
  methods: {
    onClick () {
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

.flex {
  display: flex;
}

.cross {
  margin-left: 6px;
}
</style>
