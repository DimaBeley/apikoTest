<template>
  <button class="show-password-btn"
          type="button"
          :style="position"
          @click="$emit('click')"
  >
    <v-icon :scale="showPassword ? 1.4 : 1.55"
            :name="showPassword ? 'eye' : 'eye-slash'"
    />
  </button>
</template>

<script>
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component({})
  export default class ShowPasswordBtn extends Vue {
    @Prop(Boolean) showPassword
    @Prop(Number) left
    @Prop(Number) bottom

    get position() {
      return `left: ${this.showPassword ? this.left : (this.left -1)}px; bottom: ${this.bottom}px`
    }
  }
</script>

<style lang="scss">
  .show-password-btn {
    display: flow-root;
    position: relative;
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
</style>