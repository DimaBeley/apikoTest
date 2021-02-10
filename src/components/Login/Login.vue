<template>
  <div>
    <form @submit.prevent="hendleSubmit">
      <label>Email</label><br>
      <input type="email" placeholder="email" v-model="email"><br>
      <label>Password</label><br>
      <input type="password" placeholder="password" v-model="password"><br>
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
        password: ''
      }
    },
    methods: {
      hendleSubmit: function() {
        console.log('data to sign in:', `EMAIL - ${this.email} PASSWORD - ${this.password}`)
      }
    }
  }
</script>

<style>

</style>