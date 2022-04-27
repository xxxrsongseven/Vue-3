<template>
  <div class="app2">
    <h3>我是son组件(孙)</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  name: "Son",
  components:{Dialog}
};
</script>

<style>
.app2 {
  background-color: red;
  padding: 10px;
}
</style>