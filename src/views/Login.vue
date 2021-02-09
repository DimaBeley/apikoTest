<template>
  <div class="login">
    Login: <sign-in-form/>
  </div>
</template>

<script>
  import SignInForm from "../components/Login/SignInForm";

  export default {
    name: "Login",
    components: {SignInForm}
  }
</script>

<style>

</style>