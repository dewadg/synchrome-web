import Vue from 'vue'
import {
  httpService,
  authService
} from '@/services'

Vue.prototype.$http = httpService
Vue.prototype.$auth = authService
