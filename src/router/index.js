import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import carousel from '@/components/common/carousel'
import video from '@/components/common/videoItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/carousel',
      name: '轮播图',
      component: carousel
    },
    {
      path: '/video',
      name: '视频card',
      component: video
    }
  ]
})
