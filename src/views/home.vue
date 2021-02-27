<template>
  <div class="home">
    <div class="demo">
      Hello, TJ
    </div>
    <van-button 
      type="primary" 
      size="large"
    >
      大号按钮
    </van-button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'Home',
  components: {
  },
  setup () {
    console.log('ref', ref)
    const route = useRoute() 
    let currentId = ref(0)
    currentId = route.params.id //路由跳转id
    return {
      currentId
    }
  },
  
}
</script>
<style>
.demo {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
</style>

