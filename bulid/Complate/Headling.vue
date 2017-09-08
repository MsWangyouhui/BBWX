<template>
<!-- 头注区域  -->
<div>

  <x-header style="position:fixed;width:100%;background-color:#3E3E3E;top:0pt;z-index:10000;"
   :right-options="{showMore: true}" :left-options="{preventGoBack: true,showBack:true,backText: ''}"
   @on-click-back="SystemBack"
   @on-click-more="showMenus=true"></x-header>
  <div v-transfer-dom>
    <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="SystemBottom"></actionsheet>
  </div>
</div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  },
  methods:{
    SystemBack(){
      this.$store.state.name=true;//vuex获取状态树的全局对象。设定路由专场动画。
      this.$router.go(-1)//跳转路由，goback退后。
    }
  }
}
</script>

<style>
.overwrite-title-demo {
  margin-top: 5px;
}
img{
  width: 100%;
}
</style>
