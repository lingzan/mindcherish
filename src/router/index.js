import Vue from 'vue'
import Router from 'vue-router'
import User from '../views/user/index'
import Center from '../views/user/center'
import Index from '../views/index/index'
import IndexFlow from '../views/index/indexFlow'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            children: [{
                path: '',
                name: 'IndexFlow',
                component: IndexFlow
            },
            {
                path: '',
                name: 'IndexFlow',
                component: IndexFlow
            }]
        },
        {
            path: '/center',
            name: 'Center',
            component: Center
        },
        {
            path: '/user',
            name: 'User',
            component: User
        }
    ]
})
