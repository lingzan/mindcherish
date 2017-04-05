import Vue from 'vue'
import Router from 'vue-router'
import User from '../views/user/index'
import Center from '../views/user/center'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'User',
            component: User
        },
        {
            path: '/center',
            name: 'Center',
            component: Center
        }
    ]
})
