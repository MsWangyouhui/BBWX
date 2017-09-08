<template>
  <div>
    <!-- 轮播图区域 -->
      <img src="../../../assecc/image/bgriver.png"/>
           <!-- <search ></search> -->
           <!-- nva导航 -->
       <div class="center-item">
         <flexbox>
             <flexbox-item><div class="center-item-bg4">
                <router-link to="one" style="color: black;"><img src="../../../assecc/image/menpiao.png" alt="">订票</router-link>
             </div></flexbox-item>
             <flexbox-item><div class="center-item-bg3">
               <router-link to="one" style="color: black;"><img src="../../../assecc/image/jiudian.png" alt="">酒店</router-link>
               </div></flexbox-item>
             <flexbox-item><div class="center-item-bg2">
               <router-link to="one" style="color: black;"><img src="../../../assecc/image/tuijian.png" alt="">活动</router-link>
               </div></flexbox-item>
             <flexbox-item><div class="center-item-bg1">
               <router-link to="one" style="color: black;"><img src="../../../assecc/image/gonglue.png" alt="">攻略</router-link>
               </div></flexbox-item>
           </flexbox>
       </div>
            <!-- 中间内容 -->
         <div class="center-item-center" v-for="i in 3">
            <div class="center-title">
              <div class="left">
                  <div style="height:22px;width:6px; background-color:skyblue;margin-right:10px;"></div>
              </div>
              <div class="left">
                有好票
              </div>
              <div style="font-size:12px;line-height:30px" class="right">
                更多
              </div>
            </div>
          <div class="center-pranet" style="" v-for="item in dateCenter">
            <div class="left center-item-first">
              <img style="" :src="item.img" alt="">
            </div>
            <div class="left center-item-conter">
              <div style=" font-size: 16px;">
                  {{item.name}}
              </div>
              <div class="" style="margin-top:5px;margin-bottom:5px;">
                <rater class="" slot="value" font-size="18" active-color="#5ee5f3"></rater>
              </div>
              <div style="font-size:10px; height:20px; margin-bottom:5px;">
                <div class="left" style="border:1px solid #16a6ca;color:#16a6ca;padding:1px;font-weight:700;">
                  {{item.today}}
                </div>
                <div class="left" style="border:1px solid red;color:red;padding:1px;margin-left:5px;font-weight:700;" v-if="item.stubloon">
                  {{item.sduten}}
                </div>
              </div>

              <div class="" style="width:115%;">
                   <div class="left">
                    {{item.icon}}<span style="color:red"><strong>{{item.manny}}</strong></span> {{item.behind}}
                  </div>
                  <div class="right">
                    {{item.address}}
                  </div>
              </div>

              <div class="">
              </div>
            </div>
          </div>
       </div>
       <!-- footertab  -->
       <div class="" style="height:77px;">
       </div>
  </div>
</template>

<style lang="less">

.center-pranet{
  height:90px;
  padding: 15px 0px;
  border-bottom:1px solid #eee;
}
.center-item-first{
  width:90px;
  height:90px;
  margin-right:  20px;
}
.center-item-conter{
  width: 200px;
  height: auto;
}

a{
  text-decoration:none !important;
}
.center-item{
    background-color: white;
    height: 90px;
    padding: 20px;
    font-weight: bold;
}
.center-item-bg1, .center-item-bg2, .center-item-bg3, .center-item-bg4{
padding: 10%;
  text-align: center;
}
.center-item-bg1:hover{
  background-color: #eee;
}
.center-item-bg2:hover{
  background-color: #eee;
}
.center-item-bg3:hover{
  background-color: #eee;
}
.center-item-bg4:hover{
  background-color: #eee;
}

.left{
  float: left;
}
.right{
  float: right;

}
.center-item-center{
  background-color: white;
  height:363px;
  width: 90%;
  margin-top: 10px;
  padding: 5%;
}
.center-title{
    height: 30px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
}
.xhdstry{
  position:fixed;
  width:100%;
  background-color:#3E3E3E;

}
</style>


<script>

// import testdata from './testdata.json';

// const testdata = require

import { Tabbar,Rater, TabbarItem,Flexbox, FlexboxItem, Divider } from 'vux';

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Tabbar,
    TabbarItem,
    Rater,
    Divider
  },
  data(){
    return{
      dateCenter:[
          {
              link:'#',
              img:require("../../../assecc/image/bg1.png"),
              name:"广州塔广州电视新塔",
              star:4,
              today:"今日可订",
              icon:"￥",
              stubloon:false,
              sduten:"学生优惠",
              behind:"起",
              manny:"198",
              address:"海珠区"
            },
            {
              link:'#',
              img:require("../../../assecc/image/bg2.png"),
              name:"陕西通灵大峡谷",
              star:4,
              today:"今日可订",
              icon:"￥",
              stubloon:true,
              sduten:"学生优惠",
              behind:"起",
              manny:"98",
              address:"陕西市"
            },
            {
              link:'#',
              img:require("../../../assecc/image/bg4.png"),
              name:"广州白云山",
              star:4,
              today:"今日可订",
              icon:"￥",
              stubloon:false,
              sduten:"学生优惠",
              behind:"起",
              manny:"5",
              address:"白云区"
            }
      ]

    }

  }
}
</script>
