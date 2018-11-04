import '@babel/polyfill'
import Vue from 'vue'
import Component from 'vue-class-component'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { httpService, authService } from './services'

import ErrorBoundary from './components/Utils/ErrorBoundary.vue'

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
