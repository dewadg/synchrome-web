import Vue from 'vue'
import './plugins/vue-router'
import './plugins/vuex'
import './plugins/font-icon'
import './plugins/vuetify'
import './plugins/vuelidate'
import './plugins/messageBox'
import './plugins/moment'
import './plugins/components'
import './plugins/tailwind'
import './plugins/services'
import './plugins/serviceWorker'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,

  created () {
    document.title = process.env.VUE_APP_APP_NAME
  },
  render: h => h(App)
}).$mount('#app')
