<template>
  <VApp>
    <AppNav
      v-if="!isLoginPage"
      v-model="drawer"
    />
    <AppTitleBar
      v-if="!isLoginPage"
      v-model="drawer"
    />
    <VContent>
      <router-view />
    </VContent>
  </VApp>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppTitleBar from '@/components/AppTitleBar'

export default {
  components: {
    AppNav,
    AppTitleBar
  },

  data () {
    return {
      drawer: false
    }
  },

  computed: {
    isLoginPage () {
      return this.$route.name === 'login'
    }
  }
}
</script>
