import * as types from '../mutation-types'
import user from '../../api/user'

const state = {
    user: '',
    stat: ''
}

const getters = {
    user: state => state.user
}

const actions = {
    getUserInfo ({ commit }, id) {
        user.get(id).then(res => {
            commit(types.GET_USER, {res})
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
