import Vue from 'vue'
import Vuex from 'vuex'

import FlowStore from './modules/flow'
import Article from './modules/article'
import Common from './modules/common'

Vue.use(Vuex)

const moduleA = {
    state: {},
    getters: {},
    mutations: {}
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: FlowStore,
        c: Article,
        d: Common
    }
})

export default store
