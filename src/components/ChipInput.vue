<template>
  <div class="input-root">
    <div :class="`input-field-root ${isShowingAuto && 'auto'} ${active && 'active'}`">
      <Tag v-for="chip in chips" @click="()=>onChipClick(chip)" :tag="chip"></Tag>
      <input class="input-field" ref="input" v-model="input" @input="onType" @keydown="onKey"
             @focus="active=true"
             @blur="onBlur">
    </div>
    <div class="autofill-root" v-show="isShowingAuto">
      <div class="autofill-container">
        <div :class="`autofill-item ${(k===cursor)&&'active'}`" v-for="(op,k) in suggestions"
             @mousedown="event=>event.preventDefault()"
             @click="trimAndMoveChip(op)">{{op}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Tag from './Tag'
  import Vue from 'vue'

  export default {
    props: ['availables'],
    components: { Tag },
    data() {
      return {
        input: '',
        chips: [],
        cursor: 0,
        active: false
      }
    },
    computed: {
      suggestions() {
        if (this.input === '') {
          return []
        } else {
          return this.availables.filter(a => a.includes(this.input)).filter(a => !this.chips.includes(a))
        }
      },
      isShowingAuto() {
        return this.active && this.suggestions.length > 0
      }
    },
    methods: {
      onType() {
        if (this.input[this.input.length - 1] === ',') {
          this.trimAndMoveChip(this.input)
        }
      },
      onChipClick(chip) {
        this.chips = this.chips.filter(c => c !== chip)
        this.$refs.input.focus()
      },
      onKey(event) {
        switch (event.keyCode) {
          case 13: //enter
            this.trimAndMoveChip(this.suggestions[this.cursor])
            break
          case 8: //backspace
            if (this.input === '') {
              this.chips.pop()
            }
            break
          case 38: //up
            this.cursor = (this.cursor - 1 + this.suggestions.length) % this.suggestions.length
            event.preventDefault()
            break
          case 40: //down
            this.cursor = (this.cursor + 1) % this.suggestions.length
            event.preventDefault()
            break
        }
      },
      onBlur(event) {
        this.active = false
      },
      trimAndMoveChip(newChip) {
        this.chips.push(newChip.match(/^(\w+)[\s,]*$/g)[0])
        this.chips = this.chips.filter((c, k) => this.chips.indexOf(c) === k)
        this.input = ''
        this.cursor = 0
        this.$refs.input.focus()
      }
    }
  }
</script>
<style lang="scss">
  .input-root {
  }

  .input-field-root {
    display: flex;
    padding: 2px 8px;
    border-radius: 8px;
    border: 1px solid var(--gray-light);

    &.active {
      background: #ffffff;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    }

    &.auto {
      border-radius: 8px 8px 0 0;
    }
  }

  .input-field {
    border: none;
    width: 100%;
    margin: .25em .25em;
    background: none;
    padding: .3em 0em;

    &:focus {
      outline: none;
    }
  }

  .autofill-root {
    position: relative;
    margin-right: 2px;
  }

  .autofill-container {
    border-radius: 0 0 8px 8px;
    border: 1px solid var(--gray-light);
    position: absolute;
    max-height: 80px;
    width: 100%;
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  }

  .autofill-item {
    padding: 2px 8px;
    border-bottom: 1px solid var(--gray-light);
    cursor: pointer;

    &.active {
      background: var(--gray-light);

      &:hover {
        background: var(--gray-light);
      }
    }

    &:hover {
      background: var(--gray-very-light);
    }
  }
</style>
