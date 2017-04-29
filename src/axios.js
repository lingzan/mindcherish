import axios from 'axios'
// import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// axios.interceptors.request.use((config) => {
//     console.log(console)
//     if (config.method === 'post') {
//         config.data = qs.stringify(config.data)
//     }
//     return config
// }, (error) => {
//     // alert(error)
//     return Promise.reject(error)
// })

axios.interceptors.response.use((res) => {
    console.log(res)
    if (res.status !== '200') {
        // alert(res.data.msg)
        return Promise.reject(res)
    }
    return res
}, (error) => {
    // alert('网络异常')
    return Promise.reject(error)
})

export default axios
