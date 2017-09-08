<template>
  <div>


    <img src='../../../assecc/image/bg-mute.png'/>

     <div class="item-crad">
        <div class="left">
            <img class="Icon-time" src="../../../assecc/image/time.png"><strong>接待时间 7：00~22：00</strong>
            <div class="secon">
              <strong class="bg-color">优惠信息</strong><strong class="color-red"> 买一送一</strong>
            </div>
        </div>
        <div class="right">
            <img class="Icon-time" src="../../../assecc/image/iphone.png" /> <strong>0599-561111</strong>
        </div>
     </div>
     <!-- Scroller 选中票价区域  -->
     <divider><strong class="twithSize">黄山景区[切换景点]</strong></divider>
     <scroller lock-y :scrollbar-x=false>
        <div class="box1">
          <div class="box1-item" v-for="i in 7">  <strong>09/05<br>
              普通票 <br>
              <b class="color-red">实时计价</b>
            </strong></div>
        </div>
      </scroller>

      <!-- 顾客评论区域  -->
    <divider ><strong class="twithSize">顾客评论</strong></divider>
    <div class="customer">
      <div class='left raduis-one'></div>

      <div class="left raduis-two">
        <strong>
          顾客总评： </strong><rater class="right" slot="value" font-size="18" active-color="#5ee5f3"></rater>
        <div class="CentEvet">
          <strong>
            景区评分： </strong><rater class="right" slot="value" font-size="18" active-color="#5ee5f3"></rater>
        </div>
        <strong>
        票类评分：  </strong><rater class="right" slot="value" font-size="18" active-color="#5ee5f3"></rater>

        <div class="dirlineheght">
        </div>
        <div class="footer-more right">
          <div >留言评论：景区不错，票价合理，非常推荐...</div>
              <dd class="right item-dd">点击查看更多</dd>
        </div>

      </div>

    </div>
    <!--  Tab -->
    <div class="tabCente">
      <tab :line-width=2 active-color='#fc378c' v-model="index">
         <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
       </tab>
       <swiper v-model="index" height="100px" :show-dots="false">
         <swiper-item v-for="(value,item,index) in list2" :key="index">
           <div class="tab-swiper vux-center"> {{value}}{{item}}{{index}}</div>
         </swiper-item>
       </swiper>
    </div>
</div>
</template>
<script>

import {  Swiper, SwiperItem,Tab, TabItem ,Rater,Divider,Scroller, CellFormPreview, Group, Cell, XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Grid, GridItem,GroupTitle  } from 'vux'
  export default{
      name:'One',
      directives: {
        TransferDom
        },
      components: {
          ButtonTab,

         CellFormPreview,
         Scroller,
         Rater,
         Group,
         Cell,
         Tab,
         TabItem,
         Divider,
         Swiper,
         SwiperItem
       },
       data () {
          return {
                list2:['111','222','333'
                //   {
                //   title:"景点特色",
                //   center:"黄山：世界文化与自然双重遗产，</br>世界地质公园，国家AAAAA级旅游景区，</br>国家级风景名胜区，全国文明风景旅游区示范点，</br>中华十大民山，天下第一奇山。"
                // },{
                //   title:"行程介绍",
                //   center:"黄山：世界文化与自然双重遗产，</br>世界地质公园，国家AAAAA级旅游景区，</br>国家级风景名胜区，全国文明风景旅游区示范点，</br>中华十大民山，天下第一奇山。"
                //
                // },{
                //   title:"常见问题",
                //   center:"黄山：世界文化与自然双重遗产，</br>世界地质公园，国家AAAAA级旅游景区，</br>"+
                //   "国家级风景名胜区，全国文明风景旅游区示范点，</br>"+
                //   "中华十大民山，天下第一奇山。"
                // },{
                //   title:"预订须知",
                //   center:"黄山：世界文化与自然双重遗产，</br>世界地质公园，国家AAAAA级旅游景区，</br>"+
                //   "国家级风景名胜区，全国文明风景旅游区示范点，</br>"+
                //   "中华十大民山，天下第一奇山。"
                // }
              ],
              value:["one","two","three"],
              index:0
          }
        }
}
</script>
<style lang="less">
.Icon-time{
  margin-right: 8px;
  height: 10px;
  width: 10px;
}
.item-dd{
  margin-top: 5px;
  color: red;
}

.tabCente{
  height: 200px;
  width: 100%;
  background-color: white;
}
.item-crad{
  height: 50px;
  width: 92%;
  background-color: white;
  padding: 2% 4%;
  margin-bottom: 5%;
}


.bg-color{
  background-color: orange;
  color: white;
  padding: 3px 5px;
  margin-right: 8px;
  border-radius: 3px;
}
.color-red{
  color: red;

}

.secon{
  margin-top: 8%;
  margin-left: 10%;
}
.dirlineheght{
  margin-top: 5px;
  height: 1px;
  width: 300%;
  border-bottom: 1px solid #eee;
}

.right{
  float: right;
}
.left{
  float: left;
}
.raduis-one{
  height: 80px;
  width: 80px;
  margin:10px;
  background-color: #eee;
  border-radius: 50%;
  background-image: url('../../../assecc/image/bg2.png');
  background-color: skyblue;
  background-size: cover;
}

.raduis-two{
  padding: 10px 10px;
  width: 45%;
}
.inster{
  font-size: 10px;
}

.footer-more{
  margin-top: 8px;
  width: 100%;
  white-space: nowrap;
}
.CentEvet{
  margin: 8px 0px;
}
/********************自写部分结束************************/
.box1 {
  height: 100px;
  position: relative;
  width: 810px;
  padding: 0 20px;
}
.box1-item {
  width: 60px;
  height: 60px;
  background-color: #fff;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 20px;
  padding:20px;
}
.box1-item:hover{
  background-color: #eee;

}

.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.twithSize{
  font-size: 18px;
}
.weui-cells {
  border: 0px !important;

}

.customer{
  height:130;
  width: 100%;
  padding: 10px 0;
  background-color: white;
  overflow: hidden;
  margin-bottom: 8px;
}
.xhdstry{
  position:fixed;
  width:100%;
  background-color:#3E3E3E;
  top: 0pt;
}

</style>
