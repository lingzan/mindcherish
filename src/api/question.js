import fetch from '../axios'

const QUESTION_API = {
    lists: 'v1/expertquestion/lists'
}

export default {
    getQuestionList (page) {
        let _data = {
            // id: '',
            // for: 'pull-up-lastest',
            page: page,
            rows: 10
        }
        let promise = fetch(QUESTION_API.lists, _data, 'GET')
        return promise
    }
}
