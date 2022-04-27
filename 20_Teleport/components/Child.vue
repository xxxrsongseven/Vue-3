<template>
  <div class="app1">
    <h3>我是Child组件(子)</h3>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  components: { Son },
};
</script>

<style>
.app1 {
  background-color: orange;
  padding: 10px;
}
</style>