import * as types from '../mutation-types'
import article from '../../api/article'

const state = {
    article: [],
    test: '',
    scrollTop: 0
}

const getters = {
    articleList: state => state.article,
    getScrollTop: state => state.scrollTop
}

const actions = {
    getArticleList ({ commit }) {
        article.getArticleList(products => {
            commit(types.GET_ARTICLE_LIST, {products})
        })
    },
    getArticleContent ({ commit }) {
        article.getArticleContent(test => {
            commit(types.GET_ARTICLE_CONTENT, {test})
        })
    },
    setScrollTop ({ commit }, top) {
        commit(types.SET_SCROLLTOP, top)
    }
}

const mutations = {
    [types.GET_ARTICLE_LIST] (state, { products }) {
        state.article = products
    },
    [types.GET_ARTICLE_CONTENT] (state, { test }) {
        state.test = test
    },
    [types.SET_SCROLLTOP] (state, top) {
        state.scrollTop = top
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
