<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <div class="login_form">
        <h3>Login</h3>
        <label>Email</label><br>
        <input type="email" placeholder="Example@gmail.com" v-model="email" class="login_form__input"><br>
        <label>Password</label><br>
        <input :type="inputPasswordType" v-model="password" class="login_form__input ">
        <button class="show-password-btn" type="button" @click="showPassword = !showPassword">
          <v-icon :scale="1.4" :name="showPassword ? 'eye' : 'eye-slash'" />
        </button><br>
        <br>
        <button type="submit">Continue</button>
        <div>
          <span>I have no account</span>&nbsp;
          <router-link to="/registration">Register Now</router-link>
        </div>
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
    margin: 80px auto 0 auto;
    border: 1px solid red;
    background: #FFFFFF;
    box-shadow: 0 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    width: 425px;
    height: 365px;
    .login_form {

      .show-password-btn {
        display: flow-root;
        position: relative;
        bottom: 39px;
        left: 330px;
        background-color: transparent;
        border: none;
        width: 23px;
        height: 14px;
        &:focus {
          //border: none;
          outline: none;
        }
      }
      .login_form__input {
        width: 377px;
        height: 58px;
        background: #F9FAFB;
        border: 1px solid #DEDEE0;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: 14px;
        font-size: 16px;
        font-family: Helvetica,serif;
        letter-spacing: 0.4px;
      }
    }
  }
</style>