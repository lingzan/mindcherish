import Vue from 'vue'
import Router from 'vue-router'
import User from '../views/user/index'
import Center from '../views/user/center'
import Index from '../views/index/index'
import IndexFlow from '../views/index/indexFlow'
import Question from '../views/index/question'
import Specify from '../views/index/specify'
import Article from '../views/index/article'

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
                path: '/question',
                name: 'Question',
                component: Question
            },
            {
                path: '/specify',
                name: 'Specify',
                component: Specify
            },
            {
                path: '/article',
                name: 'Article',
                component: Article
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
