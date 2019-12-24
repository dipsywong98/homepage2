<template lang="pug">
  .card
    .container
      .my-work
        h1 My Works
        .filter
          .label Filter:
          ChipInput(:availables="allTags" v-model="filters")
        .works
          Work(v-for="work in works" :work="work" @tagClick="onTagClick")


</template>
<script>
import Work from "./Work";
import ChipInput from "./ChipInput";
import getWorks from "../lib/getWorks";

export default {
  components: { Work, ChipInput },
  mounted() {
    getWorks().then(v => (this.allWorks = v));
  },
  computed: {
    works() {
      if (this.filters.length === 0) {
        return this.allWorks;
      } else {
        console.log("hi");
        return this.allWorks.filter(
          ({ tags }) =>
            this.filters.filter(f => tags.includes(f)).length ===
            this.filters.length
        );
      }
    },
    allTags() {
      return this.allWorks
        .map(({ tags }) => tags)
        .flat()
        .filter((t, k, s) => s.indexOf(t) === k);
    }
  },
  data() {
    return {
      filters: [],
      allWorks: []
    };
  },
  methods: {
    onTagClick(tag) {
      if (!this.filters.includes(tag)) {
        this.filters.push(tag);
      }
    }
  }
};
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

.filter {
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > .label {
    margin: 0 4px;
  }
}

.works {
  display: flex;
  flex-flow: wrap;
  /*justify-content: space-between;*/
}
</style>
