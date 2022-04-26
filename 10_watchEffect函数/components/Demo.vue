<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr />
  <h2>当前信息为:{{ message }}</h2>
  <button @click="message += '!'">点我修改</button>
  <hr />
  <h2>当前名字为:{{ person.name }}</h2>
  <h2>当前年龄为:{{ person.age }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <hr />
  <h2>当前薪资为:{{ person.job.j1.salary }}W</h2>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, watch, reactive , watchEffect} from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let message = ref("你好"); 
    let person = reactive({
      name: "何子琪",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    //监视
    /* watch(sum,(nV,oV)=>{
      console.log(`sum改变了`,nV,oV);
    },{}) */
    watchEffect(()=>{
      const s1 = sum.value
      const s2 = message.value
      const s3 = person.job.j1.salary
      console.log(`watchEffect所指定的回调触发了`);
    })
    return {
      sum,
      message,
      person,
    };
  },
};
</script>

<style>
</style>
