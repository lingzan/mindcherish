import * as types from '../mutation-types'
import account from '../../api/account'
import md5 from 'md5'

const state = {
    userLicense: JSON.parse(localStorage.getItem('userLicense')) || {}
}

const actions = {
    login ({ commit }, params) {
        console.log('cb', params.cb)
        account.login(params.user.username, md5(params.user.pwd), params.user.areaCode).then(res => {
            res.cb = params.cb
            commit(types.LOGIN, {res})
        })
    }
}

const mutations = {
    [types.LOGIN] (state, { res }) {
        console.log(res)
        if (res.code === 0) {
            localStorage.setItem('userLicense', JSON.stringify(res.data))
            state.userLicense = res.data
            res.cb()
        } else {

        }
    }
}

export default {
    state,
    actions,
    mutations
}
