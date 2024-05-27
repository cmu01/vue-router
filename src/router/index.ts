import { createRouter, createWebHistory } from "vue-router";

// 约束元数据类型
declare module 'vue-router' {
    interface RouteMeta {
        title: string
    }
}

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: (to, from, savePosition) => { // 切换页面记录scroll位置
        // 也可以手写指令

    },
    routes: [
        {
            path: '/home',
            name: "Home",
            component: () => import('../components/Home.vue'),
            meta: { // 源信息
                title: 'Home page',
                transition: 'animate__bounceIn' // 结合animate.css 实现动态效果
            },
            children: [ // 显示在Home.vue里
                {
                    path: 'group',
                    name: "Group",
                    meta: { // 源信息
                        title: 'Group page'
                    },
                    components: { //命名视图， 必须使用coponents
                        default: () => import('../components/Group.vue'),
                        ddd: () => import('../components/Dashboard.vue')
                    }
                },
                {
                    path: 'user/:id',
                    name: "User",
                    components: {
                        default: () => import('../components/User.vue'),
                        ddd: () => import('../components/Session.vue')
                    }
                },
                {
                    path: 'session/:id',
                    name: "Session",
                    meta: { // 源信息
                        title: 'About Page',
                        transition: 'animate__backOutDown'
                    },
                    component: () => import('../components/Session.vue')
                }
            ]
        },
        {
            path: '/about',
            name: "About",
            component: () => import('../components/About.vue')
        }

    ]
})

export default router