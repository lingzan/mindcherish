import fetch from '../axios'

const ACCOUNT_API = {
    login: 'v1/account/login',
    register: 'v1/account/register',
    verifyCode: 'v1/sms/verify'
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
    },
    register (resgisterInfo) {
        let promise = fetch(ACCOUNT_API.register, resgisterInfo, 'GET')
        return promise
    },
    verifyCode (account, verifycode, areaCode, require) {
        let _data = {
            account: account,
            verifycode: verifycode,
            area_code: areaCode,
            require: require
        }
        let promise = fetch(ACCOUNT_API.verifyCode, _data, 'GET')
        return promise
    }
}
