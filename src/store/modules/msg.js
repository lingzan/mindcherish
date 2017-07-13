import * as types from '../mutation-types'
import msg from '../../api/msg'

const state = {
    newMsg: []
}

const getters = {
    newMsg: state => state.newMsg
}

const actions = {
    getNewMsg ({ commit }, params) {
        msg.newMsg(params).then(res => {
            commit(types.GET_NEW_MSG, {res})
        })
    }
}

const mutations = {
    [types.GET_NEW_MSG] (state, { res }) {
        if (res.code === 0) {
            state.newMsg = res.data.rows
        } else {
            state.newMsg = []
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
