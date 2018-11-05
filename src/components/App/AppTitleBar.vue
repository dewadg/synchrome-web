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
    <VMenu
      open-on-hover
      bottom
      offset-y
    >
      <VBtn
        flat
        slot="activator"
      >
        <VIcon class="mr-4">fa-user</VIcon>
        {{ userName }}
      </VBtn>
      <VList>
        <VListTile @click="logoutHandler">
          <VListTileContent>
            <VListTileTitle>Keluar</VListTileTitle>
          </VListTileContent>
        </VListTile>
      </VList>
    </VMenu>
  </VToolbar> 
</template>

<script>
import {
  Vue,
  Component,
  Emit
} from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { authService } from '@/services'

@Component({
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
})
export default class AppTitleBar extends Vue {
  @Getter('LoggedUser/name') userName

  get appName () {
    return process.env.VUE_APP_APP_NAME
  }

  @Emit('input')
  toggleDrawer () {
    return !this.value
  }

  logoutHandler () {
    authService.logout()
    this.$router.push({ name: 'login' })
  }
}
</script>
