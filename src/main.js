import Component from 'vue-class-component'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave'
])

import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Http from './services/Http'
import Auth from './services/Auth'

import ErrorBoundary from './components/Utils/ErrorBoundary.vue'

const httpService = new Http()
const authService = new Auth(httpService)

Vue.config.productionTip = false
Vue.prototype.$http = httpService
Vue.prototype.$auth = authService

Vue.component('ErrorBoundary', ErrorBoundary)

new Vue({
  router,
  store,
  render: h => h(App),

  created () {
    authService.refresh()
  }
}).$mount('#app')
