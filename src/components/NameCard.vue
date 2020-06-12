<template lang="pug">
  .card
    .field
      img(src="/img/icon.png" width="204px")
    .field
      h1 Dipsy Wong
      h3 Year4 BEng(COMP & MATH), HKUST
      h5 A random hacky programmer who loves making anything fun!
      .links
        SvgLink(href="//www.facebook.com/FK.twf/" icon="facebook" color="#1877F2")
        SvgLink(href="//github.com/dipsywong98" icon="github" color="#181717")
        SvgLink(href="//www.linkedin.com/in/dipsywong/" icon="linkedin" color="0077B5")
        SvgLink(href="mailto:ycwongal@connect.ust.hk" icon="gmail" color="D14836")
        SvgLink(href="//www.youtube.com/user/FacebookArmyOffical" icon="youtube" color="#FF0000")

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

export default {
  components: { SvgLink }
}
</script>
