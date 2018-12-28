<template>
  <VToolbar
    app
    fixed
    dark
    color="primary"
  >
    <VToolbarSideIcon @click.native="toggleDrawer">
      <VIcon>menu</VIcon>
    </VToolbarSideIcon>
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
        <VIcon class="mr-2">account_circle</VIcon>
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
import { mapGetters } from 'vuex'
import { authService } from '@/services'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      userName: 'LoggedUser/name'
    }),

    appName () {
      return process.env.VUE_APP_APP_NAME
    }
  },

  methods: {
    toggleDrawer () {
      this.$emit('input', !this.value)
    },

    logoutHandler () {
      authService.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
