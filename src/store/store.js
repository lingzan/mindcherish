import Vue from 'vue'
import Vuex from 'vuex'

import Common from './modules/common'
import FlowStore from './modules/flow'
import Article from './modules/article'
import Question from './modules/question'
import WellCHOSEN from './modules/wellChosen'
import LIVE from './modules/live'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        flow: FlowStore,
        article: Article,
        wellChosen: WellCHOSEN,
        question: Question,
        common: Common,
        live: LIVE
    }
})

export default store
