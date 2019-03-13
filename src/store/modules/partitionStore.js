import { partitionApi } from '../../api'
import * as TYPE from '../mutationTypes'
console.log(TYPE)
const state = {
  // 将铃声单独提出来
  catalogRings: [],
  catalogs: []
  // 不将各分区分类的具体内容放进来进行缓存是因为若要这么做会产生类似
  // [{ id:1, catalogData:[{ cid: 2, ponit:[], time: [] },{ ... }] }, { ... }]的结构
  // 感觉反而繁琐了，因此选择在页面上使用@click.once进行控制即可
  // catalogsCache: []
}

const getters = {
  catalogRings: state => state.catalogRings,
  catalogs: state => state.catalogs
}

const actions = {
	async catalogInit({ commit }) {
    let resp = await partitionApi.getCatalogInit()
    for(const catalogItem of resp.data) {
      if(catalogItem['name'] === '铃声') {
        commit(TYPE.SET_CATALOGRINGS, catalogItem)
      } else {
        commit(TYPE.SET_CATALOGS, catalogItem)
      }
    }
  },
  async catalogByCid({ commit }, params) {
    // [[], []]
    let resp = await partitionApi.postCatalogByCid(params)
    return {
      point: resp.data[0].slice(0, 5),
      time: resp.data[1].slice(0, 5)
    }
  },
  async rankingById({ commit }, params) {
    let resp = await partitionApi.getRankingById(params)
    return resp.data
  }
}

const mutations = {
	[TYPE.SET_CATALOGRINGS] (state, partitionObj) {
    state.catalogRings.push(partitionObj)
	},
	[TYPE.SET_CATALOGS] (state, partitionObj) {
		state.catalogs.push(partitionObj)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
