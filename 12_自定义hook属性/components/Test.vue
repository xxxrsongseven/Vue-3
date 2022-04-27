<template>
  <h1>我是Test组件</h1>
  <h2>当前点击鼠标的坐标是X:{{ point.x }}Y:{{ point.y }}</h2>
</template>

<script>
import usePoint from '../hooks/getPoint'
export default {
    name:'Tset',
    setup(){
        let point = usePoint()
        return{point}
    }
}
</script>

<style>

</style>