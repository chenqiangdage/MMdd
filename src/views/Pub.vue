<template>   
<div >      
<div class="top-warp">
<div class="nav">
<div :class="{'active':tabType==1}" @click="changeTab(1)">发布供应</div>
<div :class="{'active':tabType==2}" @click="changeTab(2)">发布求购</div>
</div>


</div>     
<div class="contentpubsupport">
    <transition name="scale">
      <div v-show="tabType == 1">  
       
      <pubSupportInfo></pubSupportInfo>

      </div>
    </transition>

    <transition name="scale">
      <div v-show="tabType == 2">
       
    <pubDemandInfo></pubDemandInfo>

      </div>
    </transition>
  </div>
</div>
   
</template>
<script> 
import pubSupportInfo from '../components/pubSupportInfo'
import pubDemandInfo from '../components/pubDemandInfo'
export default {
    data(){
        return {       
            tabType:1
        }
    },
    components: {  
        pubSupportInfo,pubDemandInfo
  },
    methods:{
        changeTab(tag){
               this.tabType =   tag; 
        }
    }
}
</script>
 <style  scoped>
  .top-warp{
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: white;
  }
  .top-warp .head{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .top-warp  .head .btn-left {
    position: absolute;
    top: 0;
    left: 0;
    padding: 12px;
    line-height: 22px;
  }
  .top-warp .tip{
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  .top-warp .nav{
    text-align: center;
    height: 40px;
    background: white;
  }
  .top-warp .nav > div{
    display: inline-block;
    width: 22%;
    line-height: 36px;
    font-size: 14px;
  }
  .top-warp .nav .active{
    border-bottom: 1px solid #FF6990;
    color: #FF6990;
  }
 .contentpubsupport{
     position:relative;
     top:40px;
 }

     .scale-enter, .scale-leave-to {
      transform: scale(0)
    }
    .scale-leave, .scale-enter-to {
      transform: scale(1)
    }
    .scale-enter-active, .scale-leave-active {
      transition: all .2s
    }
 </style>
 