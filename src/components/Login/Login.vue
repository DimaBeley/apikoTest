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
          <button class="login__show-password-btn" type="button" @click="showPassword = !showPassword">
            <v-icon :scale="1.4" :name="showPassword ? 'eye' : 'eye-slash'" />
          </button>
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
  // TODO email validate, password validation

  @Component({})
  export default class Login extends Vue {
    email = ''
    password = ''
    showPassword = false

    handleSubmit() {
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
      letter-spacing: 0.4px;
      color: #2A2A2A;
      line-height: 76px;

      a {
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
      bottom: 14px;
      .login__forget-password__link {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #8C8C8C;
        text-decoration: none;
      }
    }
    label {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #303030;
    }
    p {
      margin: 25px 0 28px 0;
      text-align: center;
      font-size: 22px;
      color: #282828;
    }
    .login__show-password-btn {
      display: flow-root;
      position: relative;
      bottom: 55px;
      left: 330px;
      background-color: transparent;
      border: none;
      width: 0;
      height: 0;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }

    .login__email {
      margin-bottom: 11px;
    }
    .login__password {
      margin-bottom: 17px;
    }

    .login__input {
      margin-top: 4px;
      width: 377px;
      height: 58px;
      background: #F9FAFB;
      border: 1px solid #DEDEE0;
      box-sizing: border-box;
      border-radius: 5px;
      padding-left: 14px;
      font-size: 16px;
      letter-spacing: 0.4px;
      &::placeholder {
        font-size: 16px;
        line-height: 18px;
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
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #FFFFFF;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>