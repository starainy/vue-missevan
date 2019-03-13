import axios from 'axios'
import * as url from './urlConfig'

// 轮播图
export const carouselApi = {
  getCarousel() {
    return axios.get(url.carouselUrl)
  }
}

// 热门音单
export const albumApi = {
  getAlbum() {
    return axios.get(url.albumUrl)
  }
}

// 热门频道
export const channelApi = {
  getChannel() {
    return axios.get(url.channelUrl)
  }
}

// 热门播主
export const podcastApi = {
  getPodcast() {
    return axios.get(url.podcastUrl)
  }
}

// 热门推荐
export const recommendApi = {
  getRecommend() {
    return axios.get(url.recommendUrl)
  }
}

// 各分区内容
export const partitionApi = {
  // 初始化分类
  getCatalogInit() {
    return axios.get(url.catalogInitUrl)
  },
  // 各分区下分类具体内容
  postCatalogByCid(params) {
    return axios.post(url.catalogByCidUrl, params)
  },
  // 各分区下排行榜内容
  getRankingById(params) {
    return axios.get(url.rankingUrl, { params: params ? params : {} })
  }
}

// 铃声
export const ringsApi = {
  // 初始化铃声
  getRingsInit() {
    return axios.get(url.ringsInitUrl)
  },
  // 铃声分类排行
  postRingsByCatalog(params) {
    return axios.post(url.ringsUrl, params)
  }
}
