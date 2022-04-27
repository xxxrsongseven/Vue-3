<template>
  <div class="app">
    <h3>我是APP组件(祖)</h3>
      <Suspense>
        <template v-slot:default>
          <Child />
        </template>
        <template v-slot:fallback>
          <h3>稍等~~~~加载中</h3>
        </template>
      </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue"; //静态引入
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue')) //动态引入（异步）
export default {
  components: { Child },
};
</script>

<style>
.app {
  background-color: pink;
  padding: 10px;
}
</style>