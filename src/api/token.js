import md5 from 'md5'
import * as config from './config.js'
const token = function () {
    let clientSecret = config.clientSecret
    let randomStr = setRandomStr(4)
    let md5Str = md5(randomStr + clientSecret)
    let md5SubStr = md5Str.substr(0, 12)
    let timeStr = (parseInt(new Date().getTime() / 1000) - randomStr).toString(16)
    let tokenStr = reverseStr(randomStr + md5SubStr + timeStr)
    return tokenStr
}

const setRandomStr = (num) => {
    let randomStr = ''
    for (let i = 0; i < num; i++) {
        randomStr += Math.ceil(Math.random() * 9)
    }
    return randomStr
}

const reverseStr = (str) => {
    let _str = str.split('')
    let _reverse = _str.reverse()
    let _reverseStr = _reverse.join('')
    return _reverseStr
}

export default token
