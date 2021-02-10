<template>
  <div class="main">
    <header>
      <div class="logo">Apiko logo</div>
      <router-link class="header-link" to="/sell">sell </router-link>
      <router-link class="header-link" to="/login">login</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
  .main {
      display: flex;
    & header {
      .logo {
        text-align: left;
      }
      &.header-link {
        text-decoration: none;
        text-align: end;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

</style>