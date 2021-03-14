<template>
  <div>
    <div class="registration">
      <form @submit.prevent="handleSubmit">
        <div>
          <p>Register</p>
          <label for="registrationEmail">Email</label><br>
          <input class="registration__input" type="email" id="registrationEmail" placeholder="Example@gmail.com" v-model="email"><br>
          <label for="registrationFullname">full name</label><br>
          <input class="registration__input" type="text" id="registrationFullname" placeholder="Tony Stark" v-model="fullname"><br>
          <label for="registrationPassword">password</label><br>
          <input class="registration__input" :type="inputPasswordType" id="registrationPassword" v-model="password">
          <button class="registration__show-password-btn" type="button" @click="showPassword = !showPassword">
            <v-icon :scale="1.4" :name="showPassword ? 'eye' : 'eye-slash'" />
          </button>
          <label for="registrationPasswordCheck">password again</label><br>
          <input class="registration__input" :type="inputPasswordCheckType" id="registrationPasswordCheck" v-model="passwordCheck">
          <button class="registration__show-password-btn" type="button" @click="showPasswordCheck = !showPasswordCheck">
            <v-icon :scale="1.4" :name="showPasswordCheck ? 'eye' : 'eye-slash'" />
          </button><br>
          <button type="submit" class="registration__submit-btn">register</button><br>
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
  // TODO email validate, password validation
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
@import "../../assets/styles/scss/vars";

  .login-link {
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
      margin-bottom: 7px;
    }
    .registration__input {
      margin: 4px 0 9px 0;
      width: 377px;
      height: 58px;
      background: #F9FAFB;
      border: 1px solid #DEDEE0;
      box-sizing: border-box;
      border-radius: 5px;
      padding-left: 14px;
      font-size: 1em;
      letter-spacing: 0.4px;
      &::placeholder {
        font-size: 1em;
        line-height: 18px;
        letter-spacing: 0.4px;
        color: rgba(102, 102, 102, 0.466455);
      }
    }
    //#registrationEmail, #registrationFullname {
    //  margin-bottom: 9px;
    //}
    //#registrationPassword {
    //  margin-bottom: -5px;
    //}
    .registration__submit-btn {
      //TODO find lost pixels >>>>
      margin-top: 3px;
      //TODO remove margin >>>>>
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