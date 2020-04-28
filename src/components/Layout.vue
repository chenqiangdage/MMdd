<template>
     <div id="app">   
     <div style=""></div>  
       <div style="">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>    
      </div>
      <FootBar></FootBar>  
      </div>
</template>
<script>
// 禁止手机端扩大和缩小手势
window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}

</script>
<script>
 import FootBar from './FootBar'
 import IndexHead from './IndexHead'
 import ScrollImg from './ScrollImg'

export default {
    vuex: {
        getters: {
             
        },
        actions: {
            
        }
    },
    methods:{
        
    },
    components:{FootBar,IndexHead,ScrollImg},
    props: {},
    data() {
        return {
           
        }
    },   
}
</script>