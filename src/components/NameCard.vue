<template lang="pug">
  .card
    .field
      img(:src="my.icon" width="204px")
    .field
      h1 {{my.name}}
      h3 {{my.position}}
      h5 {{my.tagLine}}
      .links
        SvgLink(v-for="medium in my.media" :key="medium.title" :href="medium.href" :icon="medium.icon" :color="medium.color" :title="medium.title")

</template>
<style lang="scss" scoped>
.card-section {
  // width: 100%;
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card {
  position: relative;
  background-color: var(--bright);
  min-height: 300px;
  max-width: 1000px;
  margin: calc((var(--section-height) - 300px) / 2) auto;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 600px) {
    margin: 10rem 0;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.field {
  margin: 20px;
}

.links {
  display: flex;
  justify-content: space-around;
}
</style>
<script>
import SvgLink from './SvgLink'
import jsyaml from 'js-yaml'
import { fresh } from '@/lib/fresh'

export default {
  components: { SvgLink },
  async beforeCreate() {
    this.my = jsyaml.load(await (await fresh('https://hackmd.io/ux_QXxWNTbetEKqOgRSQSA/download')).text())
  },
  data() {
    return {
      my: {
        media: []
      }
    }
  }
}
</script>
