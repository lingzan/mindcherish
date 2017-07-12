import fetch from '../axios'

const ARTICLE_API = {
    lists: 'v1/article/lists',
    get: {
        api: 'v1/article/get',
        params: function (id) {
            return {
                id: id
            }
        }
    },
    relative: {
        api: 'v1/article/relative',
        params: function (id, rows) {
            return {
                archive_id: id,
                rows: rows
            }
        }
    }
}

export default {
    getArticleList (pramas) {
        let promise = fetch(ARTICLE_API.lists, pramas, 'GET')
        return promise
    },
    getArticleContent (id) {
        let promise = fetch(ARTICLE_API.get.api, {'id': id})
        return promise
    }
}
