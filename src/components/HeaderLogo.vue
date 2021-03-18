<template>
  <div class="header-logo" :style="`background-image: url(${logoUrl});`"></div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class HeaderLogo extends Vue {
  get logoUrl() {
    const path = require.context('../assets/', false, /\.png$/)
    const routeName = this.$route.name
    switch (routeName) {
      case 'Login': return path('./logoLogin.png')
      case 'Registration': return path('./logoRegistration.png')
      default: return path('./logoHome.png')
    }
  }
}
</script>

<style lang="scss">
  .header-logo {
    background-image: url('../assets/logoHome.png');
    justify-content: start;
    position: relative;
    width: 102px;
    height: 42px;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>