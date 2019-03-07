import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import ArticleDetail from '@/components/article-detail'
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
      },{
      //   path: '/home',
      //   name: 'home',
      //   component: Home
      // },{
        path: '/article-detail',
        name: 'article-detail',
        component: ArticleDetail
      }]
    }
  ]
})
