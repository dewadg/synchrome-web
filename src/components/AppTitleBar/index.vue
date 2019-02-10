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
    <span class="title ml-3 mr-5">
      {{ appName }}
    </span>
    <VSpacer />
    <VMenu
      open-on-hover
      bottom
      offset-y
    >
      <VBtn
        slot="activator"
        flat
      >
        <VIcon class="mr-2">
          account_circle
        </VIcon>
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
import { GET_LOGGED_USER_NAME, LOGOUT } from '@/stores/types/loggedUserTypes'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      userName: GET_LOGGED_USER_NAME
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
      this.$store.commit(LOGOUT)
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
