import fetch from '../axios'

const SEARCH_API = {
    hot: 'v1/xunsearch/hot',
    expand: 'v1/xunsearch/expanded',
    corrected: 'v1/xunsearch/corrected',
    searchUser: 'v1/user/search',
    searchQuestion: 'v1/expertquestion/search',
    searchArticle: 'v1/article/search'
}

export default {
    getHotSearch (params) {
        /*
            @var page:1
            @var rows:6
        */
        let promise = fetch(SEARCH_API.hot, params, 'GET')
        return promise
    },
    getExpandSearch (params) {
        /*
            @var key
        */
        let promise = fetch(SEARCH_API.expand, params, 'GET')
        return promise
    },
    getCorrectedSearch (params) {
        /*
            @var key
        */
        let promise = fetch(SEARCH_API.corrected, params, 'GET')
        return promise
    },
    getSearchUser (params) {
        let promise = fetch(SEARCH_API.searchUser, params, 'GET')
        return promise
    },
    getSearchQuestion (params) {
        let promise = fetch(SEARCH_API.searchQuestion, params, 'GET')
        return promise
    },
    getSearchArticle (params) {
        let promise = fetch(SEARCH_API.searchArticle, params, 'GET')
        return promise
    }
}
