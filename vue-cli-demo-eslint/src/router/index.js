import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFound from '../pages/NoFind.vue'
import Home from '../pages/Home.vue'
import Openwindow from '../components/Openwindow.vue'
import Contant from '../pages/contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
  		path: '*',
      name: 'NotFound',
      component: NotFound
  	},
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Contant',
      name: 'Contant',
      component: Contant
    },
    {
      path: '/Openwindow',
      name: 'Openwindow',
      component: Openwindow
    }
  ]
})
