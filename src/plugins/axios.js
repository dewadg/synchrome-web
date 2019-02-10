import axios from 'axios'
import router from '@/router'

axios.interceptors.response.use(
  (response) => {
    // Do nothing for now
  },
  (err) => {
    console.log(err)
    if (err.response.status === 401) {
      router.push({ name: 'login' })
    }
  }
)
