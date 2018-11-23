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
import Vue from 'vue'
import Component from 'vue-class-component'

import AppNav from '@/components/AppNav'
import AppTitleBar from '@/components/AppTitleBar'

@Component({
  components: {
    AppNav,
    AppTitleBar
  }
})
export default class App extends Vue {
  drawer = true

  get isLoginPage () {
    return this.$route.name === 'login'
  }
}
</script>
