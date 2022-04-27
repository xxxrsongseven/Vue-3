<template>
  <div class="app2">
    <h3>我是son组件(孙)</h3>
    <h4>有一辆：{{ name }}--{{ price }}</h4>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "Son",
  setup() {
    let car = inject("car");
    return { ...toRefs(car) };
  },
};
</script>

<style>
.app2 {
  background-color: red;
  padding: 10px;
}
</style>