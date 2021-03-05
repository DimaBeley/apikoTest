<template>
  <div>
    <div class="login">
      <form @submit.prevent="handleSubmit">
        <div class="login_form">
          <p>Login</p>
          <label>Email</label><br>
          <input type="email" placeholder="Example@gmail.com" autofocus v-model="email" class="login_form__input"><br>
          <label>Password</label><br>
          <input :type="inputPasswordType" v-model="password" class="login_form__input ">
          <button class="show-password-btn" type="button" @click="showPassword = !showPassword">
            <v-icon :scale="1.4" :name="showPassword ? 'eye' : 'eye-slash'" />
          </button>
          <span class="login_form__forget-password">Don't remember password?</span>
          <button type="submit" class="login_form__submit-btn">Continue</button>
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

    .login_form {
      .login_form__forget-password {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #8C8C8C;
        display: flex;
        justify-content: end;
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

      .show-password-btn {
        display: flow-root;
        position: relative;
        bottom: 54px;
        left: 330px;
        background-color: transparent;
        border: none;
        width: 23px;
        height: 14px;

        &:hover {
          cursor: pointer;
        }

        &:focus {
          //border: none;
          outline: none;
        }
      }

      .login_form__input {
        margin-top: 4px;
        margin-bottom: 11px;
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
      .login_form__submit-btn {
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
  }
</style>