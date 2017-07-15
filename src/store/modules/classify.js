import * as types from '../mutation-types'
import classify from '../../api/classify'

const state = {
    classify: '',
    classifyQuestion: '',
    classifyExpert: '',
    classifyArticle: '',
    classifyLive: ''
}

const getters = {
    classify: state => state.classify,
    classifyQuestion: state => state.classifyQuestion,
    classifyExpert: state => state.classifyExpert,
    classifyArticle: state => state.classifyArticle,
    classifyLive: state => state.classifyLive
}

const actions = {
    getClassify ({ commit }, params) {
        classify.getClassify(params).then(res => {
            commit(types.GET_CLASSIFY, {res})
        })
    },
    getClassifyQuestion ({ commit }, params) {
        classify.getClassifyQuestion(params).then(res => {
            commit(types.GET_CLASSIFY_QUESTION, {res})
        })
    },
    getClassifyExpert ({ commit }, params) {
        classify.getClassifyExpert(params).then(res => {
            commit(types.GET_CLASSIFY_EXPERT, {res})
        })
    },
    getClassifyArticle ({ commit }, params) {
        classify.getClassifyArticle(params).then(res => {
            commit(types.GET_CLASSIFY_ARTICLE, {res})
        })
    },
    getClassifyLive ({ commit }, params) {
        classify.getClassifyLive(params).then(res => {
            commit(types.GET_CLASSIFY_LIVE, {res})
        })
    },
    setScrollTop ({ commit }, top) {
        commit(types.SET_SCROLLTOP, top)
    }
}

const mutations = {
    [types.GET_CLASSIFY] (state, { res }) {
        if (res.code === 0) {
            state.classify = res.data
        } else {
            state.classify = []
        }
        // state.classify = res
    },
    [types.GET_CLASSIFY_QUESTION] (state, { res }) {
        if (res.code === 0) {
            state.classifyQuestion = res.data.rows
        } else {
            state.classifyQuestion = {}
        }
    },
    [types.GET_CLASSIFY_EXPERT] (state, { res }) {
        if (res.code === 0) {
            state.classifyExpert = res.data.rows
        } else {
            state.classifyExpert = {}
        }
    },
    [types.GET_CLASSIFY_ARTICLE] (state, { res }) {
        if (res.code === 0) {
            state.classifyArticle = res.data.rows
        } else {
            state.classifyArticle = {}
        }
    },
    [types.GET_CLASSIFY_LIVE] (state, { res }) {
        if (res.code === 0) {
            state.classifyLive = res.data.rows
        } else {
            state.classifyLive = {}
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
