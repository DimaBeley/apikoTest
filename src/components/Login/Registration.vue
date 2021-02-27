<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Registration</label><br>
      <input type="email" placeholder="Example@gmail.com" v-model="email"><br>
      <label>full name</label><br>
      <input type="text" placeholder="Tony Stark" v-model="fullname"><br>
      <label>password</label><br>
      <input :type="inputPasswordType" v-model="password">
      <button type="button" @click="showPassword = !showPassword"><v-icon :name="showPassword ? 'eye' : 'eye-slash'" /></button><br>
      <label>password again</label><br>
      <input :type="inputPasswordCheckType" v-model="passwordCheck">
      <button type="button" @click="showPasswordCheck = !showPasswordCheck"><v-icon :name="showPasswordCheck ? 'eye' : 'eye-slash'" /></button><br>
      <button type="submit">register</button><br>
    </form>
    <div>
      <span>I already have an account,</span>&nbsp;
      <router-link to="login">Log in</router-link>
    </div>
  </div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'
  // import { db } from '../../firebase/db'

  @Component({})
  export default class Registration extends Vue {
    email = ''
    password = ''
    passwordCheck = ''
    fullname = ''
    showPassword = false
    showPasswordCheck = false

    validateForm() {
      return true
    }
    handleSubmit() {
      const user = {
        email: this.email,
        fullname: this.fullname,
        password: this.password,
        date: Date.now()
      }

      if (this.validateForm()) {
        this.$store.dispatch('user/addUser', user)
        this.$router.push('/')
      }
    }
    get inputPasswordType() {
      return this.showPassword ? 'text' : 'password';
    }
    get inputPasswordCheckType() {
      return this.showPasswordCheck ? 'text' : 'password';
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