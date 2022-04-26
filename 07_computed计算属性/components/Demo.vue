<template>
  <h1>帅哥的信息</h1>
<input type="text" v-model="person.firstName">
<br>
<input type="text" v-model="person.lastName">
<h1>{{person.fullName}}</h1>
<input type="text" v-model="person.fullName">
</template>

<script>
import { reactive ,computed } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let person = reactive({
      firstName: "何",
      lastName:"子琪",
    });
    //计算属性简写（只读不改）
    /* person.fullName= computed(()=>{
      return person.firstName+'-'+person.lastName
    }) */
    ////计算属性完整写法（可读可改）
    person.fullName= computed({
      get(){
        return person.firstName+'-'+person.lastName
      },
      set(value){
        let arr = value.split('-')
        person.firstName= arr[0]
        person.lastName= arr[1]
      }
    })
    //返回一个对象
    return {
      person,
    };
  },
};
</script>

<style>
</style>
