<template>
  <VToolbar
    app
    fixed
    dark
    color="green darken-1"
  >
    <VToolbarSideIcon @click.native="toggleDrawer" />
    <span
      class="title ml-3 mr-5"
      v-html="appName"
    />
    <VSpacer />
  </VToolbar> 
</template>

<script>
import {
  Vue,
  Component,
  Emit
} from 'vue-property-decorator'

@Component({
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
})
export default class AppTitleBar extends Vue {
  get appName () {
    return process.env.VUE_APP_APP_NAME
  }

  @Emit('input')
  toggleDrawer () {
    return !this.value
  }
}
</script>
