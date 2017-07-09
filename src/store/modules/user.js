import * as types from '../mutation-types'
import user from '../../api/user'

const state = {
    user: '',
    stat: '',
    wallet: '',
    userLive: '',
    userQuestion: '',
    userReward: '',
    userGet: '',
    userActivity: '',
    userArticle: '',
    userCollect: '',
    userDraft: '',
    userAnswer: '',
    userBill: ''
}

const getters = {
    user: state => state.user,
    wallet: state => state.wallet,
    userLive: state => state.userLive,
    userQuestion: state => state.userQuestion,
    userReward: state => state.userReward,
    userGet: state => state.userGet,
    userActivity: state => state.userActivity,
    userArticle: state => state.userArticle,
    userCollect: state => state.userCollect,
    userDraft: state => state.userDraft,
    userAnswer: state => state.userAnswer,
    userBill: state => state.userBill
}

const actions = {
    getUserInfo ({ commit }, id) {
        user.get(id).then(res => {
            commit(types.GET_USER, {res})
        })
    },
    wallet ({commit}, license) {
        user.wallet(license.userid, license.userToken).then(res => {
            commit(types.GET_WALLET, {res})
        })
    },
    userLive ({commit}, params) {
        user.userLive(params).then(res => {
            commit(types.GET_USER_LIVE, {res})
        })
    },
    userQuestion ({commit}, params) {
        user.userQuestion(params).then(res => {
            commit(types.GET_USER_QUESTION, {res})
        })
    },
    userReward ({commit}, params) {
        user.userReward(params).then(res => {
            commit(types.GET_USER_REWARD, {res})
        })
    },
    userGet ({commit}, params) {
        user.userGet(params).then(res => {
            commit(types.GET_USER_GET, {res})
        })
    },
    userActivity ({commit}, params) {
        user.userActivity(params).then(res => {
            commit(types.GET_USER_ACTIVITY, {res})
        })
    },
    userArticle ({commit}, params) {
        user.userArticle(params).then(res => {
            commit(types.GET_USER_ARTICLE, {res})
        })
    },
    userCollect ({commit}, params) {
        user.userCollect(params).then(res => {
            commit(types.GET_USER_COLLECT, {res})
        })
    },
    userDraft ({commit}, params) {
        user.userDraft(params).then(res => {
            commit(types.GET_USER_DRAFT, {res})
        })
    },
    userAnswer ({commit}, params) {
        user.userAnswer(params).then(res => {
            commit(types.GET_USER_ANSWER, {res})
        })
    },
    userBill ({commit}, params) {
        user.orderDetail(params).then(res => {
            commit(types.GET_USER_BILL, {res})
        })
    }
}

const mutations = {
    [types.GET_USER] (state, {res}) {
        if (res.code === 0) {
            state.user = res.data
        } else {
            state.user = {}
        }
    },
    [types.GET_WALLET] (state, {res}) {
        if (res.code === 0) {
            state.wallet = res.data
        } else {
            state.wallet = {}
        }
    },
    [types.GET_USER_LIVE] (state, {res}) {
        if (res.code === 0) {
            state.userLive = res.data.rows
        } else {
            state.userLive = {}
        }
    },
    [types.GET_USER_QUESTION] (state, {res}) {
        if (res.code === 0) {
            state.userQuestion = res.data.rows
        } else {
            state.userQuestion = {}
        }
    },
    [types.GET_USER_GET] (state, {res}) {
        if (res.code === 0) {
            state.userGet = res.data.rows
        } else {
            state.userGet = {}
        }
    },
    [types.GET_USER_REWARD] (state, {res}) {
        if (res.code === 0) {
            state.userReward = res.data.rows
        } else {
            state.userReward = {}
        }
    },
    [types.GET_USER_ACTIVITY] (state, {res}) {
        if (res.code === 0) {
            state.userActivity = res.data.rows
        } else {
            state.userActivity = {}
        }
    },
    [types.GET_USER_ARTICLE] (state, {res}) {
        if (res.code === 0) {
            state.userArticle = res.data.rows
        } else {
            state.userArticle = {}
        }
    },
    [types.GET_USER_COLLECT] (state, {res}) {
        if (res.code === 0) {
            state.userCollect = res.data.rows
        } else {
            state.userCollect = {}
        }
    },
    [types.GET_USER_DRAFT] (state, {res}) {
        if (res.code === 0) {
            state.userDraft = res.data.rows
        } else {
            state.userDraft = {}
        }
    },
    [types.GET_USER_ANSWER] (state, {res}) {
        if (res.code === 0) {
            state.userAnswer = res.data.rows
        } else {
            state.userAnswer = {}
        }
    },
    [types.GET_USER_BILL] (state, {res}) {
        if (res.code === 0) {
            state.userBill = res.data.rows
        } else {
            state.userBill = {}
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
