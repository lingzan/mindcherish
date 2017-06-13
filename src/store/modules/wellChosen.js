import * as types from '../mutation-types'
import wellChosenApi from '../../api/wellChosen'

const state = {
    wellChosen: []
}

const getters = {
    wellChosenList: state => state.wellChosen
}

const actions = {
    getWellChosenList ({ commit }, page) {
        wellChosenApi.getWellChosenList(page).then(res => {
            commit(types.GET_WELLCHOSEN_LIST, {res})
        })
    }
}

const mutations = {
    [types.GET_WELLCHOSEN_LIST] (state, {res}) {
        let wellChosen = res
        if (wellChosen && typeof wellChosen === 'object' && wellChosen.code === 0) {
            state.wellChosen = wellChosen.data.rows
        } else {
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
