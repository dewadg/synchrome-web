import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/MessageBox'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import moment from 'moment'

import { httpService, authService } from './services'
import ErrorBoundary from './components/ErrorBoundary'
import PageWrapper from './components/PageWrapper'
import DatePicker from './components/DatePicker'
import UtilityCard from './components/UtilityCard'
import UtilityCardMenu from './components/UtilityCardMenu'
import UtilityCardSearchBar from './components/UtilityCardSearchBar'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.prototype.$http = httpService
Vue.prototype.$auth = authService

Vue.component('ErrorBoundary', ErrorBoundary)
Vue.component('PageWrapper', PageWrapper)
Vue.component('DatePicker', DatePicker)
Vue.component('UtilityCard', UtilityCard)
Vue.component('UtilityCardMenu', UtilityCardMenu)
Vue.component('UtilityCardSearchBar', UtilityCardSearchBar)

moment.locale('id')

new Vue({
  router,
  store,
  render: h => h(App),

  created () {
    document.title = process.env.VUE_APP_APP_NAME

    try {
      authService.refresh()
    } catch (err) {
      // Do nothing :))
    }
  }
}).$mount('#app')
