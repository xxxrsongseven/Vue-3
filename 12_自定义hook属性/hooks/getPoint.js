import { reactive, onMounted, onBeforeUnmount } from "vue";
export default function(){
  //实现鼠标打点的数据
    let point = reactive({
        x: 0,
        y: 0,
      });
      //实现鼠标打点的方法
      function getMouse(event) {
        point.x = event.pageX;
        point.y = event.pageY;
      }
  //实现鼠标打点的钩子
      onMounted(() => {
        window.addEventListener("click", getMouse);
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener("click", getMouse);
      });
  return point
}