<template>
  <div>
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button type="submit" @click.prevent="submit">Sign In</button>
  </div>
</template>

<script>
export default {
  name: "SignInForm",
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit: function() {
      console.log('data to sign in:', `EMAIL - ${this.email} PASSWORD - ${this.password}`)
    }
  }
}
</script>

<style>

</style>