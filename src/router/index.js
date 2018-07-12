import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/page/article'
import Blog from '@/page/blog'
import Home from '@/page/home'
import About from '@/page/about'
import Category from '@/page/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/category',
      name: 'Category',
      component: Category
    }
  ]
})
