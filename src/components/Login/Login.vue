<template>
  <div>
    <form @submit.prevent="hendleSubmit">
      <label>Email</label><br>
      <input type="email" placeholder="email" v-model="email"><br>
      <label>Password</label><br>
      <input :type="inputPasswordType" placeholder="password" v-model="password">
      <button type="button" @click="showPassword = !showPassword"><v-icon :name="showPassword ? 'eye' : 'eye-slash'" /></button><br>
      <br>
      <button type="submit">Continue</button>
    </form>
    <div>
      <span>I have no account</span>&nbsp;
      <router-link to="/registration">Register Now</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data: function () {
      return {
        email: '',
        password: '',
        showPassword: false,
      }
    },
    methods: {
      hendleSubmit: function() {
        const user = {
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch('user/login', )
      }
    },
    computed: {
      inputPasswordType() {
        return this.showPassword ? 'text' : 'password';
      },
    }
  }
</script>

<style>

</style>