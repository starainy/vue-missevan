import { podcastApi } from '../../api'
import * as TYPE from '../mutationTypes'

const state = {
  podcasts: []
}

const getters = {
  podcasts: state => state.podcasts
}

const actions = {
	async getPodcast({ commit }) {
    let resp = await podcastApi.getPodcast()
    commit(TYPE.SET_PODCASTS, resp.data)
    return resp
  }
}

const mutations = {
	[TYPE.SET_PODCASTS] (state, podcasts) {
    state.podcasts = podcasts
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
