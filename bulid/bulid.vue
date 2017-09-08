<template>


  <div>

     <!-- *************** -->

     <Heading></Heading>
     <Middle></Middle>
     <Footer></Footer>

   </div>
</template>
<script>
import Vue from 'vue';

import Heading from "./Complate/Headling.vue";

import Footer from "./Complate/footer.vue";

import Middle from "./Complate/middle.vue";

import router from '../router'

import Vuex from 'vuex';



Vue.use(Vuex);
const store = new Vuex.Store({
  state:{name:false}
 })

export default {
      el: "#Controller",
      store,
        components : {  Heading, Middle ,Footer     },
        router,
        methods:{
            test(){
                console.log (this.$store.state.name)
            }
          }
      }


</script>

<style lang="less">

#Controller {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background-color:#efeff4;
  font-size: 12px;
}

</style>
