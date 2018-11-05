import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { httpService, authService } from './services'
import ErrorBoundary from './components/Utils/ErrorBoundary'
import PageWrapper from './components/Utils/PageWrapper'

Vue.config.productionTip = false
Vue.prototype.$http = httpService
Vue.prototype.$auth = authService

Vue.component('ErrorBoundary', ErrorBoundary)
Vue.component('PageWrapper', PageWrapper)

new Vue({
  router,
  store,
  render: h => h(App),

  created () {
    try {
      authService.refresh()
    } catch (err) {
      // Do nothing :))
    }
  }
}).$mount('#app')
