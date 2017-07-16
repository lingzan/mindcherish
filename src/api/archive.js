import fetch from '../axios'

const ARCHIVE_API = {
    archive: 'v1/archive/lists'
}

export default {
    getTop (params) {
        /*
            @var page:1
            @var rows:6
            @var headline:1
            @var get_userstat:1
            @var arctype:expert_question|article|expert
        */
        let promise = fetch(ARCHIVE_API.archive, params, 'GET')
        return promise
    },
    getMarket (params) {
        /*
            @var page:1
            @var rows:6
            @var classify_level:market
            @var arctype:expert_question|article
        */
        let promise = fetch(ARCHIVE_API.archive, params, 'GET')
        return promise
    },
    getKnowledge (params) {
        /*
            @var page:1
            @var rows:6
            @var classify_level:knowledga
            @var arctype:expert_question|article
        */
        let promise = fetch(ARCHIVE_API.archive, params, 'GET')
        return promise
    }
}
