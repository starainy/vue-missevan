import { recommendApi } from '../../api'
import * as TYPE from '../mutationTypes'

const state = {
  hotRecommends: []
}

const getters = {
  hotRecommends: state => state.hotRecommends
}

const actions = {
	async getRecommends({ commit }) {
    let resp = await recommendApi.getRecommend()
    commit(TYPE.SET_RECOMMEND, resp.data)
    return resp.data
  }
}

const mutations = {
	[TYPE.SET_RECOMMEND] (state, recommend) {
    state.hotRecommends = recommend
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
