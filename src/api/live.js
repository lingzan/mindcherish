import fetch from '../axios'

const LIVE_API = {
    lists: 'v1/live/lists',
    content: 'v1/live/get'
}

export default {
    getLiveList (page) {
        let _data = {
            // id: '',
            // for: 'pull-up-lastest',
            page: page,
            rows: 10
        }
        let promise = fetch(LIVE_API.lists, _data, 'GET')
        return promise
    },
    getLiveContent (id) {
        let _data = {
            // id: '',
            // for: 'pull-up-lastest',
            id: id
        }
        let promise = fetch(LIVE_API.content, _data, 'GET')
        return promise
    }
}
