import Vue from 'vue'
import Router from 'vue-router'

import User from '../views/user/index'
import Center from '../views/user/center'

import Index from '../views/index/index'
import IndexFlow from '../views/index/indexFlow'
import Question from '../views/question/list'
import QuestionDetail from '../views/question/detail'
import Special from '../views/index/special'
import Article from '../views/index/article'

import Msg from '../views/msg/index'
import MsgNotice from '../components/msg/notice'
import MsgChat from '../components/msg/chat'
import MsgAttention from '../components/msg/attention'

import Comment from '../views/comment/index'
import CommentDetail from '../views/comment/detail'

import Search from '../views/search/index'

import QuizWrite from '../views/quiz/write'
import QuizDomain from '../views/quiz/domain'
import QuizExpert from '../views/quiz/expert'
import QuizAsk from '../views/quiz/ask'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            redirect: '/IndexFlow',
            component: Index,
            children: [{
                path: '/IndexFlow',
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
            path: '/question/detail',
            name: 'QuestionDetail',
            component: QuestionDetail
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
            name: 'Comment',
            component: Comment
        },
        {
            path: '/comment/detail',
            name: 'CommentDetail',
            component: CommentDetail
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/quiz/write',
            name: 'QuizWrite',
            component: QuizWrite
        },
        {
            path: '/quiz/domain',
            name: 'QuizDomain',
            component: QuizDomain
        },
        {
            path: '/quiz/expert',
            name: 'QuizExpert',
            component: QuizExpert
        },
        {
            path: '/quiz/ask',
            name: 'QuizAsk',
            component: QuizAsk
        }
    ]
})
