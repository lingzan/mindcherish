import axios from 'axios'
import qs from 'qs'
import token from './api/token'
import store from './store/store'
import * as types from './store/mutation-types'

axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((config) => {
    store.commit(types.AJAX_SEND)
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return Promise.resolve(config)
}, (error) => {
    // alert(error)
    return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
    store.commit(types.AJAX_END)
    if (res.status !== 200) {
        return Promise.reject(res)
    }
    return Promise.resolve(res)
}, (error) => {
    // alert('网络异常')
    return Promise.reject(error)
})
// 对象序列化
export function objectSerialize (object) {
    let str = []
    if (typeof object === 'object') {
        for (let i in object) {
            str.push(i + '=' + object[i])
        }
        str = str.join('&')
    }
    return str
}

export const fetch = (url, data, method = 'GET') => {
    return new Promise((resolve, reject) => {
        var options = {}
        const tokenArr = {
            client_key: '2567a5ec9705eb7ac2c984033e06189d',
            client_token: token()
        }
        const _data = Object.assign({}, data, tokenArr)
        if (method === 'POST') {
            options = {
                method: method,
                url: url,
                data: _data
            }
        } else {
            options = {
                method: method,
                url: url + '?' + objectSerialize(_data)
            }
        }

        axios(options)
        .then((response) => {
            resolve(response.data)
        })
        .catch((error) => {
            reject(error)
        })
    })
}
export default fetch
