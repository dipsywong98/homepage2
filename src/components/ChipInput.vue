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

  export default {
    props: ['availables', 'value'],
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
        while(true){
          const index = this.chips.indexOf(chip)
          if(index === -1) break;
          this.chips.splice(index,1)
        }
        // this.chips = this.chips.filter(c => c !== chip)
        this.$refs.input.focus()
      },
      onKey(event) {
        switch (event.keyCode) {
          case 13: //enter
            if (this.suggestions.length > this.cursor) {
              this.trimAndMoveChip(this.suggestions[this.cursor])
            } else {
              this.trimAndMoveChip(this.input)
            }
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
        const trimmed = newChip.match(/^(\w+)[\s,]*$/g)[0]
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
        console.log(this.chips)
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
    z-index: 3;
  }

  .input-field-root {
    display: flex;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid var(--gray-light);
    transition: 0.4s;

    &.active {
      background: #ffffff;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
    }

    &.auto {
      border-radius: 4px 4px 0 0;
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
    border-radius: 0 0 4px 4px;
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
