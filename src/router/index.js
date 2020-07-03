import Vue from 'vue'
import Router from 'vue-router'
import LazyRouter from '../lib/lazyRouter'
import Home from '../pages/home'
import PlayMusic from '../pages/test/playMusic'
import SetSwiper from '../pages/test/setSwiper'

Vue.use(Router)

LazyRouter.add('/home','home','首页',Home)
LazyRouter.add('/','playMusic','播放音乐',PlayMusic)
LazyRouter.add('/setSwiper','setSwiper','轮播图',SetSwiper)


export default new Router({
  routes: LazyRouter.routes
})
