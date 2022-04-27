<template>
  <div class="app">
    <h3>我是APP组件</h3>
  </div>
</template>

<script>
import { ref , reactive , toRefs , readonly , isReactive , isRef , isReadonly , isProxy} from 'vue';
export default {
  setup(){
    let car = reactive({
      name:'benz',
      price:'40w'
    })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum));
    console.log(isReadonly(car2));
    console.log(isReactive(car));
    console.log(isProxy(car));

    return {...toRefs(car),sum , car2}
  }
};
</script>

<style>
.app {
  background-color: pink;
  padding: 10px;
}
</style>