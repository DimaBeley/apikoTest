<template>
  <div>
    <div class="login">
      <form @submit.prevent="handleSubmit">
        <div>
          <p>Login</p>
          <label for="loginEmail">Email</label><br>
          <input type="email" id="loginEmail" placeholder="Example@gmail.com" autofocus v-model="email" class="login__input login__email"><br>
          <label for="loginPassword">Password</label><br>
          <input :type="inputPasswordType" id="loginPassword" v-model="password" class="login__input login__password">
          <show-password-btn :showPassword="showPassword"
                             @click="showPassword = !showPassword"
                             :left="330"
                             :bottom="57"
          />
          <div class="login__forget-password">
            <a :href="'#'" class="login__forget-password__link">Don't remember password?</a>
          </div>
          <button type="submit" class="login__submit-btn">Continue</button>
        </div>
      </form>
    </div>
    <div class="register-link">
      <span>I have no account,
        <router-link to="/registration">Register Now</router-link>
      </span>&nbsp;
    </div>
  </div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'
  import ShowPasswordBtn from './ShowPasswordBtn'
  // TODO email validate, password validation

  @Component({
    components: { ShowPasswordBtn }
  })
  export default class Login extends Vue {
    email = ''
    password = ''
    showPassword = false

    beforeCreate () {
      if (this.$store.getters["user/isLoggedIn"]) {
        this.$router.push({ name: 'Home' })
      }
    }
    handleSubmit() {
      this.$store.dispatch('user/login', this.user )
      this.$router.push('/home')
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
  @import "../../assets/styles/scss/vars";

  .register-link {
    width: 425px;
    height: 76px;
    background: #FFFFFF;
    box-shadow: 0 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    margin: 21px auto 0 auto;
    display: flex;
    justify-content: center;

    span {
      font-size: 14px;
      text-align: center;
      letter-spacing: 0.3px;
      color: #2A2A2A;
      line-height: 76px;

      a {
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: $main-theme-green;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .login {
    display: flex;
    justify-content: center;
    margin: 80px auto 0 auto;
    background: #FFFFFF;
    box-shadow: 0 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    width: 425px;
    height: 365px;

    .login__forget-password {
      display: flex;
      justify-content: flex-end;
      position: relative;
      bottom: 16px;
      .login__forget-password__link {
        font-size: 14px;
        letter-spacing: 0.25px;
        color: #8C8C8C;
        text-decoration: none;
      }
    }
    label {
      font-size: 12px;
      letter-spacing: 0.6px;
      text-transform: uppercase;
      color: #303030;
    }
    p {
      margin: 25px 0 28px 9px;
      text-align: center;
      font-size: 22px;
      color: #282828;
    }

    .login__email {
      margin-bottom: 11px;
    }
    .login__password {
      margin-bottom: 20px;
    }

    .login__input {
      font-family: Helvetica;
      width: 377px;
      height: 58px;
      margin-top: 4px;
      padding-left: 12px;
      background: #F9FAFB;
      border: 1px solid #DEDEE0;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 16px;
      letter-spacing: 0.4px;
      &::placeholder {
        font-size: 16px;
        letter-spacing: 0.4px;
        color: rgba(102, 102, 102, 0.466455);
      }
    }
    .login__submit-btn {
      height: 58px;
      width: 377px;
      background-color: $main-theme-green;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #FFFFFF;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>