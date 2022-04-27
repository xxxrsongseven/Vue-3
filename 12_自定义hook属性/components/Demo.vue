<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr />
  <h2>当前点击鼠标的坐标是X:{{ point.x }}Y:{{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from '../hooks/getPoint'
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let point = usePoint()
    return {
      sum,
      point
    };
  },
};
</script>

<style>
</style>
