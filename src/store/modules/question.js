import * as types from '../mutation-types'
import QuestionApi from '../../api/question'

const state = {
    questions: [],
    question: ''
}

const getters = {
    questionList: state => state.questions,
    question: state => state.question
}

const actions = {
    getQuestionList ({ commit }, page) {
        QuestionApi.getQuestionList(page).then(res => {
            commit(types.GET_QUESTION_LIST, {res})
        })
    },
    getQuestion ({ commit }, id) {
        QuestionApi.getQuestion(id).then(res => {
            commit(types.GET_QUESTION, {res})
        })
    }
}

const mutations = {
    [types.GET_QUESTION_LIST] (state, {res}) {
        let questions = res
        if (questions && typeof questions === 'object' && questions.code === 0) {
            state.questions = questions.data.rows
        } else {
        }
    },
    [types.GET_QUESTION] (state, {res}) {
        let question = res
        if (question && typeof question === 'object' && question.code === 0) {
            state.question = question.data
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
