import fetch from '../axios'

const USER_API = {
    get: 'v1/user/get'
}

export default {
    get (id) {
        let _data = {
            id: id
        }
        let promise = fetch(USER_API.get, _data, 'GET')
        return promise
    }
}
