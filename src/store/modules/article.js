import * as types from '../mutation-types'
import article from '../../api/article'

const state = {
    article: [],
    articleContent: '',
    scrollTop: 0
}

const getters = {
    articleList: state => state.article,
    articleContent: state => state.articleContent,
    getScrollTop: state => state.scrollTop
}

const actions = {
    getArticleList ({ commit }, page) {
        article.getArticleList(page).then(res => {
            commit(types.GET_ARTICLE_LIST, {res})
        })
    },
    getArticleContent ({ commit }, id) {
        article.getArticleContent(id).then(res => {
            commit(types.GET_ARTICLE_CONTENT, {res})
        })
    },
    setScrollTop ({ commit }, top) {
        commit(types.SET_SCROLLTOP, top)
    }
}

const mutations = {
    [types.GET_ARTICLE_LIST] (state, { res }) {
        if (res.code === 0) {
            state.article = res.data.rows
        } else {
            state.article = []
        }
        // state.article = res
    },
    [types.GET_ARTICLE_CONTENT] (state, { res }) {
        if (res.code === 0) {
            state.articleContent = res.data
        } else {
            state.articleContent = {}
        }
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
