<template>
  <div>
    Registration:
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button type="submit" @click.prevent="submit">register</button>
    <router-link class="link" to="/"> Main </router-link>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  name: "RegistrationForm",
  methods: {
    submit: function() {
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