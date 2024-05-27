<template>
    <fieldset style="background-color:deepskyblue"> 
      <h5>Session page</h5>
      <div>
        <p>{{route.params.id}}</p>
      </div>  
    </fieldset>
  </template>
  
  <script setup lang='ts'>
  import { useRoute } from 'vue-router';

  const route = useRoute()

  // console.log(router.params.id)
  
  </script>
  <style scope lang='scss'>
  
  </style>