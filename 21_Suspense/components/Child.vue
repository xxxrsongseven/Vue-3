<template>
  <div class="app1">
    <h3>我是Child组件(子)</h3>
    <h3>{{sum}}</h3>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    let sum = ref(0)
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve({sum})
      }, 1000);
    })
  }
};
</script>

<style>
.app1 {
  background-color: orange;
  padding: 10px;
}
</style>