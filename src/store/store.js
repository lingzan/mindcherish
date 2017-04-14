import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const moduleA = {
	state: {},
	getters: {},
	mutations: {}
}

const moduleB = {
	state: {},
	getters: {},
	mutations: {}
}

const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	}
}) 

export default store