<template lang="pug">
  .card
    .field
      img(src="img/icon.png" width="204px" style="margin:20px 0px")
    .field
      h1 Dipsy Wong
      h3 Year4 BEng(COMP), HKUST
      h5 A random hacky programmer who love making anything fun!
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
  max-width: 1000px;
  margin: 20rem auto;
  @media screen and (max-width: 600px) {
    margin: 10rem 0;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.field {
  margin: 20px;
}
</style>
