import * as types from '../mutation-types'
import msg from '../../api/msg'

const state = {
    newMsg: '',
    msgFans: '',
    msgFocus: '',
    msgDomain: '',
    msgInstr: ''
}

const getters = {
    newMsg: state => state.newMsg,
    msgFans: state => state.msgFans,
    msgFocus: state => state.msgFocus,
    msgDomain: state => state.msgDomain,
    msgInstr: state => state.msgInstr
}

const actions = {
    getNewMsg ({ commit }, params) {
        msg.newMsg(params).then(res => {
            commit(types.GET_NEW_MSG, {res})
        })
    },
    getMsgFans ({ commit }, params) {
        msg.msgFans(params).then(res => {
            commit(types.GET_MSG_FANS, {res})
        })
    },
    getMsgFocus ({ commit }, params) {
        msg.msgFans(params).then(res => {
            commit(types.GET_MSG_FOCUS, {res})
        })
    },
    getMsgDomain ({ commit }, params) {
        msg.msgDomain(params).then(res => {
            commit(types.GET_MSG_DOMAIN, {res})
        })
    },
    getMsgInstr ({ commit }, params) {
        msg.msgInstr(params).then(res => {
            commit(types.GET_MSG_INSTR, {res})
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
    },
    [types.GET_MSG_FANS] (state, { res }) {
        if (res.code === 0) {
            state.msgFans = res.data.rows
        } else {
            state.msgFans = []
        }
    },
    [types.GET_MSG_FOCUS] (state, { res }) {
        if (res.code === 0) {
            state.msgFocus = res.data.rows
        } else {
            state.msgFocus = []
        }
    },
    [types.GET_MSG_DOMAIN] (state, { res }) {
        if (res.code === 0) {
            state.msgDomain = res.data.rows
        } else {
            state.msgDomain = []
        }
    },
    [types.GET_MSG_INSTR] (state, { res }) {
        if (res.code === 0) {
            state.msgInstr = res.data.rows
        } else {
            state.msgInstr = []
        }
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
