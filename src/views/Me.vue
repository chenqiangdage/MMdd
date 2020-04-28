<template>
    <div id="mine">
          <!-- <van-nav-bar title="me"
                 :fixed=true
                 :border=false
                 style="height:2.5rem" /> -->
          <!-- 已登录状态 -->
        <van-cell-group  >
      <van-cell style="background-color: #3bba63;color:#FFF;"
                label-class="labelClass"
                is-link
                center>
        <template slot="title">
          <!-- 已登录状态 -->
          <div class="personMsg"
               v-if="userInfo.token"
               @click="goToPage('userCenter')">
            <img class="iconImage"
                 :src="user_image.login_icon"
                 alt="">
            <div class="sex"
                 v-if="userInfo.sex">
              <img :src="userInfo.sex=='1'?user_image.female:user_image.male"
                   alt="">
            </div>
            <div class="personInfo"
                 v-if="userInfo.token">
               <span>{{userInfo.UserCode}}</span>
               <span>{{userInfo.user_name}}</span>
                <span>{{userInfo.vipLevel}}</span>
              <span>电话：12345678912</span>
            </div>
          </div>
          <!-- 未登录状态 -->
          <div class="personMsg"
               v-if="!userInfo.token">
            <img class="iconImage"
                 :src="user_image.noLogin_icon"
                 alt="">
            <div class="personInfo"
                 v-if="!userInfo.token">
              <div @click="goToPage('login')">登陆</div>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
     <van-divider :style="{ color: '#1989fa',margin:'3px 0', padding: '0 16px' }"/>
     <van-cell-group  >
          <van-cell-group>
               <van-cell title="我的钱包" value="积分商城" label="积分88/奖金8.00" label-class="wodeqianbaolabel"  is-link
                         @click="goTomyOrder(-1)"/>
          </van-cell-group>
      <!-- <van-grid :border=false>
        <van-grid-item v-for="(order,index) in orderData"
                       :key="index"
                       :icon="order.icon"
                       :text="order.title"
                       @click="goTomyOrder(index)" />
      </van-grid> -->
      <van-grid :column-num="4">
          <van-grid-item icon="cart-o" text="订单" info="1" />
          <van-grid-item icon="gift-card-o" text="积分" info="" />
          <van-grid-item icon="gold-coin-o" text="奖金" info="" />
          <van-grid-item icon="flower-o" text="名片" info="" />
     </van-grid>
    </van-cell-group>
    <van-divider :style="{ color: '#1989fa',margin:'3px 0', padding: '0 16px' }"/>

     <van-cell-group>
               <van-cell title="我的苗店"   label-class="wodeqianbaolabel"  is-link
                         @click="goTomyOrder(-1)"/>

     <van-grid :column-num="4">
          <van-grid-item icon="friends-o" text="实名认证" info="1" />
          <van-grid-item icon="balance-list-o" text="企业认证" info="" />
          <van-grid-item icon="smile-o" text="来访苗友" info="+6" />
          <van-grid-item icon="todo-list-o" text="浏览记录" info="+1" />
     </van-grid>
      <van-grid :column-num="4">
          <van-grid-item icon="logistics" text="供应" info="1" />
          <van-grid-item icon="cart-circle-o" text="求购" info="" />
          <van-grid-item icon="chart-trending-o" text="报价" info="" />
          <van-grid-item icon="good-job-o" text="推荐" info="+1" />
     </van-grid>
     </van-cell-group>

      <van-divider :style="{ color: '#1989fa',margin:'3px 0', padding: '0 16px' }"/>

       <van-cell-group>
               <van-cell title="会员服务"   label-class="wodeqianbaolabel"  is-link
                         @click="goTomyOrder(-1)"/>
          <van-grid :column-num="3">
               <van-grid-item icon="medal-o" text="黄金会员" info="惠" style="color:#CD7F32" />
               <van-grid-item icon="diamond-o" text="钻石会员" info="" style="color:#1989fa" />
               <van-grid-item icon="gem-o" text="皇冠会员" info="" style="color:yellow"/>
     </van-grid>
        <van-grid :column-num="3">
          <van-grid-item icon="phone-o" text="企业彩铃" info="hot" />
          <van-grid-item icon="location-o" text="地图标注" info="hot" />
          <van-grid-item icon="send-gift-o" text="商标注册" info="" />
         
     </van-grid>
        </van-cell-group>

         <van-divider :style="{ color: '#1989fa',margin:'3px 0', padding: '0 16px' }"/>
          <van-cell-group>
               <van-cell title="联系我们"   label-class="wodeqianbaolabel"   
                         />
         
        <van-cell icon="phone" title="统一热线" value="400-011-6655" />
        <van-cell icon="service"  title="官方客服微信" value="17713348888" />
        </van-cell-group>
</div>
    
</template>
<script>
import Vue from 'vue';
import {mapState} from 'vuex';
import {getLocalStore}   from '../config/global'
import {USER_INFO} from '../store/mutation-type'
import { NavBar } from 'vant';
import { Grid, GridItem } from 'vant';
import { Col, Row } from 'vant';
import { Divider } from 'vant';

Vue.use(Divider);
Vue.use(Col);
Vue.use(Row);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar); 
  
import clogin_icon from '../assets/images/mine/defaultImg.jpg'
import cnoLogin_icon from '../assets/images/login/grey.jpg'
import cfemale from  '../assets/images/mine/female.png'
import cmale from '../assets/images/mine/male.png'

export default {
     data(){
          return {
               user_image: {
               login_icon:clogin_icon,
               noLogin_icon:cnoLogin_icon, 
               female:cfemale, 
               male: cmale 
                },
                  // 订单状态
               // orderData: [
               // { icon: 'cart-circle-o', title: '购物车' },
               // { icon: 'gift-o', title: '积分' },
               // { icon: 'smile-comment-o', title: 'mine.itemsTitle[3]' },
               // { icon: 'cash-back-record', title: 'mine.waitingFeedback' }
               // ],
                // 
                userInfo : JSON.parse(getLocalStore(USER_INFO))
               
          }
     },
     computed:{     
    },
    methods:{
         goToPage()
         {
              console.log(this.userInfo);
         },
           goTomyOrder (index) {
          if (index !== 3) {
          return this.$router.push({ name: "myOrder", params: { active: index + 1 } });
          }
          // 跳转到售后退款界面
          Toast({
          message: this.$t('mine.unrealized'),
          duration: 1500
          })
          },
    }

}
</script>

<style lang="less" scoped>

#mine {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 3rem;
  .version {
    margin: 0 auto;
    text-align: center;
    font-size: 0.6rem;
    background-color: #ffffff;
    height: 2rem;
    color: grey;
    line-height: 2rem;
  }
  .van-nav-bar {
    background-color: #3bba63;
    font-size: 0.6rem;
  }
  .van-nav-bar__title {
    color: white;
  }
  .personMsg {
    display: flex;
    align-items: center;
    .sex {
      position: absolute;
      top: 3.5rem;
      left: 3.8rem;
      width: 0.1rem;
      height: 0.1rem;
      img {
        width: 1rem;
        height: 1rem;
      }
    }
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    .personInfo {
      display: flex;
      flex-direction: column;
      margin-left: 0.8rem;
    }
  }
.wodeqianbaolabel{
 font-size: 16px;
 color:red;    
}
  .van-cell__left-icon {
    color: #45c763;
    font-size: 1.2rem;
  }
  /*转场动画*/
  .router-slider-enter-active,
  .router-slider-leave-active {
    transition: all 0.3s;
  }

  .router-slider-enter,
  .router-slider-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
}
</style>
