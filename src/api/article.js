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
    getArticleList (page) {
        let _data = {
            // id: '',
            // for: 'pull-up-lastest',
            page: page,
            rows: 10
        }
        let promise = fetch(ARTICLE_API.lists, _data, 'GET')
        return promise
    },
    getArticleContent (cb) {
        // console.log(cb, 'params')
        let promise = fetch(ARTICLE_API.get.api)
        console.log(promise)
        promise.then((res) => {
            cb(res)
        }, () => {
            alert('失败')
        })
        // cb(fetch('v1/article/lists'))
    }
}
