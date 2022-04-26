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
import { ref, watch, reactive } from "vue";
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
    //情况一：监视ref所定义的一个响应式数据  watch(监视对象,监视方法,监视配置)
    /*     watch(sum,(newValue,oldValue)=>{
      console.log(`sum值变化了`,newValue,oldValue);
    },{immediate:true}) */
    //情况二：监视ref所定义的多个响应式数据
    /*      watch([sum,message],(newValue,oldValue)=>{
      console.log(`值变化了`,newValue,oldValue);
    },{immediate:true}) */
    /*情况三：剑是reactive所定义的一个响应式数据的全部属性
        注意1.此处无法获取正常oldValue
        注意2.deep:true不能关闭*/
    /* watch(person, (newValue, oldValue) => {
      console.log(`person变化了`, newValue, oldValue);
    },{deep:true});//此处deep配置无效 */
    //情况四：监视reactive所定义的一个响应式数据中的某个属性
    /*  watch(()=>person.age, (newValue, oldValue) => {
      console.log(`person的age变化了`, newValue, oldValue);
    }); */
    //情况五：监视reactive所定义的一个响应式数据中的某些属性
    /* watch([()=>person.age,()=>person.name], (newValue, oldValue) => {
      console.log(`person的age变化了`, newValue, oldValue);
    }); */
    //特殊情况
     watch(()=>person.job, (newValue, oldValue) => {
      console.log(`person的job变化了`, newValue, oldValue);
    },{deep:true});//此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效
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
