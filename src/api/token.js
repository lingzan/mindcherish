import md5 from 'md5'

const token = function () {
    let clientSecret = '8jYaPklBrD0xmmpyliOIwHmD6shw82id'
    let randomStr = setRandomStr(4)
    let md5Str = md5(randomStr + clientSecret)
    let md5SubStr = md5Str.substr(0, 12)
    let timeStr = (new Date() - randomStr).toString(16)
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
