import Vue from 'vue'
import Router from 'vue-router'
import LazyRouter from '../lib/lazyRouter'
import Home from '../pages/home'
import PlayMusic from '../pages/test/playMusic'
import SetSwiper from '../pages/test/setSwiper'
import DetailsMusic from '../pages/test/detailsMusic'

Vue.use(Router)

LazyRouter.add('/home','home','首页',Home)
LazyRouter.add('/setSwiper','setSwiper','轮播图',SetSwiper)
LazyRouter.add('/playMusic','playMusic','播放音乐',PlayMusic)
LazyRouter.add('/','detailsMusic','音乐详情',DetailsMusic)


export default new Router({
  routes: LazyRouter.routes
})
