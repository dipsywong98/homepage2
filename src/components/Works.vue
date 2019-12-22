<template lang="pug">
  .card
    .container
      .my-work
        h1 My Works
        div
          label Filter
          ChipInput(:availables="['ab','abgg','ddef']")
        .works
          Work(v-for="work in works" :work="work")




</template>
<script>
  import Work from './Work'
  import ChipInput from './ChipInput'

  export default {
    components: { Work, ChipInput },
    computed: {
      works() {
        if (this.filters.length === 0) {
          return this.allWorks
        } else {
          return this.allWorks.filter(({ tags }) => this.filters.filter(f => tags.includes(f)).length > 0)
        }
      },
      filters() {
        return this.filtersRaw.split(',').filter(f=>f!=='')
      }
    },
    data() {
      return {
        filtersRaw: '',
        allWorks: [
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            tags: ['PHP','tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['PHP','tag2']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['PHP','tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['PHP','tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description wow this description is very very very very long long long long long',
            lang: 'PHP',
            tags: ['PHP','tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['PHP','tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['PHP','tag1']
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .card {
    --time-width: 100px;
    position: relative;
    background-color: #f8f8f8;
    max-width: 1200px;
    margin: 10rem auto;
    overflow: hidden;
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 600px) {
      margin: 10rem 0;
      --time-width: 12px;
    }
  }

  .container {
    margin: 5rem;
    position: relative;
    @media screen and (max-width: 600px) {
      margin: 10rem 10px;
    }
  }

  .my-work {
    text-align: left;
  }

  .works {
    display: flex;
    flex-flow: wrap;
    /*justify-content: space-between;*/
  }
</style>
