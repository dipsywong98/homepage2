<template lang="pug">
  .card
    .container
      .my-work
        h1 My Works
        .works
          Work(v-for="work in works" :work="work")


</template>
<script>
  import Work from './Work'

  export default {
    components: { Work },
    computed: {
      works(){
        return this.allWorks
      }
    },
    data() {
      return {
        allWorks: [
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description wow this description is very very very very long long long long long',
            lang: 'PHP',
            tags: ['tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['tag1']
          },
          {
            title: 'Project title',
            titleLink: '//google.com',
            brief: 'brief description',
            lang: 'PHP',
            tags: ['tag1']
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

  .works{
    display: flex;
    flex-flow: wrap;
    /*justify-content: space-between;*/
  }
</style>
