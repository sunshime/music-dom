import Vue from 'vue'
import Router from 'vue-router'
import LazyRouter from '../lib/lazyRouter'
import Home from '../pages/home'

Vue.use(Router)

LazyRouter.add('/','home','首页',Home)


export default new Router({
  routes: LazyRouter.routes
})
