<template>

  <transition :name="transitionName">
  　　　　　　<router-view class="Router"></router-view>
  　　　　</transition>
</template>


<script>
export default {
　　data() {
　　　　return {
　　　　　　transitionName: 'slide-right'  // 默认动态路由变化为slide-right
　　　　}
　　},
　　watch: {
　　　'$route' (to, from) {
　　　　let isBack = this.$store.state.name  //  监听路由变化时的状态为前进还是后退
　　　　　　if(isBack) {
　　　　　　　　this.transitionName = 'slide-right'
　　　　　　} else {
　　　　　　       this.transitionName = 'slide-left'
　　　　　}
　　this.$store.state.name = false
　　}
　  }
　}
</script>
<style>

.Router {
     position: absolute;
     width: 100%;
     transition: all .8s ease;
     top: 40px;
}

.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
