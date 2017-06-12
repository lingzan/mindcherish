import * as types from '../mutation-types'
import QuestionApi from '../../api/question'

const state = {
    question: [],
    content: ''
}

const getters = {
    questionList: state => state.question,
    questionContent: state => state.content
}

const actions = {
    getQuestionList ({ commit }, page) {
        QuestionApi.getQuestionList(page).then(res => {
            commit(types.GET_QUESTION_LIST, {res})
        })
    }
}

const mutations = {
    [types.GET_QUESTION_LIST] (state, {res}) {
        let question = res
        if (question && typeof question === 'object' && question.code === 0) {
            state.question = question.data.rows
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
