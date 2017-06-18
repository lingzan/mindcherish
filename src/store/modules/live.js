import * as types from '../mutation-types'
import LiveApi from '../../api/live'

const state = {
    lives: [],
    liveContent: {}
}

const getters = {
    liveList: state => state.lives,
    liveContent: state => state.liveContent
}

const actions = {
    getLiveList ({ commit }, page) {
        LiveApi.getLiveList(page).then(res => {
            commit(types.GET_LIVE_LIST, {res})
        })
    },
    getLiveContent ({ commit }, id) {
        LiveApi.getLiveContent(id).then(res => {
            commit(types.GET_LIVE_CONTENT, {res})
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
    [types.GET_LIVE_CONTENT] (state, {res}) {
        if (res.code === 0) {
            state.liveContent = res.data
        } else {
            state.liveContent = {}
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
