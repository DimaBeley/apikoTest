<template>
  <div>
    <form @submit.prevent="handleSubmit">
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
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { db } from '../../firebase/db'



  @Component({})
  export default class Login extends Vue {
    email = ''
    password = ''
    showPassword = false
    users = []

    beforeMount() {
      db.collection('users')
          .get()
          .then(query => query.docs.map(doc => {
            console.log(doc.data(), 'user!!!!!')
            this.users.push(doc.data())
          }))
    }

    mounted() {
      this.users.map(user => console.log(user, 'user?!'))
      console.log(this.users[0], 'user 0');
    }

    handleSubmit = () => {
      const user = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('user/login', user )
    }
    get inputPasswordType() {
      return this.showPassword ? 'text' : 'password';
    }
  }
</script>

<style>

</style>