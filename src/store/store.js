import Vue from 'vue'
import Vuex from 'vuex'

import FlowStore from './modules/flow'
import Article from './modules/article'
import Question from './modules/question'
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
        question: Question,
        d: Common
    }
})

export default store
