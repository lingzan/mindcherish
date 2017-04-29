import * as types from '../mutation-types'
import article from '../../api/article'

const state = {
    article: [],
    test: ''
}

const getters = {
    articleList: state => state.article
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
    }
}

const mutations = {
    [types.GET_ARTICLE_LIST] (state, { products }) {
        state.article = products
    },
    [types.GET_ARTICLE_CONTENT] (state, { test }) {
        state.test = test
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
