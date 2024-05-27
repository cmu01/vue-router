<template>
  <fieldset id="parentFiledSet"> 
    <h5>Router Test</h5>
    <div>
      <router-link :to="{name: 'Home'}">Home</router-link>
      <div>
        <router-link :to="{name: 'Group'}">Group</router-link>
        <!-- <router-link to='/home/user'>User</router-link>
        <router-link to='/home/session'>Session</router-link> -->
        <button v-for="item in routers" @click="goto(item)">
          {{ item.name }}

        </button>
        <!-- <button @click="goto({id: 3, name: 'User'})">User</button>
        <button @click="goto('Session')">Session</button> -->
      </div>
      <router-link :to="{name: 'About'}">About</router-link>
    </div>
    <div>
      <!-- 动态效果 -->
      <router-view #default="{route, Component}">
        <transition :enter-active-class="`animate_animated ${route.meta.transition}`">
          <component :is="Component"></component>
        </transition>

      </router-view>
    </div>  
  </fieldset>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import 'animate.css'

const routers = ref([
  // {
  //   id: 1,
  //   name: 'Group'
  // },
  {
    id: 2,
    name: 'User'
  },
  {
    id: 3,
    name: 'Session'
  }
])

const router = useRouter()
const goto = (obj: any) => {
  router.push({
    name: obj.name, 
    params: {
      id: obj.id
    }
  })
}

onMounted(() => {
  //  动态添加路由
  router.addRoute({
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./components/Dashboard.vue')
  })

  router.push({
    name: 'Dashboard'
  })

  console.log(router.getRoutes())
})

</script>
<style scope lang='scss'>
html, body, #app, #parentFiledSet {
  width: 100%;
  height: 100%;
}

a {
  margin-right: .75rem;
  border: 1px solid greenyellow;
}



</style>