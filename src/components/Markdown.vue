<template lang="pug">
vue-markdown.markdown(
  :watches='["source", "show", "toc", "story"]',
  :source='source',
  ref='md'
)
</template>
<script>
import VueMarkdown from './VueMarkdown'
import copyToClipboard from '../lib/copyToClipboard'

export default {
  components: { VueMarkdown },
  props: ['source'],
  mounted () {
    const addListener = (code) => {
      code.addEventListener('click', () => {
        if (!window.getSelection().toString()) {
          copyToClipboard(code.innerText)
          this.$store.commit('popText', 'copied!')
        }
      })
    }
    this.$refs.md.$el.querySelectorAll('pre').forEach(addListener)
    this.$refs.md.$el.querySelectorAll('code').forEach(addListener)
    window.Prism.highlightAll()
  }
}
</script>
<style lang="scss">
.markdown {
  --color: #9cdcfe;
  --backgroundColor: #1e1e1e;
  --prolog: #9cdcfe;
  --comment: rgb(106, 153, 85);
  --keyword: rgb(86, 156, 214);
  --number: rgb(181, 206, 168);
  --constant: rgb(100, 102, 149);
  --variable: rgb(156, 220, 254);
  --string: rgb(206, 145, 120);
  --selector: rgb(215, 186, 125);
  --tag: rgb(86, 156, 214);
  --operator: rgb(212, 212, 212);
  --punctuation: #808080;
  --function: rgb(220, 220, 170);
  --className: rgb(78, 201, 176);
  --char: rgb(209, 105, 105);

  a {
    color: var(--blue);
  }

  img {
    max-width: 100%;
    margin: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;

    td,
    th {
      /*border: 1px solid var(--dark-2);*/
      padding: 6px 13px;
    }

    width: 100%;

    thead {
      background-color: var(--dark);
    }

    tbody {
      tr:nth-child(even) {
        background-color: var(--dark-1);
      }

      tr:nth-child(odd) {
        background-color: var(--dark-background);
      }
    }
  }

  %container {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .success {
    @extend %container;
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

  .info {
    @extend %container;
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
  }

  .warning {
    @extend %container;
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
  }

  .danger {
    @extend %container;
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
  }

  %code-block {
    font-family: monospace;
    font-size: inherit;
    color: #9cdcfe;
    background-color: #1e1e1e;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: var(--dark);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #232323;
    }
  }

  blockquote {
    margin: 0 0 16px;
    padding: 0 1em;
    border-left: 0.25em solid var(--gray-light);
  }

  code {
    @extend %code-block;
    padding: 4px;
    cursor: text;
  }

  pre {
    @extend %code-block;
    padding: 10px;
    position: relative;

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      text-align: right;
      color: var(--comment);
      content: '// click to copy';
    }

    code {
      background: unset;
      padding: unset;
      border: unset;

      .comment {
        color: var(--comment);
      }

      .builtin,
      .changed,
      .keyword {
        color: var(--keyword);
      }

      .number,
      .inserted {
        color: var(--number);
      }

      .constant {
        color: var(--constant);
      }

      .attr-name,
      .variable {
        color: var(--variable);
      }

      .deleted,
      .string,
      .attr-value {
        color: var(--string);
      }

      .selector {
        color: var(--selector);
      }

      .tag {
        color: var(--tag);
      }

      .punctuation,
      .operator {
        color: var(--operator);
      }

      .punctuation {
        color: var(--punctuation);
      }

      .function {
        color: var(--function);
      }

      .class-name {
        color: var(--className);
      }

      .char {
        color: var(--char);
      }
    }
  }
}
</style>
