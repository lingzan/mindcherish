import Vue from 'vue'
import Vuex from 'vuex'

import Account from './modules/account'
import User from './modules/user'
import Common from './modules/common'
import FlowStore from './modules/flow'
import Article from './modules/article'
import Question from './modules/question'
import WellCHOSEN from './modules/wellChosen'
import LIVE from './modules/live'
import MSG from './modules/msg'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        account: Account,
        flow: FlowStore,
        article: Article,
        wellChosen: WellCHOSEN,
        question: Question,
        common: Common,
        live: LIVE,
        user: User,
        msg: MSG
    }
})

export default store
