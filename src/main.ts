import { createApp, createVNode, render } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Loading from './components/loading.vue'

console.log(Loading)
const vNode = createVNode(Loading)
render(vNode, document.body)
console.log(vNode)
const whiteList = ['/']

// 进程守卫 拦截
router.beforeEach((to, from, next) => {
    vNode?.component?.exposed?.startLoading()
    console.log(to)

    document.title = to.meta.title

    next()
    // if(whiteList.includes(to.path) || localStorage.getItem('token')) {
    //     next(to.fullPath)
    // } else {
    //     next('/')
    // }
})

// router.afterEach((to, from) => {
//     setTimeout(() => {
//         vNode?.component?.exposed?.endLoading()
//     }, 2000)
// })

const app = createApp(App);

app.use(router).mount('#app')
