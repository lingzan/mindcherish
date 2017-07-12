import fetch from '../axios'

const LIVE_API = {
    lists: 'v1/live/lists',
    content: 'v1/live/get',
    payer: 'v1/live_payer/lists'
}

export default {
    getLiveList (params) {
        let promise = fetch(LIVE_API.lists, params, 'GET')
        return promise
    },
    getLive (id) {
        let _data = {
            // id: '',
            // for: 'pull-up-lastest',
            id: id
        }
        let promise = fetch(LIVE_API.content, _data, 'GET')
        return promise
    },
    getLivePayer (archiveId, page = 1) {
        let _data = {
            archive_id: archiveId,
            page: 1,
            rows: 5
        }
        let promise = fetch(LIVE_API.payer, _data, 'GET')
        return promise
    }
}
