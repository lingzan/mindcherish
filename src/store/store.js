import Vue from 'vue'
import Vuex from 'vuex'

import Common from './modules/common'
import FlowStore from './modules/flow'
import Article from './modules/article'
import Question from './modules/question'
import WellCHOSEN from './modules/wellChosen'
import LIVE from './modules/live'

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
        d: Common,
        live: LIVE
    }
})

export default store
