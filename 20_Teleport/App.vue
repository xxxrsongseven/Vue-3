<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  components: { Child },
};
</script>

<style>
.app {
  background-color: pink;
  padding: 10px;
}
</style>