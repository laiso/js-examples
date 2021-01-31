<template>
  <p>Hello {{message}}</p>
</template>

<script>
import Vue2 from "vue";

export default Vue2.extend({
  name: 'app2',
  data() {
    return {message: 'Vue 2!'}
  },
  created() {
    console.log(`created v2`)
  }
})
</script>
