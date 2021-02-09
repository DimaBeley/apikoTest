<template>
  <div class="main">
    <login/>
    <router-link to="/registration">Registration</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "./Login";
export default {
  name: 'Main',
  components: {
    Login
  }
}
</script>

<style>
  .main {
    display: inline-flex;
  }
</style>