//引入的不再是VUE构造函数了,引入的是名为creatApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象——app(类似vue2里的vm，但比vm更轻)
const app = createApp(App)
//挂载
app.mount('#app')

/* const vm = new Vue({
    render:h=>h(App)
})
vm.$mount('#app') */