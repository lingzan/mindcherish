// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

// import axios from 'axios'
import store from './store/store'
import Loading from './components/widget/loading'
// import qs from 'qs'
Vue.use(Vuex)

Vue.directive('autotextarea', {
    bind: function (el, binding, vnode) {
        console.log(el, binding, vnode)
        // let $this = document.(e.target.tagName)[0]
        // $this.removeAttribute('style')
        // $this.style.height = $this.scrollHeight + 'px'
        // console.log($this.offsetHeight, $this.scrollTop, $this.scrollHeight, $this.style.height)
    }
})
Vue.directive('infinite-scroll', {
    bind: function (el, binding, vnode) {
        console.log(el, binding.value, vnode)
        window.addEventListener('scroll', function () {
            console.log(3)
        })
        // let $this = document.(e.target.tagName)[0]
        // $this.removeAttribute('style')
        // $this.style.height = $this.scrollHeight + 'px'
        // console.log($this.offsetHeight, $this.scrollTop, $this.scrollHeight, $this.style.height)
    }
})
Vue.component('loading-component', Loading)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
