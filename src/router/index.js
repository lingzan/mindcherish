import Vue from 'vue'
import Router from 'vue-router'
import User from '../views/user/index'
import Center from '../views/user/center'
import Index from '../views/index/index'
import IndexFlow from '../views/index/indexFlow'
import Question from '../views/index/question'
import Special from '../views/index/special'
import Article from '../views/index/article'
import Msg from '../views/msg/index'
import Comment from '../views/comment/index'
import CommentDetail from '../views/comment/detail'
import MsgNotice from '../components/msg/notice'
import MsgChat from '../components/msg/chat'
import MsgAttention from '../components/msg/attention'

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
                path: '/special',
                name: 'Special',
                component: Special
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
        },
        {
            path: '/msg',
            name: 'Msg',
            component: Msg,
            children: [{
                path: '/msg/notice',
                name: 'MsgNotice',
                component: MsgNotice
            },
            {
                path: '/msg/chat',
                name: 'MsgChat',
                component: MsgChat
            },
            {
                path: '/msg/attention',
                name: 'MsgAttention',
                component: MsgAttention
            }]
        },
        {
            path: '/comment',
            name: '/Comment',
            component: Comment
        },
        {
            path: '/comment/detail',
            name: '/CommentDetail',
            component: CommentDetail
        }
    ]
})
