import {reactive} from '@vue/reactivity'
import * as Vue from 'vue'
  ;

(window as any).Vue = Vue
import {watch} from '@vue/runtime-core'
import {createApp} from '@vue/runtime-dom'

import Come from './Come';

const App = {
  setup() {
    watch(() => {
      this.count = 1
    })
  },
  components: [Come],
  template: `
    <come />
    <span>counter: {{ couunt }}</span>
  `,
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    // this.state.count++;
  }
}

createApp().mount(App, document.getElementById('app'))
