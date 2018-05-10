<template>
  <div>
    {{ aboutText }}
    <button v-on:click="getCount">Update Counter</button>
  </div>
</template>
<script>
  import axios from "axios";

  export default {
    data() {
      return {
        aboutText: 0
      };
    },
    mounted() {

    },
    methods: {
      getCount: function(){
        var vm = this;
        axios({method: "GET", "url": "/api/counter"}).then(result => {
          debugger
          vm.aboutText = result.data.counter;
        }, error => {
          vm.aboutText = error;
        })
      }
    }
  };
</script>
