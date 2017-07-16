import * as types from '../mutation-types'
import archive from '../../api/archive'

const state = {
    topline: '',
    market: '',
    knowledge: ''
}

const getters = {
    topline: state => state.topline,
    market: state => state.market,
    knowledge: state => state.knowledge
}

const actions = {
    getTop ({ commit }, params) {
        archive.getTop(params).then(res => {
            commit(types.GET_ARCHIVE_TOP, {res})
        })
    },
    getMarket ({ commit }, params) {
        archive.getMarket(params).then(res => {
            commit(types.GET_ARCHIVE_MARKET, {res})
        })
    },
    getKnowledge ({ commit }, params) {
        archive.getKnowledge(params).then(res => {
            commit(types.GET_ARCHIVE_KNOWLEDGE, {res})
        })
    }
}

const mutations = {
    [types.GET_ARCHIVE_TOP] (state, { res }) {
        console.log(res)
        if (res.code === 0) {
            state.topline = res.data.rows
        } else {
            state.topline = []
        }
        // state.archive = res
    },
    [types.GET_ARCHIVE_MARKET] (state, { res }) {
        if (res.code === 0) {
            state.market = res.data.rows
        } else {
            state.market = []
        }
    },
    [types.GET_ARCHIVE_KNOWLEDGE] (state, { res }) {
        if (res.code === 0) {
            state.knowledge = res.data.rows
        } else {
            state.knowledge = []
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
