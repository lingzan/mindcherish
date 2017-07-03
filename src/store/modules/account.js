import * as types from '../mutation-types'
import account from '../../api/account'
const state = {
    userLicense: JSON.parse(localStorage.getItem('userLicense')) || {}
}

const actions = {
    login ({ commit }, user, cb) {
        account.login(user.username, user.pwd, user.areaCode).then(res => {
            commit(types.LOGIN, {res, cb})
        })
    }
}

const mutations = {
    [types.LOGIN] (state, { res, cb }) {
        if (res.code === 0) {
            localStorage.setItem('userLicense', JSON.stringify(res.data))
            state.userLicense = res.data
            cb()
        } else {

        }
    }
}

export default {
    state,
    actions,
    mutations
}
