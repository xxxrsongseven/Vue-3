<template>
  <h1>帅哥的信息</h1>
  <h1>{{ person.name }}</h1>
  <slot name="nihao"></slot>
  <h1>{{ person.age }}</h1>
  <button @click="test">测试触发demo组件hello事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  beforeCreate(){
      console.log('--------beforeCreate----------');
  },
  props:['name','message'],
  emits:['hello'],
  setup(props,context) {
      console.log('--------setup执行在beforeCreate前----------');
      console.log('this:',this,props);
      console.log(context);
      console.log(context.attrs);
      console.log(context.slots);
      console.log(context.emit);
    //数据
    let person = reactive({
      name: "何子琪",
      age: 21,
    });
    function test(){
        context.emit('hello',666)
    }
    //返回一个对象
    return {
      person,
      test
    };
  },
};
</script>

<style>
</style>
