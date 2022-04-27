<template>
  <div class="app1">
    <h3>我是Child组件(子)</h3>
    <h4>有一辆：{{ name }}--{{ price }}</h4>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
import { inject, toRefs } from "vue";
export default {
  components: { Son },
  setup() {
    let x = inject("car");
    return { ...toRefs(x) };
  },
};
</script>

<style>
.app1 {
  background-color: orange;
  padding: 10px;
}
</style>