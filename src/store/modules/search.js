import * as types from '../mutation-types'
import searchApi from '../../api/search'

const state = {
    hot: '',
    searchs: [],
    searchUser: [],
    searchQuestion: [],
    searchArticle: []
}

const getters = {
    hot: state => state.hot,
    searchs: state => state.searchs,
    searchUser: state => state.searchUser,
    searchQuestion: state => state.searchQuestion,
    searchArticle: state => state.searchArticle
}

const actions = {
    getHotSearch ({ commit }, params) {
        searchApi.getHotSearch(params).then(res => {
            commit(types.GET_SEARCH_HOT, {res})
        })
    },
    getExpandSearch ({ commit }, params) {
        searchApi.getExpandSearch(params).then(res => {
            commit(types.GET_SEARCH_EXPAND, {res})
        })
    },
    getCorrectedSearch ({ commit }, params) {
        searchApi.getCorrectedSearch(params).then(res => {
            commit(types.GET_SEARCH_CORRECTED, {res})
        })
    },
    getSearchUser ({ commit }, params) {
        searchApi.getSearchUser(params).then(res => {
            commit(types.GET_SEARCH_USER, {res})
        })
    },
    getSearchQuestion ({ commit }, params) {
        searchApi.getSearchQuestion(params).then(res => {
            commit(types.GET_SEARCH_QUESTION, {res})
        })
    },
    getSearchArticle ({ commit }, params) {
        searchApi.getSearchArticle(params).then(res => {
            commit(types.GET_SEARCH_ARTICLE, {res})
        })
    }
}

const mutations = {
    [types.GET_SEARCH_HOT] (state, {res}) {
        if (res.code === 0) {
            state.hot = res.data
        } else {
            state.hot = []
        }
    },
    [types.GET_SEARCH_EXPAND] (state, {res}) {
        if (res.code === 0) {
            state.searchs = res.data
        } else {
            state.searchs = []
        }
    },
    [types.GET_SEARCH_CORRECTED] (state, {res}) {
        if (res.code === 0) {
            state.searchs = res.data
        } else {
            state.searchs = []
        }
    },
    [types.GET_SEARCH_USER] (state, {res}) {
        if (res.code === 0) {
            console.log('23', typeof res)
            state.searchUser = res.data.rows
        } else {
            state.searchUser = []
        }
    },
    [types.GET_SEARCH_QUESTION] (state, {res}) {
        if (res.code === 0) {
            state.searchQuestion = res.data.rows
        } else {
            state.searchQuestion = []
        }
    },
    [types.GET_SEARCH_ARTICLE] (state, {res}) {
        if (res.code === 0) {
            state.searchArticle = res.data.rows
        } else {
            state.searchArticle = []
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
