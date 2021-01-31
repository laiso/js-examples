import Vue2 from 'vue'
import * as Vue3 from 'vue3'

window.onload = () => {
  const App2 = Vue2.extend({
    name: 'App2',
    data() {
      return {message: 'Vue 2!'}
    },
    template: `<p>Hello {{message}}</p>`,
    created() {
      console.log(`created v2`)
    }
  })
  const app2 = new Vue2({
    components: {App2},
    template: `<App2 />`,
  })
  app2.$mount('#vue2')

  const App3 = {
    data() {
      return {message: 'Vue 3!'}
    },
    template: `<p>Hello {{message}}</p>`,
    created() {
      console.log(`created v3`)
    }
  }
  Vue3.createApp(App3).mount('#vue3')
}

