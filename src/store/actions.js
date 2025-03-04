import {USER_INFO} from './mutation-type'
import {getLocalStore,removeLocalStore} from '../config/global'
 
export default {
    // 1.同步用户信息
    syncuserInfo({ commit,}, userInfo) {
        console.log("in action button");
        console.log(userInfo.token);
        commit(USER_INFO, { userInfo});
    },
    LoginOut()
    {
        removeLocalStore(USER_INFO);
    },
    // 2.如果本地存在Token 那么就自动登录
    autoLogin({commit}) {
        // 2.1 从本地获取
        let userInfo = getLocalStore('userInfo');
        if (userInfo) {
            commit(USER_INFO, {userInfo });
        }
    },

    
}