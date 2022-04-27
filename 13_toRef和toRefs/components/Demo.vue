<template>
  <h2>当前名字为:{{ name }}</h2>
  <h2>当前年龄为:{{ age }}</h2>
  <h2>当前薪资为:{{ job.j1.salary }}W</h2>
  <hr>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive , toRef ,toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let person = reactive({
      name: "何子琪",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // const name1 = person.name
    // console.log(name1);

    // const name2 = toRef(person,'name')
    // console.log(name2);

    // const x = toRefs(person)
    // console.log(x);

    return {
      //不能使用ref()，会导致setup中数据不能变化
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary')

      ...toRefs(person)
    };
  },
};
</script>

<style>
</style>
