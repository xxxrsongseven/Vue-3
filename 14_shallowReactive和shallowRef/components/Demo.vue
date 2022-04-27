<template>
<h1>当前x是{{x.y}}</h1>
<button @click="x={y:999}">点我替换x.y</button>
<button @click="x.y++">点我x.y++</button>
<hr>
  <h2>当前名字为:{{ name }}</h2>
  <h2>当前年龄为:{{ age }}</h2>
  <h2>当前薪资为:{{ job.j1.salary }}W</h2>
  <hr>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive , ref , toRef ,toRefs , shallowReactive , shallowRef} from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    // let person = shallowReactive({ //只考虑第一层响应式数据
    let person = reactive({
      name: "何子琪",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // let x = shallowRef(0)
    let x = shallowRef({ y:0})
    console.log(x);
    return {
      x,
      ...toRefs(person)
    };
  },
};
</script>

<style>
</style>
