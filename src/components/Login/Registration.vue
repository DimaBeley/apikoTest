<template>
  <div>
    <form @submit.prevent="hendleSubmit">
      <label>Registration</label><br>
      <input type="email" placeholder="Example@gmail.com" v-model="email"><br>
      <label>full name</label><br>
      <input type="text" placeholder="Tony Stark" v-model="fullname"><br>
      <label>password</label><br>
      <input type="password" v-model="password"><br>
      <label>password again</label><br>
      <input type="password" v-model="password"><br>
      <button type="submit">register</button><br>
    </form>
    <div>
      <span>I already have an account,</span>&nbsp;
      <router-link to="login">Log in</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: '',
      password: '',
      fullname: '',
    }
  },
  name: "RegistrationForm",
  methods: {
    hendleSubmit: function() {
      console.log('data to registration:', `EMAIL - ${this.email} PASSWORD - ${this.password}`)
    }
  }
}
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
}
</style>