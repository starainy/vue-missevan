import { albumApi } from '../../api'
import * as TYPE from '../mutationTypes'

const state = {
  albums: []
}

const getters = {
  albums: state => state.albums
}

const actions = {
	async getAlbums({ commit }) {
    let resp = await albumApi.getAlbum()
    commit(TYPE.SET_ALBUMS, resp.data)
    return resp.data
  }
}

const mutations = {
	[TYPE.SET_ALBUMS] (state, albums) {
    state.albums = albums
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
