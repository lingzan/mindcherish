import * as types from '../mutation-types'
import msg from '../../api/msg'

const state = {
    newMsg: [],
    msgFans: [],
    msgFocus: [],
    msgDomain: [],
    msgInstr: [],
    msgNotice: [],
    page: 1,
    isOver: false,
    isEmpty: false,
    msgFansPage: 1,
    msgFansIsOver: false,
    msgFansIsEmpty: false,
    msgFocusPage: 1,
    msgFocusIsOver: false,
    msgFocusIsEmpty: false,
    msgDomainPage: 1,
    msgDomainIsOver: false,
    msgDomainIsEmpty: false,
    msgInstrPage: 1,
    msgInstrIsOver: false,
    msgInstrIsEmpty: false,
    msgNoticePage: 1,
    msgNoticeIsOver: false,
    msgNoticeIsEmpty: false,
    msgChat: [],
    msgChatPage: 1,
    msgChatIsOver: false,
    msgChatIsEmpty: false
}

const getters = {
    newMsg: state => state.newMsg,
    msgFans: state => state.msgFans,
    msgFocus: state => state.msgFocus,
    msgDomain: state => state.msgDomain,
    msgInstr: state => state.msgInstr,
    msgNotice: state => state.msgNotice,
    msgChat: state => state.msgChat
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
    },
    getMsgNotice ({ commit }, params) {
        msg.msgNotice(params).then(res => {
            commit(types.GET_MSG_NOTICE, {res})
        })
    },
    getMsgChat ({ commit }, params) {
        msg.msgChat(params).then(res => {
            commit(types.GET_MSG_CHAT, {res})
        })
    },
    addMsg ({ commit }, params) {
        let cb = params.cb
        delete params.cb
        msg.addMsg(params).then(res => {
            res.cb = cb
            commit(types.GET_ADD_MSG, {res})
        })
    }
}

const mutations = {
    [types.GET_NEW_MSG] (state, { res }) {
        if (res.code === 0) {
            state.page++
            state.newMsg = state.newMsg.concat(res.data.rows)
        } else {
            state.isEmpty = state.newMsg.length === 0 ? true : 0
            state.isOver = true
        }
    },
    [types.GET_MSG_FANS] (state, { res }) {
        if (res.code === 0) {
            state.msgFansPage++
            state.msgFans = state.msgFans.concat(res.data.rows)
        } else {
            state.msgFansIsEmpty = state.msgFans.length === 0 ? true : 0
            state.msgFansIsOver = true
        }
    },
    [types.GET_MSG_FOCUS] (state, { res }) {
        if (res.code === 0) {
            state.msgFocusPage++
            state.msgFocus = state.msgFocus.concat(res.data.rows)
        } else {
            state.msgFocusIsEmpty = state.msgFocus.length === 0 ? true : 0
            state.msgFocusIsOver = true
        }
    },
    [types.GET_MSG_DOMAIN] (state, { res }) {
        if (res.code === 0) {
            state.msgDomainPage++
            state.msgDomain = state.msgDomain.concat(res.data.rows)
        } else {
            state.msgDomainIsEmpty = state.msgDomain.length === 0 ? true : 0
            state.msgDomainIsOver = true
        }
    },
    [types.GET_MSG_INSTR] (state, { res }) {
        if (res.code === 0) {
            state.msgInstrPage++
            state.msgInstr = state.msgInstr.concat(res.data.rows)
        } else {
            state.msgInstrIsEmpty = state.msgInstr.length === 0 ? true : 0
            state.msgInstrIsOver = true
        }
    },
    [types.GET_MSG_NOTICE] (state, { res }) {
        if (res.code === 0) {
            state.msgNoticePage++
            state.msgNotice = state.msgNotice.concat(res.data.rows)
        } else {
            state.msgNoticeIsEmpty = state.msgNotice.length === 0 ? true : 0
            state.msgNoticeIsOver = true
        }
    },
    [types.GET_MSG_CHAT] (state, { res }) {
        if (res.code === 0) {
            state.msgChatPage++
            state.msgChat = state.msgChat.concat(res.data.rows)
        } else {
            state.msgChatIsEmpty = state.msgChat.length === 0 ? true : 0
            state.msgChatIsOver = true
        }
    },
    [types.GET_ADD_MSG] (state, { res }) {
        if (res.code === 0) {
            res.cb(true)
            // msgChat.shift(_msg)
        } else {
            res.cb(false)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
