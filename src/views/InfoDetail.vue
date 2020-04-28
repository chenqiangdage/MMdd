<template>
<div style="margin-bottom :50px">
     <ScrollImg :height="300" :begin="0" :interval="3000" 
     :scrollTitle="false" :upclass='"up2"' :nextclass='"next2"' 
     :slideDotclass='"slideDot2"' 
     :dot="true" :arrow="true" :isLink='false' :isClick='true' :ClickMethod="showImg"
      :slideData="tslideData"></ScrollImg>
 <van-divider :style="{ color: '#1989fa',margin:'3px 0', padding: '0 16px' }"/>
      <van-row>
        <van-col span="6"><van-cell title="名称："   /></van-col>
        <van-col span="18"> <van-cell title="紫罗兰"   /></van-col>
    </van-row>
    <van-row>
        <van-col span="6"><van-cell title="米径："   /></van-col>
        <van-col span="18"> <van-cell title="胸径（1.2m量) 25公分"   /></van-col>
    </van-row>
    <van-row>
        <van-col span="6"><van-cell title="高度："   /></van-col>
        <van-col span="16"> <van-cell title="600-800公分"   /></van-col>
    </van-row>
    <van-row>
        <van-col span="6"><van-cell title="冠幅："   /></van-col>
        <van-col span="16"> <van-cell title="400-500公分"   /></van-col>
    </van-row>
    <van-row>
        <van-col span="6"><van-cell title="种植状态："   /></van-col>
        <van-col span="16"> <van-cell title="原生苗"   /></van-col>
    </van-row>
    <van-row>
        <van-col span="6"><van-cell title="数量："   /></van-col>
        <van-col span="16"> <van-cell title="200株"   /></van-col>
    </van-row>
    <van-row>
        <van-col span="6"><van-cell title="价格："   /></van-col>
        <van-col span="16"> <van-cell title="3500.00/株"   /></van-col>
    </van-row>
    <van-row>
        <van-col span="6"><van-cell title="供货地："   /></van-col>
        <van-col span="16"> <van-cell title="河南省南阳县大新村动武组155号"   /></van-col>
    </van-row>
     <van-row>
        <van-col span="6"><van-cell title="是否担保："   /></van-col>
        <van-col span="16"> <van-cell title="否"   /></van-col>
    </van-row>
     <van-row>
        <van-col span="6"><van-cell title="联系电话"   /></van-col>
       
        <van-col span="8"> <van-cell title="144****4444 "   /></van-col>
         <van-col span="6"><van-button round type="info">点击查看</van-button></van-col>
    </van-row>
    <van-divider :style="{ color: '#1989fa',margin:'3px 0', padding: '0 16px' }"/>
    <van-cell>
        <div class="personMsg">
            <img class="iconImage" :src='"../assets/pic1.jpg"' alt="">
            <div class="personInfo" >
               <span>发布人：河南省南阳县大新苗林</span>
               <span>联系电话：18211436586</span>
              <van-button plain type="primary">去他的苗店看看</van-button>
            </div>
              <!-- <div class="personInfo" >
               <span>发布人：</span>
               <span>12121</span>
              <span>电话：12345678912</span>
            </div> -->
          </div>
    </van-cell>

     <van-divider :style="{ color: '#1989fa',margin:'3px 0', padding: '0 16px' }"/>
     <van-cell  icon="location" style="color:green" title-class="hisTitle"  title="他的苗店定位" value="标注我的位置" is-link to="me" value-class="highlineMe"	 ></van-cell>
   <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:380px;" @click="getClickInfo" :scroll-wheel-zoom='true'>
    </baidu-map>
 
</div>
</template>
<script>
import ScrollImg from '../components/ScrollImg'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import Vue from 'vue';
import { Button,ImagePreview,Col, Row ,Divider,Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Divider);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);

Vue.use(ImagePreview);
export default {
    data(){
        return {
             center: {lng: 109.45744048529967, lat: 36.49771311230842},
      zoom: 13,
          tslideData:[{
            title:'这是一个广告',
            src:require('../assets/pic1.jpg'),
            url:'/show/499'
          },
          {
            title:'开会员生意不断',
            src:require('../assets/pic2.jpg'),
            url:'/show/499'

          },
          {
            title:'黄金会员一开，金钱立马来',
            src:require('../assets/pic3.jpg'),
            url:'/show/499'
          },
          {
            title:'开通黄钻，月月有钱',
            src:require('../assets/pic4.jpg'),
            url:'/show/499'
          },
          {
            title:'这是一个Vue轮播图组件',
            src:require('../assets/pic5.jpg'),
            url:'/show/499'
          }]
        }
    },
    comments:{
        BaiduMap
    },
methods:{
    handler ({BMap, map}) {
      var point = new BMap.Point(109.49926175379778, 36.60449676862417)
      map.centerAndZoom(point, 13)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
showImg(){
    var imgs = new Array();
    for(var i =0;i<this.tslideData.length;i++)
    {
        imgs.push(this.tslideData[i].src);
    }
    ImagePreview({
  images: imgs,
  startPosition: 0,
  onClose() {
    // do something
  }
});
}
}
    ,
    components:{
ScrollImg
    }
}
</script>

<style>
  .slideDot2{position: absolute;z-index: 999;top:275px;right:15px; }
  .slideDot2 span{display: inline-block; width: 20px; height: 6px; background:rgba(255,255,255,.65); margin-left: 5px;}
  .slideDot2 span.active{background:rgba(255,255,255,1);}
  .up2{position: absolute; left:10px;   top:130px; cursor: pointer;  width:30px;height: 20px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .next2{position: absolute; right:10px;   top:130px; cursor: pointer;  width:30px;height: 20px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  .up2{color:white; }
  .next2{color:white ;}
  .up2:hover{background-color: rgba(0,0,0,.3)}
  .next2:hover{background-color: rgba(0,0,0,.3)}
 
 .van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 5px 5px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
}
   
   .personMsg {
    display: flex;
    align-items: center;}
   .personMsg .sex {
      position: absolute;
      top: 3.5rem;
      left: 3.8rem;
      width: 0.1rem;
      height: 0.1rem;}
    .personMsg  img {
        width: 1rem;
        height: 1rem;
      }
    
  .personMsg  img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    .personInfo {
      display: flex;
      flex-direction: column;
      margin-left: 0.8rem;
    }
  .highlineMe{
      color: red;font-size: 20px;
  }
  .hisTitle{
      font-size: 20px;
  }
 
</style>