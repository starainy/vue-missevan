import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import ringsStore from './modules/ringsStore'
import podcastStore from './modules/podcastStore'
import partitionStore from './modules/partitionStore'
import albumStore from './modules/albumStore'
import recommendStore from './modules/recommendStore'
import channelStore from './modules/channelStore'

const state = {
	requesting: false,
	error: {}
}

const getters = {
	// requesting: state => state.requesting,
	// error: state => state.error
}

export default new Vuex.Store({
	state,
	getters,
	modules: {
		ringsStore,
		podcastStore,
    partitionStore,
    albumStore,
    recommendStore,
    channelStore
	}
})
