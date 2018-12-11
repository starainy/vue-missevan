import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import carousel from '@/components/common/carousel'
import search from '@/components/common/search'
import video from '@/components/common/videoItem'
import choose from '@/components/common/chooseItem'
import leftContent from '@/components/contentBlock/leftContentBlock'
import bell from '@/components/contentBlock/bell'
import podcastItem from '@/components/common/podcastItem'
import podcast from '@/components/contentBlock/podcast'
import bellItem from '@/components/common/bellItem'
import rating from '@/components/contentBlock/rating'
import MsFooter from '@/components/common/MsFooter'
import sound from '@/components/common/soundListItem'
import soundList from '@/components/contentBlock/hotSoundList'

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
    },
    {
      path: '/sound',
      name: '音单',
      component: sound
    },
    {
      path: '/soundlist',
      name: '热门音单',
      component: soundList
    },
    {
      path: '/bell',
      name: '铃声',
      component: bell
    },
    {
      path: '/bellItem',
      name: '铃声组件',
      component: bellItem
    },
    {
      path: '/podcastItem',
      name: '播主组件',
      component: podcastItem
    },
    {
      path: '/podcast',
      name: '播主',
      component: podcast
    },
    {
      path: '/search',
      name: '搜索框',
      component: search
    }
  ]
})
