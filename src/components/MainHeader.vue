<template>

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

<style scoped>

</style>