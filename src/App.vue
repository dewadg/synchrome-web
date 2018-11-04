<template>
  <VApp>
    <AppNav v-if="!isLoginPage" />
    <VContent>
      <router-view />
    </VContent>
  </VApp>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import AppNav from '@/components/App/AppNav'

@Component({
  components: {
    AppNav
  }
})
export default class App extends Vue {
  get isLoginPage () {
    return this.$route.name === 'login'
  }
}
</script>
