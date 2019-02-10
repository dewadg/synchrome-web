import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import './plugins/font-icon'
import './plugins/vuetify'
import './plugins/vuelidate'
import './plugins/messageBox'
import './plugins/moment'
import './plugins/components'
import './plugins/services'

Vue.config.productionTip = false

new Vue({
  router,
  store,

  created () {
    document.title = process.env.VUE_APP_APP_NAME
  },
  render: h => h(App)
}).$mount('#app')
