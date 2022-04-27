<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
    <h4>有一辆：{{name}}--{{price}}</h4>
    <Child />
  </div>
</template>

<script>
import { provide, reactive , toRefs } from 'vue';
import Child from "./components/Child.vue";
export default {
  components: { Child },
  setup(){
    let car = reactive({
      name:'benz',
      price:'40w'
    })
    provide('car',car) //给自己的后代组件传递数据
    return {...toRefs(car)}
  }
};
</script>

<style>
.app {
  background-color: pink;
  padding: 10px;
}
</style>