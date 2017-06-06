import fetch from '../axios'

const FLOW_API = {
    lists: 'v1/feed/lists'
}

export default {
    getFlowList (id) {
        let _data = {
            id: '',
            for: 'pull-up-lastest',
            rows: 10,
            data_type: '',
            userid: ''
        }
        let promise = fetch(FLOW_API.lists, _data, 'GET')
        return promise
    }
}
