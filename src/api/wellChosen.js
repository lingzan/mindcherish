import fetch from '../axios'

const WELLCHOSEN_API = {
    lists: 'v1/expertfine/lists',
    detail: 'v1/expertfinequestion/lists',
    get: 'v1/expertfine/get'
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
    },
    getWellChosenDetail (params) {
        /*
            @param
            @var fineid
            @var page
            @var rows
        */
        let promise = fetch(WELLCHOSEN_API.detail, params, 'GET')
        return promise
    },
    getWellChosen (params) {
        /*
            @param
            @var id
        */
        let promise = fetch(WELLCHOSEN_API.get, params, 'GET')
        return promise
    }
}
