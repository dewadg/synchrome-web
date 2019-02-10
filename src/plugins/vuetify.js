import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/main.styl'

Vue.use(Vuetify, {
  customProperties: true,
  iconfont: 'md',
  theme: {
    primary: '#00695c',
    accent: '#439889'
  }
})
