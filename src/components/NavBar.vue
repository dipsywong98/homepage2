<template>
  <header>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#home" class="nav-item title anim">Dipsyland</a>
          <div style="display: inherit;">
            <a href="#about" class="nav-item anim">About Me</a>
            <a href="#works" class="nav-item anim">My Works</a>
            <a href="#cv" class="nav-item anim">Resume</a>
            <a href="#blog" class="nav-item anim">Blog</a>
            <a href="#contact" class="nav-item anim">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.navbar-fixed {
  box-shadow: 0px 0px 8px 0px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 2;
}
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: var(--blue-light);
  color: var(--blue);
  padding: 0 1em;
}
.nav-item {
  color: unset;
  text-decoration: none;
  padding: 1em 1em;
  font-size: 1em;
  &:hover {
    background-color: #00000010;
  }
  &.title {
    padding: 0.5em 1em;
    font-size: 1.5em;
  }
}
</style>

