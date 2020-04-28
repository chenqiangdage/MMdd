 
import Vue from 'vue'
import VueRouter from 'vue-router'
import state from './store/state';
import Error from './views/Error'
import Hall from './views/Hall'
import Usercenter from './views/Usercenter' 
import Login from './components/Login' 
import InfoDetail from './views/InfoDetail' 
import Me from './views/Me'
import Pub from './views/Pub'
import Disc from './views/Disc'
import {getLocalStore}   from './config/global'
import {USER_INFO} from './store/mutation-type'
Vue.use(VueRouter)
 
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/',  redirect: 'login' },
        { path: '/error', name: 'error', component: Error },
        { path: '/Usercenter', name: 'Usercenter', component: Usercenter,meta:{  requireAuth: true} },
        { path: '/hall', name: 'hall', component: Hall,meta:{  requireAuth: true} },
        { path: '/me', name: 'me', component: Me ,meta:{  requireAuth: true}},
        { path: '/disc', name: 'disc', component: Disc,meta:{  requireAuth: true} },
        { path: '/pub', name: 'pub', component: Pub ,meta:{  requireAuth: true}},
        { path: '/login', name: 'login', component: Login }, 
        { path: '/InfoDetail', name: 'InfoDetail', component: InfoDetail }
    ]
})

//路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
       
       // console.log("in route filter")
       // 如果仅仅是存在state理，不用本地store起来，页面右键刷新，state就会没有了
       // console.log(state.userInfo.token)
       var strUserInfo = getLocalStore(USER_INFO);
       if(strUserInfo==null){
        next({
            path: '/login'
        });
       }
       let userInfo = JSON.parse(strUserInfo);
        if (userInfo!=null && userInfo.token) {   
            next()
        } else {
            next({
                path: '/login'
            });
        }
    } else {
        next();
    }
})

export default router