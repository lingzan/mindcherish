import * as types from '../mutation-types'
import article from '../../api/article'

const state = {
    article: []
}

const getters = {
    articleList: state => state.article
}

const actions = {
    getArticleList ({ commit }) {
        article.getArticleList(products => {
            commit(types.GET_ARTICLE_LIST, {products})
        })
    }
}

const mutations = {
    [types.GET_ARTICLE_LIST] (state, { products }) {
        state.article = products
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
