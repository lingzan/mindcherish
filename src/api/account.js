import fetch from '../axios'

const ACCOUNT_API = {
    login: 'v1/account/login'
}

export default {
    login (username, pwd, areaCode) {
        let _data = {
            username: username,
            password: pwd,
            area_code: areaCode
        }
        let promise = fetch(ACCOUNT_API.login, _data, 'POST')
        return promise
    }
}
