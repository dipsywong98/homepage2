<template>
  <header>
    <div class="navbar-fixed">
      <nav class="light-blue lighten-5">
        <div class="nav-wrapper">
          <a href="#home" class="brand-logo left">Dipsyland</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li v-for="section in sections" :key="section">
              <a :href="'#'+section.id">{{section.title}}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
</style>

