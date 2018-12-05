import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import carousel from '@/components/common/carousel'
import video from '@/components/common/videoItem'
import choose from '@/components/common/chooseItem'
import leftContent from '@/components/contentBlock/leftContentBlock'
import rating from '@/components/contentBlock/rating'
import MsFooter from '@/components/common/MsFooter'

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
    },
    {
      path: '/choose',
      name: '选择框',
      component: choose
    },
    {
      path: '/leftContent',
      name: '左边具体栏目',
      component: leftContent
    },
    {
      path: '/rating',
      name: '排行',
      component: rating
    },
    {
      path: '/MsFooter',
      name: '底部',
      component: MsFooter
    }
  ]
})
