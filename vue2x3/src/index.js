import Vue2 from 'vue'
import * as Vue3 from 'vue3'
import App2 from "./App2.vue";
import App3 from "./App3.vue";

window.onload = () => {
  // const app2 = new Vue2({
  //   components: {App2},
  //   template: `<app2 />`,
  // })
  // app2.$mount('#vue2')

  Vue3.createApp(App3).mount('#vue3')
}

