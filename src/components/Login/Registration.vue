<template>
  <div>
    <div class="registration">
      <form @submit.prevent="handleSubmit">
        <div>
          <p>Register</p>
          <label for="registrationEmail">Email</label>
          <input class="registration__input" type="email" id="registrationEmail" placeholder="Example@gmail.com" v-model="email">
          <label for="registrationFullname">full name</label>
          <input class="registration__input" type="text" id="registrationFullname" placeholder="Tony Stark" v-model="fullname">
          <label for="registrationPassword">password</label>
          <input class="registration__input" :type="inputPasswordType" id="registrationPassword" v-model="password">
          <show-password-btn :showPassword="showPassword"
                             @click="showPassword = !showPassword"
                             :left="330"
                             :bottom="37"
          />
          <label for="registrationPasswordCheck">password again</label>
          <input class="registration__input" :type="inputPasswordCheckType" id="registrationPasswordCheck" v-model="passwordCheck">
          <show-password-btn :showPassword="showPasswordCheck"
                             @click="showPasswordCheck = !showPasswordCheck"
                             :left="330"
                             :bottom="39"
          />
          <button type="submit" class="registration__submit-btn">Register</button><br>
        </div>
      </form>
    </div>
    <div class="login-link">
      <span>I already have an account,
        <router-link to="login">Log in</router-link>
      </span>&nbsp;
    </div>
  </div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'
  import ShowPasswordBtn from "./ShowPasswordBtn";
  // TODO email validate, password validation
  @Component({
    components: { ShowPasswordBtn }
  })
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
@import "../../assets/styles/scss/vars";

  .login-link {
    width: 425px;
    height: 76px;
    background: #FFFFFF;
    box-shadow: 0 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    margin: 23px auto 0 auto;
    display: flex;
    justify-content: center;

    span {
      font-size: 14px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #2A2A2A;
      line-height: 78px;
      margin-left: 10px;
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

  .registration {
    display: flex;
    justify-content: center;
    margin: 80px auto 0 auto;
    background: #FFFFFF;
    box-shadow: 0 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
    width: 425px;
    height: 550px;
    //TODO mixin for label and <p> and inputs? and another...
    label {
      font-size: 12px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #303030;
      display: block;
      margin-bottom: 5px;
      margin-top: 13px;
    }

    [for$='Password'], [for$='PasswordCheck'] {
      letter-spacing: 0.6px;
    }

    p {
      padding: 2px 0 11px 0;
      //margin: 25px 0 28px 0;
      text-align: center;
      font-size: 22px;
      color: #282828;
    }

    .registration__show-password-btn {
      display: block;
      position: relative;
      bottom: 48px;
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
    #registrationPassword {
      //TODO remove margin >>>>>?????? where pixels ??  font-size??
      //margin-bottom: 7px;
    }
    .registration__input {
      padding: 0 0 0 11px;
      //margin: 5px 0 9px 0;
      width: 377px;
      height: 58px;
      background: #F9FAFB;
      border: 1px solid #DEDEE0;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 1em;
      letter-spacing: 0.6px;
      font-family: Helvetica;
      font-weight: 200;
      &::placeholder {
        font-family: Helvetica;
        font-weight: 200;
        font-size: 1em;
        letter-spacing: 0.4px;
        margin-bottom: 1px;
        color: rgba(102, 102, 102, 0.466455);
      }
    }
    .registration__submit-btn {
      font-family: Helvetica;
      margin-top: 29px;
      //TODO remove margin ?? >>>>>
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