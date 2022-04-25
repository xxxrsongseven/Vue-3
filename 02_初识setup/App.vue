<template>
  <h1>帅哥的信息</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1>{{ sex }}</h1>
  <button @click="sayHello()">Vue3所配置的----sayHello</button>
  <button @click="sayWelcome()">Vue2所配置的----sayWelcome</button>
  <button @click="test1()">测试从Vue2配置中读取Vue3中配置</button>
  <button @click="test2()">测试从Vue3配置中读取Vue2中配置</button>
</template>

<script>
// import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    sayWelcome() {
      alert("welcome!");
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      this.sayHello();
      this.sayWelcome();
    },
  },
  //此处只是测试setup不考虑响应式
  setup(props) {
    //数据
    let name = "何子琪";
    let age = 21;
    //方法
    function sayHello() {
      alert(`我叫${name},今年${age}岁了,你好啊！`);
    }
    function test2() {
      console.log(this.name);
      console.log(this.age);
      this.sayHello();
      console.log(this.sex);
      console.log(this.sayWelcome);
    }
    //返回一个对象(常用)
    return {
      name,
      age,
      sayHello,
      test2
    };
    //返回一个函数(渲染函数)
    // return ()=> h('h1','啦啦啦')
  },
};
</script>

<style>
</style>
