<template>
  <h1>帅哥的信息</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1>{{ job.type }}</h1>
  <h1>{{ job.salary }}</h1>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup(props) {
    //数据
    let name = ref("何子琪");
    let age = ref(21);
    let job = ref({
      type: "前端工程师",
      salary: "30K",
    });
    //方法
    function changeInfo() {
      name.value = "王思颖";
      age.value = 20;
      job.value.type="后端工程师"
      job.value.salary="10K"
      console.log(name, age);
    }
    //返回一个对象
    return {
      name,
      age,
      changeInfo,
      job,
    };
  },
};
</script>

<style>
</style>
