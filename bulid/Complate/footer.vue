<template>
 <div >
   <tabbar style="position:fixed;bottom:0px;z-index:5000;">
   <tabbar-item selected  link="/">
     <img slot="icon" src="../../assecc/image/shouye1@2x.png">
     <span slot="label">首页</span>
   </tabbar-item>
   <tabbar-item show-dot  link="One">
     <img slot="icon" src="../../assecc/image/shouchang1@2x.png">
     <span slot="label">收藏</span>
   </tabbar-item>
   <tabbar-item  link="One">
     <img slot="icon" src="../../assecc/image/gouwuche1@2x.png">
     <span slot="label">购物车</span>
   </tabbar-item>
   <tabbar-item badge="2" link="One" :click="WindosGoback">
     <img slot="icon" src="../../assecc/image/wode1@2x.png">
     <span slot="label">我的</span>
   </tabbar-item>
 </tabbar>
</div>
</template>
<script>
import { Tabbar, TabbarItem,Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Tabbar,
    TabbarItem,
  },
  methods:{
    WindosGoback(){
        this.$store.state.name=true;
        alert (this.$store.state.name)
    }
  }
}
</script>
