import Vue from 'vue'
import MessageBox from './components/MessageBox'

const Plugin = {
  install (target) {
    target.prototype.$confirm = (
      title = 'Are you sure?',
      description = 'Are you sure want to do this?',
      okCallback,
      cancelCallback = () => {}
    ) => {
      const Component = Vue.extend(MessageBox)
      const msgBox = new Component()

      msgBox.$mount(this.$el)
      msgBox.show(title, description)

      msgBox.$on('ok', () => {
        okCallback()
        msgBox.$destroy()
      })
      msgBox.$on('cancel', () => {
        cancelCallback()
        msgBox.$destroy()
      })
    }
  }
}

Vue.use(Plugin)
