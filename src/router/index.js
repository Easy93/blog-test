import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Login from '@/components/login'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect:'/home',
      children: [{
        path: '/home',
        name: 'home',
        component: Home
      }]
    }
  ]
})
