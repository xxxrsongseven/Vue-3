<template>
  <h1>帅哥的信息</h1>
  <h1>{{ person.name }}</h1>
  <h1>{{ person.age }}</h1>
  <h1>{{ person.job.type }}</h1>
  <h1>{{ person.job.salary }}</h1>
  <h1>{{ person.job.a.b.c }}</h1>
  <h1>{{ person.hobby }}</h1>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup(props) {
    //数据
    let person = reactive({
      name: "何子琪",
      age: 21,
      job: {
        type: "前端工程师",
        salary: "30K",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });
    //方法
    function changeInfo() {
      person.name = "王思颖";
      person.age= 20;
      person.job.type = "后端工程师";
      person.job.salary = "10K";
      person.job.a.b.c = 999;
      person.hobby[0] = "学习";
      console.log(person.job);
    }
    //返回一个对象
    return {
      person,
      changeInfo,
    };
  },
};
</script>

<style>
</style>
