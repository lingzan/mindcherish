import fetch from '../axios'

const QUESTION_API = {
    lists: 'v1/expertquestion/lists',
    get: 'v1/expertquestion/get'
}

export default {
    getQuestionList (page) {
        const _data = {
            // id: '',
            // for: 'pull-up-lastest',
            page: page,
            rows: 10
        }
        let promise = fetch(QUESTION_API.lists, _data, 'GET')
        return promise
    },
    getQuestion (id) {
        const _data = {
            id: id
        }
        let promise = fetch(QUESTION_API.get, _data, 'GET')
        return promise
    }
}
