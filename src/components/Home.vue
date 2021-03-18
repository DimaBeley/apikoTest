<template>
  <div class="home">
      <h1>Home</h1>
      <h2 class="" v-if="user">Hello {{userFullname}}, Welcome</h2>
  </div>
</template>

<script>
  import { Vue, Component } from 'vue-property-decorator'

  @Component({})
  export default class Home extends Vue {
    get user() {
      return this.$store.getters["user/user"]
    }
    get userFullname() {
      return this.user?.fullname
    }
    beforeMount() {
      this.$store.dispatch('user/getUserFromLocalStorage');
    }
  }
</script>

<style lang="scss">
  @import '../../src/assets/styles/scss/vars.scss';

  .home {
    .home_header {
      margin: 18px 159px 0 97px;
      display: flex;
      justify-content: space-between;
      .home_header_logo {
        justify-content: start;
        position: relative;
        background-image: url("../assets/logoLogin.png");
        width: 102px;
        background-size: cover;
        background-repeat: no-repeat;
        height: 42px;
      }
      .header-links {
        justify-content: end;

        .header-links_heart {
          width: 17.65px;
          height: 15.81px;
          background-image: url("../../src/assets/heart.png");
          background-size: contain;
          background-repeat: no-repeat;
          position: relative;
          top: 3px;
          &:hover {
            cursor: pointer;
            background-image: url("../../src/assets/selectedHeart.png");
          }
        }
        .header-links_items {
          text-decoration: none;
          display: inline-flex;
          justify-content: center;
          margin: 8px 15px 0 15px;
          &:hover {
            text-decoration: underline;
          }
        }
        .header-links_sell {
          width: 131px;
          height: 31px;
          background-color: $main-theme-green;
          border-radius: 4px;
          color: #FFFFFF;
          line-height: 28px;
          &:hover {
            text-decoration: none;
          }
        }
        .header-links_login {
          //font-family: Helvetica;
          font-size: 12px;
          text-transform: uppercase;
          &:hover {
            text-decoration: none;
            cursor: pointer;
          }
        }
        .header-links_logout {
          //font-family: Helvetica;
          font-size: 12px;
          text-transform: uppercase;
          &:hover {
            text-decoration: none;
            cursor: pointer;
          }
        }
      }
    }
  }

</style>