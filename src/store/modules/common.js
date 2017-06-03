import * as types from '../mutation-types'

const state = {
    loading: false
}

const getters = {
    getLoad: state => state.loading
}

const mutations = {
    [types.AJAX_SEND] (state) {
        state.loading = true
    },
    [types.AJAX_END] (state) {
        state.loading = false
    }
}

export default {
    state,
    getters,
    mutations
}
