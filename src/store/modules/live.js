import * as types from '../mutation-types'
import LiveApi from '../../api/live'

const state = {
    lives: [],
    live: {},
    payer: []
}

const getters = {
    liveList: state => state.lives,
    live: state => state.live,
    payer: state => state.payer
}

const actions = {
    getLiveList ({ commit }, page) {
        LiveApi.getLiveList(page).then(res => {
            commit(types.GET_LIVE_LIST, {res})
        })
    },
    getLive ({ commit }, id) {
        LiveApi.getLive(id).then(res => {
            commit(types.GET_LIVE, {res})
        })
    },
    getLivePayer ({ commit }, archiveId) {
        LiveApi.getLivePayer(archiveId).then(res => {
            commit(types.GET_LIVE_PAYER, {res})
        })
    }
}

const mutations = {
    [types.GET_LIVE_LIST] (state, {res}) {
        if (res.code === 0) {
            state.lives = res.data.rows
        } else {
            state.lives = []
        }
    },
    [types.GET_LIVE] (state, {res}) {
        if (res.code === 0) {
            state.live = res.data
        } else {
            state.live = {}
        }
    },
    [types.GET_LIVE_PAYER] (state, {res}) {
        if (res.code === 0) {
            state.payer = res.data.rows
        } else {
            state.payer = {}
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
