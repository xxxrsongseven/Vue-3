<template>
<Demo @hello="showHello" name="wsy" message="123">
  <template v-slot:nihao>
    <div>
      你好
    </div>
  </template>
</Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components:{Demo},
  setup(){
    function showHello(value){
      alert(`我是APP收到${value}`)
    }
      return {
    showHello
  }
  },

};
</script>

<style>
</style>
