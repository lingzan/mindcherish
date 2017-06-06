import * as types from '../mutation-types'
import FlowApi from '../../api/flow'

const state = {
    flow: [],
    flowLastId: ''
}

const getters = {
    flowList: state => state.flow,
    flowLastId: state => state.flowLastId
}

const actions = {
    getFlowList ({ commit }, id) {
        FlowApi.getFlowList(id).then(res => {
            commit(types.GET_FLOW_LIST, {res})
        })
    }
}

const mutations = {
    [types.GET_FLOW_LIST] (state, {res}) {
        let flow = res
        if (flow && typeof flow === 'object' && flow.code === 0) {
            state.flow = flow.data.rows
            state.flowLastId = state.flow[state.flow.length - 1].id
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
