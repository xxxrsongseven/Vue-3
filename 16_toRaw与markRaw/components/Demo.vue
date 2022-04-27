<template>
<h1>当前求和是{{sum}}</h1>
<button @click="sum++">点我sum++</button>
<hr>
  <h2>当前名字为:{{ name }}</h2>
  <h2>当前年龄为:{{ age }}</h2>
  <h2>当前薪资为:{{ job.j1.salary }}W</h2>
  <h2 v-show="person.car">车:{{person.car}}</h2>
  <hr>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='~'">换车名</button>
  <button @click="person.car.price++">换车价</button>
</template>

<script>
import { reactive , ref , toRefs , toRaw , markRaw } from "vue";
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
  function addCar(){
    let car = {
      name:'benz',
      price:40
    }
    person.car = markRaw(car)
  }

    function showRawPerson(){
       console.log(toRaw(person)); 
    }
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    };
  },
};
</script>

<style>
</style>
