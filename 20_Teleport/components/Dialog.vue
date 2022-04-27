<template>
  <div>
    <button @click="open">点我弹窗</button>
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div  class="dialog">
          <h3>我是一个弹窗</h3>
          <h4>内容</h4>
          <h4>内容</h4>
          <h4>内容</h4>
          <h4>内容</h4>
          <button @click="close">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isShow = ref(false);
    console.log(isShow);
    function open() {
      isShow.value = true;
    }
    function close() {
      isShow.value = false;
    }
    return { isShow, open, close };
  },
};
</script>

<style>
.mask{
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
    position: absolute;
    top: 50%;
    left: 50%;
transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  text-align: center;
  background-color: green;
}
</style>