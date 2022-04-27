<template>
<h1>当前求和是{{sum}}</h1>
<button @click="sum++">点我sum++</button>
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
import { reactive , ref , toRefs , readonly , shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0)
    let person = reactive({
      name: "何子琪",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // person = readonly(person)
    // person = shallowReadonly(person)
    // sum = readonly(sum)
    // sum = shallowReadonly(sum)
    return {
      sum,
      ...toRefs(person)
    };
  },
};
</script>

<style>
</style>
