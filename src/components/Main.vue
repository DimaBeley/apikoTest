<template>
  <div class="main">
    <header class="main_header">
      <header-logo />
<!--      <div class="main_header_logo"></div>-->
      <div class="header-links">
        <router-link class="header-links_items header-links_sell" to="/sell">sell </router-link>
        <router-link v-if="!user" class="header-links_items header-links_login" to="/login">login</router-link>
        <a class="header-links_items header-links_logout" v-else @click.prevent="$store.dispatch('user/logOutUser')">logout</a>
        <a class="header-links_items header-links_heart" @click.prevent="user ? $router.push('/likes') : null"></a>
      </div>
    </header><br>
    <router-view/>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import HeaderLogo from './HeaderLogo'
@Component({
  components: {
    HeaderLogo
  }
})
export default class Main extends Vue {
  get user() {
    return this.$store.getters["user/user"]
  }
  beforeMount() {
    this.$store.dispatch('user/getUserFromLocalStorage');
  }
}
</script>

<style lang="scss">
@import '../../src/assets/styles/scss/vars.scss';

.main {
  .main_header {
    margin: 18px 159px 0 97px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
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