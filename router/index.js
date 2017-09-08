
import Vue from 'vue'

import VueRouter from 'vue-router'

import  {One,Two,Three,News} from '../bulid/Complate/child/'



VueRouter.prototype.goBack = function () {
　　this.isBack = true
　　window.history.go(-1)
}
Vue.use(VueRouter);
const loading =  {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '0.5s', opacity: '0.6s', termination: 300}}
        ]
      }
  }
export default new VueRouter({
  routes: [
    {
      path: '/One',
      name: 'Home',
      component: One
    },
    {
      path: '/',
      name: 'article',
      component: Two
    },
    {
      path: '/Last',
      name: 'Article',
      component: Three
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
