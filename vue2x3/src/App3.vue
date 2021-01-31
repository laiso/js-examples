<template>
  <p>Hello {{ message }}</p>
</template>

<script>
import {defineComponent} from 'vue3'

export default defineComponent({
  name: 'app3',
  data() {
    return {message: 'Vue 3!'}
  },
  created() {
    console.log(`created v3`)
  }
})
</script>
