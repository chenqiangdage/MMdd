<template>
    <div>
        <van-button round block type="primary" @click ="sumularLogin">
        模拟登陆
        </van-button>
         <van-button round block type="danger" @click ="sumularLoginOut">
        模拟登出
        </van-button>
    </div>
</template>
<script>
import Vue from 'vue'
import {Button} from 'vant'
import {  mapActions } from 'vuex'

export default {
    methods:{
         ...mapActions(['syncuserInfo']),
         ...mapActions(['LoginOut']),
        sumularLogin(){
            var obj =new Object();
            obj.token = "token";
            obj.user_name ="chenqiangdages";
            obj.sex ="1";    
            obj.vipLevel = "普通会员";
            obj.UserCode = "785531"
            console.log("in login button");
            console.log(obj.token);
             this.syncuserInfo(obj);
              this.$router.back();
        },
        sumularLoginOut(){
       this.LoginOut();
        }
    }
}
</script>