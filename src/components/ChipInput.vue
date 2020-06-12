<template>
  <div class="input-root">
    <div :class="`input-field-root ${isShowingAuto && 'auto'} ${active && 'active'} shadow-hover`">
      <Tag :key="chip" :tag="chip" @click="()=>onChipClick(chip)" v-for="chip in chips"></Tag>
      <label class="input-field">
        <input @blur="onBlur" @focus="active=true" @input="onType" @keydown="onKey"
               ref="input"
               v-model="input">
      </label>
    </div>
    <div class="autofill-root" v-show="isShowingAuto">
      <div class="autofill-container" ref="items">
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

export default {
  props: ['availables', 'value'],
  components: { Tag },
  data() {
    return {
      input: '',
      chips: this.value,
      cursor: 0,
      active: false
    }
  },
  computed: {
    suggestions() {
      if (this.input === '') {
        return this.availables
      } else {
        const regex = new RegExp(`^${this.input.toLowerCase()}`)
        return this.availables.filter(a => a.toLowerCase().match(regex)).filter(a => !this.chips.includes(a))
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
        while(true){
          const index = this.chips.indexOf(chip)
          if(index === -1) break;
          this.chips.splice(index,1)
        }
        // this.chips = this.chips.filter(c => c !== chip)
        this.$refs.input.focus()
      },
      onKey(event) {
        switch (event.key) {
          case 'Enter': //enter
            if (this.suggestions.length > this.cursor) {
              this.trimAndMoveChip(this.suggestions[this.cursor])
            } else {
              this.trimAndMoveChip(this.input)
            }
            break
          case 'Backspace': //backspace
            if (this.input === '') {
              this.chips.pop()
            }
            break
          case 'ArrowUp': //up
            this.cursor = (this.cursor - 1 + this.suggestions.length) % this.suggestions.length
            this.$refs.items.scrollTop = this.$refs.items.children[Math.max(0, this.cursor - 3)].offsetTop
            // this.$refs.items.scrollIntoView()
            event.preventDefault()
            break
          case 'ArrowDown': //down
            this.cursor = (this.cursor + 1) % this.suggestions.length
            this.$refs.items.scrollTop = this.$refs.items.children[Math.max(0, this.cursor - 3)].offsetTop
            event.preventDefault()
            break
          case 'Escape':
            this.$refs.input.blur()
        }
      },
      onBlur() {
        this.active = false
      },
      trimAndMoveChip(newChip) {
        const trimmed = newChip.match(/^(.+)[\s,]*$/g)[0]
        if (this.chips.indexOf(trimmed)===-1) {
          this.chips.push(trimmed)
        }
        this.input = ''
        this.cursor = 0
        this.$refs.input.focus()
      }
    },
    watch: {
      chips() {
        this.$emit('input', this.chips)
      },
      value(oldVal, newVal) {
        newVal.forEach(v=>{
          if (this.chips.indexOf(v)===-1) {
            this.chips.push(v)
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  .input-root {
    display: inline-block;
    flex: 10 1 0;
    z-index: 1;
  }

  .input-field-root {
    display: flex;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid var(--gray-light);
    transition: 0.4s;

    &.active {
      background: #ffffff;
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
    }

    &.auto {
      border-radius: 4px 4px 0 0;
    }
  }

  .input-field {
    width: 100%;

    input {
      border: none;
      width: 100%;
      margin: .25em .25em;
      background: none;

      &:focus {
        outline: none;
      }
    }
  }

  .autofill-root {
    position: relative;
    margin-right: 2px;
  }

  .autofill-container {
    scroll-behavior: auto;
    border-radius: 0 0 4px 4px;
    border: 1px solid var(--gray-light);
    position: absolute;
    max-height: 300px;
    width: 100%;
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  }

  .autofill-item {
    padding: 8px 16px;
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
