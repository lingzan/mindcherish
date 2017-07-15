import fetch from '../axios'

const CLASSIFY_API = {
    get: 'v1/expertclassify/get',
    question: 'v1/expertclassifyquestion/lists',
    expert: 'v1/expertclassifyuser/lists',
    article: 'v1/expertclassifyarticle/lists',
    live: 'v1/expertclassifylive/lists'
}

export default {
    getClassify (pramas) {
        /*
            @param
            @var id
        */
        let promise = fetch(CLASSIFY_API.get, pramas, 'GET')
        return promise
    },
    getClassifyQuestion (pramas) {
        /*
            @param
            @var classifyid
            @var get_userstat 1
            @var flag_order c
            @var page 1
            @var rows
        */
        let promise = fetch(CLASSIFY_API.question, pramas, 'GET')
        return promise
    },
    getClassifyExpert (pramas) {
        /*
            @param
            @var classifyid
            @var get_userstat 1
            @var flag_order c
            @var page 1
            @var rows
        */
        let promise = fetch(CLASSIFY_API.expert, pramas, 'GET')
        return promise
    },
    getClassifyArticle (pramas) {
        /*
            @param
            @var classifyid
            @var get_userstat 1
            @var flag_order c
            @var page 1
            @var rows
        */
        let promise = fetch(CLASSIFY_API.article, pramas, 'GET')
        return promise
    },
    getClassifyLive (pramas) {
        /*
            @param
            @var classifyid
            @var get_userstat 1
            @var flag_order c
            @var page 1
            @var rows
        */
        let promise = fetch(CLASSIFY_API.live, pramas, 'GET')
        return promise
    }
}
