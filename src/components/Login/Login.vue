<template>
  <div class="login">
    <form @submit.prevent="handleSubmit" class="login_form">
      <h3>Login</h3>
      <label>Email</label><br>
      <input type="email" placeholder="email" v-model="email" class="login_form__input"><br>
      <label>Password</label><br>
      <input :type="inputPasswordType" placeholder="password" v-model="password" class="login_form__input ">
      <button type="button" @click="showPassword = !showPassword"><v-icon :name="showPassword ? 'eye' : 'eye-slash'" /></button><br>
      <br>
      <button type="submit">Continue</button>
      <div>
        <span>I have no account</span>&nbsp;
        <router-link to="/registration">Register Now</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'
  // TODO email validate, password validation

  @Component({})
  export default class Login extends Vue {
    email = ''
    password = ''
    showPassword = false

    handleSubmit() {
      console.log(this.user, 'user??');
      this.$store.dispatch('user/login', this.user )
      this.$router.push('/')
    }
    get inputPasswordType() {
      return this.showPassword ? 'text' : 'password';
    }
    get user() {
      return {
        email: this.email,
        password: this.password,
      }
    }
  }
</script>

<style lang="scss">
  .login {
    display: flex;
    justify-content: center;
    margin-top: 80px;
    border: 1px solid red;

    .login_form {
      background-color: #FFFFFF;
      width: 425px;
      height: 365px;

      .login_form__input {
        width: 377px;
        height: 58px;
        background: #F9FAFB;
        border: 1px solid #DEDEE0;
        box-sizing: border-box;
        border-radius: 5px;
      }
    }
  }
</style>