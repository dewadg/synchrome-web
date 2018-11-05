import Vue from 'vue'
import MessageBox from './components/MessageBox'

const Plugin = {
  install (target, options) {
    target.prototype.$confirm = (
      title = 'Are you sure?',
      description = 'Are you sure want to do this?',
      okCallback,
      cancelCallback = () => {}
    ) => {
      const msgBox = new MessageBox()

      msgBox.$mount(this.$el)
      msgBox.show(title, description)

      msgBox.$on('ok', okCallback)
      msgBox.$on('cancel', cancelCallback)
    }
  }
}

Vue.use(Plugin)
