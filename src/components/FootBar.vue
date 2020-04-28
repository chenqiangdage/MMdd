<template>   
  <van-tabbar route>
      <van-tabbar-item replace to="/hall" icon="wap-home">
        大厅
      </van-tabbar-item>
      <van-tabbar-item replace to="/pub" icon="add">
        发布
      </van-tabbar-item>
       <van-tabbar-item replace to="/disc" icon="browsing-history">
        发现
      </van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="manager">
        我的
      </van-tabbar-item>
  </van-tabbar>
</template>
<style>
</style>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  vuex: {
    getters: {},
    actions: {}
  },
  props: {},
  data() {
      return {
      }
  },  
  methods:{
  },
  mounted(){
  } 
}
</script>