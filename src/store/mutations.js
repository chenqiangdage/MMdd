import {
     USER_INFO
} from './mutation-type'
import {
    setLocalStore,  
} from '../config/global'
import Vue from 'vue'

export default {
     // 7.保存用户信息到本地
     [USER_INFO](state, {
        userInfo
    }) {
        // 7.1 把外界传来的userInfo保存到state中的userInfo
        state.userInfo = userInfo;
        console.log("in mutaiont  ");
        console.log( userInfo.token)
        // 7.2 保存到本地缓存中
       setLocalStore(USER_INFO, state.userInfo);
    },
}