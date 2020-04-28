<template>
  <div>
    <!--全部-->
    <mescroll-vue ref="mescroll0" v-show="tabType==0" :down="getMescrollDown(0)" :up="getMescrollUp(0)" @init="mescrollInit0">
      <div class="cell-item"
           v-for="(item,index) in tab0.list"
           :key="item.id">
        <img v-lazy="item.image">
        <div class="item-body">
          <div class="item-desc">{{item.name}}</div>
          <div class="item-footer">
            <img class="avatar"
                 v-lazy="item.author_avatar"
                 alt="">
            <div class="name">{{item.author_name}}</div>
          </div>
        </div>
      </div>
    </mescroll-vue>     
  </div>
</template>

<script type="text/javascript">
// 引入mescroll的vue组件
import MescrollVue from 'mescroll.js/mescroll.vue'
// 模拟数据
import mockData from '../mock/treedata'
import Vue from 'vue'
import { getTodayMenuDetail } from '../server/api/index'
import { Toast } from 'vant';
import LoadingGif from '../components/loading/LoadingGif'
export default {
  data () {
    return {
      tab0: {mescroll: null, list: [], isListInit: false}, // 全部
      tabType: 0 // 菜单类型
    }
  },
  components: {
    MescrollVue
  },
   mounted () {  
  },
  methods: {
       _initData() {
      // 第一条数据
      let ref =    getTodayMenuDetail('/lk01');
      if (ref.success) {
        this.menulistDetail = ref.data.big_recommend.list;
        this.tab0.list = ref.data.big_recommend.list;
        this.isShowLoading =false;
      }
    },
  
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit0 (mescroll) {
      mescroll.tabType = 0; // 加入标记,便于在回调中取到对应的list
      this.tab0.mescroll = mescroll;
      
       
    },
    // 多mescroll的配置,需通过方法获取,保证每个配置是单例
    getMescrollDown (tabType) {
      let isAuto = tabType === 0; // 第一个mescroll传入true,列表自动加载
      return {
        auto: isAuto,
        callback: this.downCallback
      }
    },
    getMescrollUp (tabType) {
      let emptyWarpId = 'dataList' + tabType;
      return {
        auto: false,
        callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
        noMoreSize: 4, // 如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
        empty: {
          warpId: emptyWarpId, // 父布局的id;
          icon: 'http://www.mescroll.com/img/mescroll-empty.png', // 图标,默认null
          tip: '暂无相关数据~', // 提示
          btntext: '去逛逛 >', // 按钮,默认""
          btnClick: function () { // 点击按钮的回调,默认null
            alert('点击了按钮,具体逻辑自行实现')
          }
        },
        toTop: { // 配置回到顶部按钮
          src: 'http://www.mescroll.com/img/mescroll-totop.png' // 图片路径,默认null (建议写成网络图,不必考虑相对路径)
        }
      }
    },
    /* 下拉刷新的回调 */
    downCallback (mescroll) {
      // 这里加载你想下拉刷新的数据, 比如刷新tab1的轮播数据
      if (mescroll.tabType === 0) {
        // loadSwiper();
        
      } 
      mescroll.resetUpScroll();// 触发下拉刷新的回调,加载第一页的数据
    },
    /* 上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    upCallback (page, mescroll) {
      if (mescroll.tabType === 0) {
        // 全部
        this.tab0.isListInit = true;// 标记列表已初始化,保证列表只初始化一次
          this._initData();
          console.log(this.tab0.list);
        
      }   
    },
  },
  beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      let curMescroll = vm.$refs['mescroll' + vm.tabType]; // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      curMescroll && curMescroll.beforeRouteEnter() // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    })
  },
  beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    let curMescroll = this.$refs['mescroll' + this.tabType]; // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
    curMescroll && curMescroll.beforeRouteLeave() // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next()
  } 

}
</script>

<style scoped>
  /*以fixed的方式固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 10px;
    bottom: 0;
    height: auto;
  }

  .top-warp{
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
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

  /*展示上拉加载的数据列表*/
  .data-li{
    position: relative;
    height: 90px;
    padding: 5px 2px 5px 110px;
    border-bottom: 1px solid #eee;
  }
  .data-li .pd-img{
    position: absolute;
    left: 8px;
    top: 10px;
    width: 80px;
    height: 80px;
  }
  .data-li .pd-name{
    font-size: 13px;
    line-height: 20px;
    height: 40px;
    margin-bottom: 1px;
    overflow: hidden;
  }
  .data-li .pd-price{
    font-size: 13px;
    color: red;
  }
  .data-li .pd-sold{
    font-size: 12px;
    margin-top: 1px;
    color: gray;
    margin-bottom: 1px;
  }
</style>
