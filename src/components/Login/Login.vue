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
  import { Vue, Component, Watch } from 'vue-property-decorator'
  // import { db } from '../../firebase/db'



  @Component({})
  export default class Login extends Vue {
    email = ''
    password = ''
    showPassword = false
    users = []


    @Watch ('users')
    // usersWatch(val, oldVal) {
    //   console.log(val, 'val');
    //   console.log(oldVal, 'Old val');
    // }

    handleSubmit() {
      console.log(this.user, 'user??');
      this.$store.dispatch('user/login', this.user )
    }
    get inputPasswordType() {
      return this.showPassword ? 'text' : 'password';
    }
    get user(){
      return {
        email: this.email,
        password: this.password,
      }
    }
  }
</script>

<style>

</style>