import * as types from '../mutation-types'
import archive from '../../api/archive'

const state = {
    topline: [],
    market: [],
    knowledge: [],
    toplinePage: 1,
    toplineIsOver: false,
    toplineIsEmpty: false,
    marketPage: 1,
    marketIsOver: false,
    marketIsEmpty: false,
    knowledgePage: 1,
    knowledgeIsOver: false,
    knowledgeIsEmpty: false
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
        console.log(state.toplinePage)
        if (res.code === 0) {
            state.toplinePage++
            state.topline = state.topline.concat(res.data.rows)
        } else {
            state.toplineIsEmpty = state.topline.length === 0 ? true : 0
            state.toplineIsOver = true
        }
        // state.archive = res
    },
    [types.GET_ARCHIVE_MARKET] (state, { res }) {
        if (res.code === 0) {
            state.marketPage++
            state.market = state.market.concat(res.data.rows)
        } else {
            state.marketIsEmpty = state.market.length === 0 ? true : 0
            state.marketIsOver = true
        }
    },
    [types.GET_ARCHIVE_KNOWLEDGE] (state, { res }) {
        if (res.code === 0) {
            state.knowledgePage++
            state.knowledge = state.knowledge.concat(res.data.rows)
        } else {
            state.knowledgeIsEmpty = state.knowledge.length === 0 ? true : 0
            state.knowledgeIsOver = true
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
