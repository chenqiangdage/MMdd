<template>
<div>
  
<van-form @submit="onSubmitSupportInfo">

    <van-collapse v-model="activeMore">
      <van-collapse-item title="基本信息" name="basicParam"   title-class="collapseTitle">
        <van-row class="myborder">
            <van-col span="24">  
                <van-field v-model="pubTreeModel.ProductName"   label="苗木名"   right-icon="warning-o" placeholder="输入苗木名"/>
                
            </van-col>
        </van-row>
         <van-row class="myborder">
            <van-col span="24">  
                <van-field readonly clickable name="picker" v-model="pubTreeModel.CategoryName"   label="苗木类目"     placeholder="选择苗木类目" @click="showleimuPicker = true"/>
            <van-popup v-model="showleimuPicker" position="bottom">
                    <van-picker show-toolbar :columns="LMcolumns"  @confirm="onLMConfirm"  @cancel="showleimuPicker = false" />
                </van-popup>
            </van-col>
        </van-row>
        <van-row class="myborder"> 
            <van-col span="14">  
                <van-field readonly clickable name="picker" v-model="pubTreeModel.Prop1"  label="杆径" placeholder="点击选择径杆" @click="showPicker = true"/>
                <van-popup v-model="showPicker" position="bottom">
                    <van-picker show-toolbar :columns="JGcolumns"  @confirm="onJGConfirm"  @cancel="showPicker = false" />
                </van-popup>
            </van-col >
              <van-col span="6">
                <van-field v-model="pubTreeModel.Prop16"        placeholder="输入公分"/>
            </van-col>
             <van-col span="4">
                 <van-cell  value="公分"/>
            </van-col>
        </van-row>
         <van-row class="myborder">
            <van-col span="10">  
                <van-field v-model="pubTreeModel.ProductHeightL"   label="高度"    placeholder="最小"/>
            </van-col>
            <van-col span="4">  
                <van-cell   style="padding-left:5px;padding-right:5px;" value="公分-"/>
            </van-col>
            <van-col span="6">  
                <van-field v-model="pubTreeModel.ProductHeightH"    type="number"  placeholder="最大"/>
            </van-col>
            <van-col span="4">  
                <van-cell   value="公分"/>
            </van-col>
        </van-row>  
         <van-row class="myborder">
            <van-col span="10">  
                <van-field v-model="pubTreeModel.ProductWeightL"   label="冠幅" type="number"   placeholder="最窄"/>
            </van-col>
            <van-col span="4">  
                <van-cell  style="padding-left:5px;padding-right:5px;" value="公分-"/>
            </van-col>
            <van-col span="6">  
                <van-field v-model="pubTreeModel.ProductWeightH" type="number"    placeholder="最宽"/>
            </van-col>
            <van-col span="4">  
                <van-cell   value="公分"/>
            </van-col>
        </van-row>  
         <van-row class="myborder">
            <van-col span="24">  
                <van-field readonly clickable name="picker" v-model="pubTreeModel.Prop2"   label="种植状态"     placeholder="苗木种植状态" @click="showZZZTPicker = true"/>
            <van-popup v-model="showZZZTPicker" position="bottom">
                    <van-picker show-toolbar :columns="ZZZTcolumns"  @confirm="onZZZTConfirm"  @cancel="showZZZTPicker = false" />
                </van-popup>
            </van-col>
        </van-row>
          <van-row class="myborder">
            <van-col span="10">  
                <van-field v-model="pubTreeModel.ProductPrice"   label="价格"  type="number"  placeholder="元"/>
            </van-col>
            <van-col span="4">  
                <van-cell  style="padding-left:5px;padding-right:5px;" v-bind:value="pubTreeModel.ProductUnit"/>
            </van-col>
            <van-col span="10">  
                <van-field v-model="pubTreeModel.ProductStock"   label="数量"   type="number" v-bind:placeholder="pubTreeModel.ProductUnit"/>
            </van-col>            
        </van-row> 
           <van-row class="myborder">
               
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="pubTreeModel.EffecitiveTime"
            label="截止时间"
            placeholder="点击选择时间"
            @click="showDeadTimePicker = true"
            />
        <van-popup v-model="showDeadTimePicker" position="bottom">
        <van-datetime-picker
            type="datetime"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onDeadTimeConfirm"
            @cancel="showDeadTimePicker = false"
        />
        </van-popup>
           
             </van-row>
        <van-row class="myborder">
            <van-col span='24'>
                <van-field v-model="pubTreeModel.Address" rows="2" autosize label="采购地" type="textarea"  placeholder="采购地" show-word-limit/> 
            </van-col>
        </van-row>
         <van-row class="myborder">
            <van-col span='24'>
                <van-field v-model="pubTreeModel.ReceiveAddress" rows="2" autosize label="收货地" type="textarea"  placeholder="收货地" show-word-limit/> 
            </van-col>
        </van-row>
        
       
        <van-row class="myborder" style="background-color:rgb(247, 248, 249);">
            <h5 style="margin:5px 5px"><span>添加图片      </span><span style="color:red;">最多上传9张图片！</span></h5> 
                <van-col span='24'>
           
             <van-uploader multiple @delete="deletethisfile" :after-read="afterRead" :before-read="beforeRead" v-model="fileList" :max-count="9" />
            </van-col>
        </van-row>
    
     </van-collapse-item>
    </van-collapse>

    <van-collapse v-model="activeMore">
    <van-collapse-item title="更多信息" name="moreParam"   title-class="collapseTitle">
     <van-row class="myborder">
     <van-col span="6">
           <van-cell  value="树冠"/>
     </van-col>
     <van-col span="6">
          <van-dropdown-menu>
           <van-dropdown-item v-model="pubTreeModel.Prop4" :options="optionSG" />
        </van-dropdown-menu>
        </van-col>
       <van-col span="6">
             <van-cell  value="品质"/>
       </van-col>
      <van-col span="6">
          <van-dropdown-menu>
           <van-dropdown-item v-model="pubTreeModel.Prop5" :options="optionPZ" />
        </van-dropdown-menu>
      </van-col>
            
        </van-row>
        <van-row class="myborder">
     <van-col span="6">
           <van-cell  value="土质"/>
     </van-col>
     <van-col span="6">
          <van-dropdown-menu>
           <van-dropdown-item v-model="pubTreeModel.Prop6" :options="optionTZ" />
        </van-dropdown-menu>
        </van-col>
       <van-col span="6">
             <van-cell  value="树型"/>
       </van-col>
      <van-col span="6">
          <van-dropdown-menu>
           <van-dropdown-item v-model="pubTreeModel.Prop7" :options="optionSX" />
        </van-dropdown-menu>
      </van-col>
            
        </van-row>
           <van-row class="myborder">
     <van-col span="6">
           <van-cell  value="茂密度"/>
     </van-col>
     <van-col span="6">
          <van-dropdown-menu>
           <van-dropdown-item v-model="pubTreeModel.Prop8" :options="optionMMD" />
        </van-dropdown-menu>
        </van-col>
       <van-col span="6">
             <van-cell  value="苗木形态"/>
       </van-col>
      <van-col span="6">
          <van-dropdown-menu>
           <van-dropdown-item v-model="pubTreeModel.Prop9" :options="optionXT" />
        </van-dropdown-menu>
      </van-col>
            
        </van-row>
        <van-row class="myborder">
            <van-col span="12">  
                <van-field v-model="pubTreeModel.Prop14"   label="土球直径"    placeholder="公分"/>
            </van-col>
            
            <van-col span="12">  
                <van-field v-model="pubTreeModel.Prop15"    label="土球厚度"  placeholder="公分"/>
            </van-col>
             
        </van-row>  
        <van-row class="myborder">
            <van-col span="10">  
                <van-field v-model="pubTreeModel.Prop11"   label="分枝点"    placeholder="最小"/>
            </van-col>
            <van-col span="4">  
                <van-cell   style="padding-left:5px;padding-right:5px;" value="公分-"/>
            </van-col>
            <van-col span="6">  
                <van-field v-model="pubTreeModel.Prop12"    type="number"  placeholder="最大"/>
            </van-col>
            <van-col span="4">  
                <van-cell   value="公分"/>
            </van-col>
        </van-row>  
         <van-row class="myborder">
              <van-col span="6">  
                <van-cell   value="报价方式"/>
            </van-col>
            <van-col span="18">
            <van-radio-group v-model="pubTreeModel.Prop10" direction="horizontal">
            <van-radio name="1" icon-size="24px"  style="margin: 11px 1px 11px 10px" >上车价</van-radio>
            <van-radio name="2" icon-size="24px"  style="margin: 11px 1px 11px 10px" >到货价</van-radio>
            </van-radio-group>
            </van-col>
          
        </van-row>
          <van-row class="myborder">
            <van-col span='24'>
                <van-field v-model="pubTreeModel.Remarks" rows="2" autosize label="备注" type="textarea"  placeholder="备注" show-word-limit/> 
            </van-col>
        </van-row>
       
      </van-collapse-item>
  
</van-collapse>
    <div style="margin: 2px 20px 60px 20px;"> 
        <van-button round block type="primary" native-type="submit">
        确认发布供应
        </van-button>
  </div>
  <div style="margin-bottom :5px;height:10px;" ></div>
    </van-form>
    
</div>
</template>
<style  >
.collapseTitle{
    font-size: 20px;
    font-weight: 700;
    color:#1989fa;
}
.van-collapse-item__content
{
    padding: 5px;
    color: #969799;
    font-size: 13px;
    line-height: 1.5;
    background-color: #fff;
}
.myborder{
    border-bottom: solid 1px #e8d8d8;
}
 
</style>
<script>
import Vue from 'vue';
import axios from 'axios'
import { PushPic,DelPic,PushPic2,InitPubPickdata,InitPubDropDowndata,PushDemand,InitDropDownListInPub,InitPickListInPub} from '../server/api/index'
import {Button,Form, Field,Col, Row ,Popup,Picker,Switch,Cell, CellGroup ,Uploader,Toast,Panel,Collapse, CollapseItem ,DropdownMenu, DropdownItem, DatetimePicker,RadioGroup, Radio } from 'vant';


Vue.use(DatetimePicker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Panel);
Vue.use(Toast);
Vue.use(Uploader);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Switch);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Field);
Vue.use(Form);
Vue.use(Button);
export default {
  data() {
    return {
        pubTreeModel:{
            batchId:"",
            MainPic:"",
            ProductImgUrl:"",
            ThumbImgUrl:"",
            testcount:1,
            ProductName:'',
            CategoryName:'',
            Prop1: '',
            Prop16:'',
            ProductHeightL:'',
            ProductHeightH:'',
            ProductWeightL:'',
            ProductWeightH:'',
            Prop2:'',
            ProductPrice:0,
            ProductStock:0,
            ProductUnit:'/株',
            Address:'',
            ReceiveAddress:'',
            Prop13:'',
            Prop4:"",
            Prop5:"",
            Prop6:"",
            Prop7:"",
            Prop8:"",
            Prop9:"",
            Prop10:"",
            Prop11:"",
            Prop12:"",
            Prop14:"",
            Prop15:"",
            EffecitiveTime:'',    
            Remarks:""
        },
        
        showDeadTimePicker:false,
        showPicker: false,
        showTisnshuPicker:false,
        showleimuPicker:false,
        showZZZTPicker:false,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2026, 0, 1),   
        JGcolumns: [],
        LMcolumns: [],
        ZZZTcolumns: [],
        activeMore: ['basicParam'],
        fileList: [],
       optionSG: [],
       optionPZ: [],
       optionTZ: [],
       optionSX: [],
       optionMMD: [],
       optionXT: [],
    };
  },
  mounted(){
 this.InitPicks();
 this.InitDropdown();
  },
  methods: {
    InitPicks(){
    const axiosAjax = axios.create({timeout: 1000 * 60 });
        axios.get(InitPickListInPub, {
            params: {
            type: "MIAOLEITYPE;JINGGAN;ZHONGZHIZHUANGTAI"
            }
        })
        .then(  (res) => {
            if(res.data.response!=null){
               this.JGcolumns = res.data.response.Datas.JINGGAN;
               this.LMcolumns = res.data.response.Datas.MIAOLEITYPE;
               this.ZZZTcolumns = res.data.response.Datas.ZHONGZHIZHUANGTAI;
            }
        })
        .catch(function (error) {
            console.log(error);
        });  
    },
 InitDropdown(){
    const axiosAjax = axios.create({timeout: 1000 * 60 });
        axios.get(InitDropDownListInPub, {
            params: {
            type: "SHUGUANGTYPE;PINGZHITYPE;TUZHITYPE;SHUXINGZHUANGTYPE;MAOMIDUTYPE;MIAOSHENGZHANGTYPE"
            }
        })
        .then( (res) =>{
            if(res.data.response!=null){
                this.optionSG = res.data.response.Datas.SHUGUANGTYPE;
                this.optionPZ = res.data.response.Datas.PINGZHITYPE;
                this.optionTZ = res.data.response.Datas.TUZHITYPE;
                this.optionSX = res.data.response.Datas.SHUXINGZHUANGTYPE;
                this.optionMMD = res.data.response.Datas.MAOMIDUTYPE;
                this.optionXT = res.data.response.Datas.MIAOSHENGZHANGTYPE;
            }
        })
        .catch(function (error) {
            console.log(error);
        });  
    },
    onSubmitSupportInfo() {
        const axiosAjax = axios.create({timeout: 1000 * 60 });  
       axiosAjax.post(PushDemand,this.pubTreeModel).then();
    },
    onJGConfirm(value) {
      this.pubTreeModel.Prop1 = value;
      this.showPicker = false;
    },
    onTSConfirm(value) {
      this.pubTreeModel.Prop13 = value;
      this.showTisnshuPicker = false;
    },
    onLMConfirm(value) {
      this.pubTreeModel.CategoryName = value;
      this.showleimuPicker = false;
    },
    onZZZTConfirm(value) {
      this.pubTreeModel.Prop2 = value;
      this.showZZZTPicker = false;
    },
    onDeadTimeConfirm(tdate){
      this.showDeadTimePicker = false;
      console.log(tdate);
      this.pubTreeModel.EffecitiveTime =   this.formatDate(tdate);
     },
      formatDate(val) {
      let year = val.getFullYear()
      let month = val.getMonth() + 1
      let day = val.getDate()
      let hour = val.getHours()
      let minute = val.getMinutes()
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      return `${year}-${month}-${day} ${hour}:${minute}`
       
    },
    async deletethisfile(file)
    {
        var dbId=(file.dbID != undefined)?file.dbID:file.file.dbID;
        const axiosAjax = axios.create({timeout: 1000 * 60 });
        axios.get(DelPic, {
            params: {
            fileId: dbId
            }
        })
        .then(function (res) {
            if(res.data.response!=null){
                this.pubTreeModel.ProductImgUrl = res.data.response.MainPic;
                this.pubTreeModel.ThumbImgUrl = res.data.response.ThumbnailUrl;
            }
        })
        .catch(function (error) {
            console.log(error);
        });   
    },
     async afterRead(file,detail) {
        let ref = await this.uploadImg(file);
    }, 
   async uploadImg(files)
    {
        var fileArr = []; 
        var index = 1;
        let formdata1 = new FormData();
        formdata1.append("batchId",this.pubTreeModel.batchId);
        if (files && files.length) 
        {
            for(var ti = 0;ti<files.length;ti++)
            {
                files[ti].status = "uploading";
                files[ti].message = "上传中...";
                files[ti].dbID = "";
                formdata1.append('file',files[ti].file);
            }   
        }else
        {
           if(files.status!="done")
            { 
                files.status = "uploading";
                files.message = "上传中...";
                files.dbID = "";
                formdata1.append('file',files.file);
            }
        }
        let config = { headers:{'Content-Type':'multipart/form-data'}};
        const axiosAjax = axios.create({timeout: 1000 * 60 });
        axiosAjax.post(PushPic,formdata1,config)
        .then((res)=>{   //这里的url为后端接口
            console.log(res.data);
            this.pubTreeModel.batchId = res.data.response.BatchId;
            this.pubTreeModel.ProductImgUrl = res.data.response.MainPic;
            this.pubTreeModel.ThumbImgUrl = res.data.response.ThumbnailUrl;
            var filesList = res.data.response.files;
            if (files && files.length){ 
                for(var ti = 0;ti<files.length;ti++)
                    {
                        var dbid =  filesList[files[ti].file.name];
                        files[ti].status = "done";
                        files[ti].dbID = dbid;      
                    }
            }
            else
            { 
                var dbid =  filesList[files.file.name];
                if(dbid!=0)
                {
                    files.status = "done";
                    files.dbID = dbid;
                }   
            }
        //res 为接口返回值
        })
        .catch(() => {})       
    },
    beforeRead(file,detail) {
     if(file.length==undefined)
     {
        if (file.type == 'image/jpeg'||file.type == 'image/png') {
        return true;
      }else{
          Toast('请上传 jpg 格式图片');
          return false;
      }
     }
     else
     {
         for(var i = 0;i<file.length;i++)
         {
            if (file.type == 'image/jpeg'||file.type == 'image/png') {
                continue;
            }else{
                Toast('请上传 jpg 格式图片');
                return false;
            }
         }
     }
     // console.log('before'+ this.testcount);
      return true;
    },
  },
};
</script>