import * as types from '../mutation-types'
import account from '../../api/account'
import md5 from 'md5'

const state = {
    userLicense: JSON.parse(localStorage.getItem('userLicense')) || {}
}

const actions = {
    login ({ commit }, params) {
        account.login(params.user.username, md5(params.user.pwd), params.user.areaCode).then(res => {
            res.cb = params.cb
            commit(types.LOGIN, {res})
        })
    },
    register ({commit}, params) {
        let _info = {}
        _info.account = params.info.account
        _info.code = params.info.code
        _info.password = md5(params.info.pwd)
        _info.invitecode = params.info.invitecode
        _info.area_code = params.info.areaCode
        _info.verify = params.info.verify
        account.register(_info).then(res => {
            res.cb = params.cb
            commit(types.REGISTER, {res})
        })
    },
    fwd ({commit}, params) {
        let _info = []
        _info.push(params.info.account)
        _info.push(params.info.code)
        _info.push(params.info.areaCode)
        _info.push(params.info.pwd)
        _info.push(params.info.pwdConfirm)
        _info.push(params.info.verify)
        account.fwd(..._info).then(res => {
            res.cb = params.cb
            commit(types.FWD, {res})
        })
    },
    verifyCode ({commit}, params) {
        account.verifyCode(params.info.account, params.info.verifycode, params.info.areaCode, params.info.require).then(res => {
            res.cb = params.cb
            commit(types.VERIFYCODE, {res})
        })
    }
}

const mutations = {
    [types.LOGIN] (state, { res }) {
        if (res.code === 0) {
            localStorage.setItem('userLicense', JSON.stringify(res.data))
            state.userLicense = res.data
            res.cb()
        } else {

        }
    },
    [types.REGISTER] (state, {res}) {
        if (res.code === 0) {
            res.cb(0)
            // localStorage.setItem('userLicense', JSON.stringify(res.data))
            // state.userLicense = res.data
            // res.cb()
        } else {
            res.cb(res.code)
        }
    },
    [types.FWD] (state, {res}) {
        if (res.code === 0) {
            res.cb(0)
            // localStorage.setItem('userLicense', JSON.stringify(res.data))
            // state.userLicense = res.data
            // res.cb()
        } else {
            res.cb(res.code)
        }
    },
    [types.VERIFYCODE] (state, {res}) {
        if (res.code === 0) {
            // localStorage.setItem('userLicense', JSON.stringify(res.data))
            // state.userLicense = res.data
            // res.cb()
        } else {

        }
    }
}

export default {
    state,
    actions,
    mutations
}
