import Vue from 'vue'
import Router from 'vue-router'
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
