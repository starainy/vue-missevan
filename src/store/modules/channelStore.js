import { channelApi } from '../../api'
import * as TYPE from '../mutationTypes'

const state = {
  channels: []
}

const getters = {
  channels: state => state.channels
}

const actions = {
	async getChannels({ commit }) {
    let resp = await channelApi.getChannel()
    commit(TYPE.SET_CHANNEL, resp.data)
    return resp.data
  }
}

const mutations = {
	[TYPE.SET_CHANNEL] (state, channels) {
    state.channels = channels
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
