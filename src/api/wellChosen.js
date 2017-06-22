import fetch from '../axios'

const WELLCHOSEN_API = {
    lists: 'v1/expertfine/lists'
}

export default {
    getWellChosenList (params) {
        // let _data = {
        //     // id: '',
        //     // for: 'pull-up-lastest',
        //     page: page,
        //     rows: 10
        // }
        let promise = fetch(WELLCHOSEN_API.lists, params, 'GET')
        return promise
    }
}
