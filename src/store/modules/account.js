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
        let _registerInfo = {}
        _registerInfo.account = params.registerInfo.account
        _registerInfo.code = params.registerInfo.code
        _registerInfo.password = md5(params.registerInfo.pwd)
        _registerInfo.invitecode = params.registerInfo.invitecode
        _registerInfo.area_code = params.registerInfo.areaCode
        _registerInfo.verify = params.registerInfo.verify
        account.register(_registerInfo).then(res => {
            res.cb = params.cb
            commit(types.REGISTER, {res})
        })
    },
    verifyCode ({commit}, params) {
        account.verifyCode(params.registerInfo.account, params.registerInfo.verifycode, params.registerInfo.areaCode, params.registerInfo.require).then(res => {
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
            // localStorage.setItem('userLicense', JSON.stringify(res.data))
            // state.userLicense = res.data
            // res.cb()
        } else {

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
