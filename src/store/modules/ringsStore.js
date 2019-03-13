import { ringsApi } from '../../api'
import * as TYPE from '../mutationTypes'

// 此处为铃声具体内容，铃声分类在partition
const state = {
  ringsInit: [],
  rings: []
}

const getters = {
  ringsInit: state => state.ringsInit,
  rings: state => state.rings
}

const actions = {
	async ringsInit({ commit }) {
    let resp = await ringsApi.getRingsInit()
    commit(TYPE.SET_RINGSINIT, resp)
    return resp
  },
  async ringsByCatalog({ commit, state }, params) {
    if (params.catalog) {
      let isexist = false
      let resp = null
      for (const ring of state.rings) {
        if (ring.catalog == params.catalog) {
          isexist = true
          resp = ring.data
          break
        }
      }
      if (isexist) {
        return resp
      } else {
        resp = await ringsApi.postRingsByCatalog(params)
        commit(TYPE.SET_RINGS, {
          catalog: params.catalog,
          data: resp.data.successVal
        })
        return resp.data.successVal
      }
    }
  }
}

const mutations = {
	[TYPE.SET_RINGSINIT] (state, ringsinit) {
    state.ringsInit = ringsinit
	},
	[TYPE.SET_RINGS] (state, ringsObj) {
		state.rings.push(ringsObj)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
