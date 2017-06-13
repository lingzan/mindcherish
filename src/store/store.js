import Vue from 'vue'
import Vuex from 'vuex'

import FlowStore from './modules/flow'
import Article from './modules/article'
import Question from './modules/question'
import WellCHOSEN from './modules/wellChosen'
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
        wellChosen: WellCHOSEN,
        question: Question,
        d: Common
    }
})

export default store
