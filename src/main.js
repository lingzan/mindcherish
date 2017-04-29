// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import store from './store/store'
// import qs from 'qs'

// axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = 'http://test.mindcherish.com'

// axios.interceptors.request.use((config) => {
//     if (config.method === 'post') {
//         config.data = qs.stringify(config.data)
//     }
// },(error) => {
//     return Promise.reject(error)
// })
// Vue.prototype.$http = axios
Vue.directive('autotextarea', {
    bind: function (el, binding, vnode) {
        console.log(el, binding, vnode)
        // let $this = document.(e.target.tagName)[0]
        // $this.removeAttribute('style')
        // $this.style.height = $this.scrollHeight + 'px'
        // console.log($this.offsetHeight, $this.scrollTop, $this.scrollHeight, $this.style.height)
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
