import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import NotFound from '../pages/NoFind.vue'
// import Home from '../pages/Home.vue'
// import Openwindow from '../components/Openwindow.vue'
// import Contant from '../pages/contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
  		path: '*',
      name: 'NotFound',
      component: () => import('../pages/NoFind.vue')
  	},
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld.vue')
    },
    {
      path: '/Contant',
      name: 'Contant',
      component: () => import('../pages/contact.vue')
    },
    {
      path: '/Openwindow',
      name: 'Openwindow',
      component: () => import('../components/Openwindow.vue')
    }
  ]
})
