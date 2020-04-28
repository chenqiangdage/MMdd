<template>
  <div id="ScrollImg" v-bind:style="{height:height+'px'}">
    <div class="ScrollImg" ref="ScrollImg" v-bind:style="{height:height+'px'}" >
      <transition-group tag="ul" class="mslide clearfix"  :name="transitionName" >
        <li v-for="(item,index) in slideData" :key="index" v-show="index==beginValue" v-bind:style="{height:height+'px'}" >

        
          <router-link :to="item.url" v-if="isLink">
            <img v-lazy="item.src" v-bind:style="{height:height+'px'}">
            <div v-if="scrollTitle" class="title">{{item.title}}</div>
          </router-link>
          <div v-if="!isLink">
              <img v-lazy="item.src" v-bind:style="{height:height+'px'}" v-if="!isClick" >
            <img v-lazy="item.src" v-bind:style="{height:height+'px'}" v-if="isClick" @click="imgClick">
            <div v-if="scrollTitle" class="title">{{item.title}}</div>
          </div>
        </li>
      </transition-group>
        <van-icon name="arrow-left"   v-bind:class="upclass" @click="up" v-show="arrow" />
      <van-icon name="arrow" v-bind:class="nextclass" @click="next" v-show="arrow" />
      <!-- <div  v-bind:class="upclass" @click="up" v-show="arrow"></div>
      <div v-bind:class="nextclass" @click="next" v-show="arrow"></div> -->
      <div v-bind:class="slideDotclass" v-show="dot">
        <span v-for="(item,index) in slideData" :class="{active:index==beginValue}" @click="change(index)" :key="index"></span>
      </div>
    </div>
 
  </div>
</template>
 
<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Icon);
  export default {
    name: "ScrollImg",
    data(){
      return{
        setInterval:'',
        beginValue:0,
        transitionName:'mslide'
      }
    },
    beforeDestroy() {
      // 组件销毁前,清除监听器
      clearInterval(this.setInterval);
    },
    methods:{
      imgClick(){
          if(this.ClickMethod)
          {
              this.ClickMethod();
          }else
          {
            Toast('调用自己的click方法');
          }
      },
      change(key){
        if(key>(this.slideData.length-1)){
          key=0;
        }
        if(key<0){
          key=this.slideData.length-1;
        }
 
 
        this.beginValue=key;
      },
      autoPlay(){
        //console.log(this.$refs.ScrollImg.getBoundingClientRect().width);
        this.transitionName='mslide';
        this.beginValue++
        if(this.beginValue>=this.slideData.length){
          this.beginValue=0;
          return;
        }
      },
      play(){
        this.setInterval=setInterval(this.autoPlay,this.interval)
      },
      mouseOver(){ //鼠标进入
        //console.log('over')
        clearInterval(this.setInterval)
      },
      mouseOut(){ //鼠标离开
        //console.log('out')
        this.play()
      },
      up(){ //上一页
        --this.beginValue;
        this.transitionName='mslideBack';
        this.change(this.beginValue);
 
      },
      next(){ //下一页
        ++this.beginValue;
        this.transitionName='mslide';
        this.change(this.beginValue);
      }
 
    },
    mounted(){
      var box = this.$refs.ScrollImg; //监听对象
      box.addEventListener('mouseover',()=>{
        this.mouseOver();
      })
      box.addEventListener('mouseout',()=>{
        this.mouseOut();
      })
      this.beginValue=this.begin;
      this.play();
 
    },
    props:{
      isLink:{
        type:Boolean,
        default:true
      },
      isClick:{
        type:Boolean,
        default:false
      },
      ClickMethod:{
        type:Function,
        default:null
      },
      height:{
        type: Number,
        default: 600
      },
      dot:{
        type: Boolean,
        default: true
      },
      scrollTitle:{
        type:Boolean,
        default:true
      },
      arrow:{
        type: Boolean,
        default: true
      },
      interval:{
        type: Number,
        default: 5000
      },
      begin:{
        type: Number,
        default: 0
      },
      slideData:{
        type: Array,
        default: function () {
          return [];
        }
      },
      upclass:{
        type:String,
        default:"up"
      },
      nextclass:{
        type:String,
        default:"next"
      },
      slideDotclass:{
        type:String,
        default:"slideDot"
      }

    }
  }
</script>
 
<style  >
 
  .mslide{position: relative;margin: 0;padding: 0; overflow: hidden;width: 100%; height:100%;}
  .mslide li{list-style: none;position: absolute;width: 100%; height:100%;}
  .mslide li img{width: 100%; height:100%;cursor:pointer}
  .mslide li .title{position: absolute; left:0; bottom: 10px; padding: 1px 0px; width: 100%; background: rgba(0,0,0,.35);color: #fff;font-size: small; text-align: center}
 
  .slideDot{position: absolute;z-index: 999;top:75px;right:15px; }
  .slideDot span{display: inline-block; width: 20px; height: 6px; background:rgba(255,255,255,.65); margin-left: 5px;}
  .slideDot span.active{background:rgba(255,255,255,1);}
  .up{position: absolute; left:10px;   top:30px; cursor: pointer;  width:30px;height: 20px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .next{position: absolute; right:10px;   top:30px; cursor: pointer;  width:30px;height: 20px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .up{color:white; }
  .next{color:white ;}
  .up:hover{background-color: rgba(0,0,0,.3)}
  .next:hover{background-color: rgba(0,0,0,.3)}
 
 
  /*进入过渡生效时的状态*/
  .mslide-enter-active{
    transform:translateX(0);
    transition: all 1s ease;
  }
 
  /*进入开始状态*/
  .mslide-enter{
    transform:translateX(-100%);
  }
 
  /*离开过渡生效时的状态*/
  .mslide-leave-active{
    transform:translateX(100%);
    transition: all 1s ease;
  }
 
  /*离开过渡的开始状态*/
  .mslide-leave{
    transform:translateX(0);
  }
 
  /*进入过渡生效时的状态*/
  .mslideBack-enter-active{
    transform:translateX(0);
    transition: all 1s ease;
  }
 
  /*进入开始状态*/
  .mslideBack-enter{
    transform:translateX(100%);
  }
 
  /*离开过渡生效时的状态*/
  .mslideBack-leave-active{
    transform:translateX(-100%);
    transition: all 1s ease;
  }
 
  /*离开过渡的开始状态*/
  .mslideBack-leave{
    transform:translateX(0);
  }
 
</style>