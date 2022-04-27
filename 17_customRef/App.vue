<template>
  <input type="text" v-model="keyWord" />
  <h4>{{ keyWord }}</h4>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    //自定义一个ref名为myRef
    function myRef(value,delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef读取了数据,我把${value}给他了`);
            track();
            return value;
          },
          set(newValue) {
             console.log(`有人把myRef数据改为了${newValue}`);
             clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //通知Vue重新解析模板
            }, delay);
          },
        };
      });
    }
    // let keyWord = ref('hello')//使用vue提供的ref
    let keyWord = myRef("hello",500); //使用程序员自定义的ref
    return {
      keyWord,
    };
  },
};
</script>

<style>
</style>
