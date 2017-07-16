import Vue from 'vue'
import Router from 'vue-router'

import User from '../views/user/index'
import UserQuestion from '../views/user/question'
import UserReward from '../views/user/reward'
import UserGet from '../views/user/get'
import UserLive from '../views/user/live'
import UserActivity from '../views/user/activity'
import UserArticle from '../views/user/article'
import UserCollect from '../views/user/collect'
import UserDraft from '../views/user/draft'
import UserAnswer from '../views/user/answer'
import UserRole from '../views/user/role'
import UserSet from '../views/user/set'
import UserWallet from '../views/user/wallet'
import UserRecharge from '../views/user/recharge'
import UserSettlement from '../views/user/settlement'
import Center from '../views/user/center'

import ExpertMore from '../views/expert/more'
import Top from '../views/expert/top'
import Market from '../views/expert/market'
import Knowledge from '../views/expert/knowledge'

import Login from '../views/account/login'
import Register from '../views/account/register'
import Fwd from '../views/account/fwd'

import Index from '../views/index/index'
import IndexFlow from '../views/index/indexFlow'
import Question from '../views/question/list'
import QuestionDetail from '../views/question/detail'

import Special from '../views/index/special'
import SpecialDetail from '../views/special/detail'

import Classify from '../views/classify/detail'
// import ClassifyDetail from '../views/classify/detail/:id'

import Article from '../views/article/list'
import ArticleDetail from '../views/article/detail'

import Live from '../views/live/list'
import LiveDetail from '../views/live/detail'

import Msg from '../views/msg/index'
import MsgNotice from '../views/msg/notice'
import MsgFans from '../views/msg/fans'
import MsgAttention from '../views/msg/attention'

import Comment from '../views/comment/index'
import CommentDetail from '../views/comment/detail'

import Search from '../views/search/index'

import FindIndex from '../views/find/index'

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
            redirect: '/indexFlow',
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
            },
            {
                path: '/live',
                name: 'Live',
                component: Live
            }]
        },
        {
            path: '/question/:id',
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
            path: '/user/question/:id',
            name: 'UserQuestion',
            component: UserQuestion
        },
        {
            path: '/user/reward/:id',
            name: 'UserReward',
            component: UserReward
        },
        {
            path: '/user/get/:id',
            name: 'UserGet',
            component: UserGet
        },
        {
            path: '/user/live/:id',
            name: 'UserLive',
            component: UserLive
        },
        {
            path: '/user/activity/:id',
            name: 'UserActivity',
            component: UserActivity
        },
        {
            path: '/user/article/:id',
            name: 'UserArticle',
            component: UserArticle
        },
        {
            path: '/user/collect/:id',
            name: 'UserCollect',
            component: UserCollect
        },
        {
            path: '/user/draft/:id',
            name: 'UserDraft',
            component: UserDraft
        },
        {
            path: '/user/answer/:id',
            name: 'UserAnswer',
            component: UserAnswer
        },
        {
            path: '/user/role/:id',
            name: 'UserRole',
            component: UserRole
        },
        {
            path: '/user/set',
            name: 'UserSet',
            component: UserSet
        },
        {
            path: '/user/wallet',
            name: 'UserWallet',
            component: UserWallet
        },
        {
            path: '/user/recharge',
            name: 'UserRecharge',
            component: UserRecharge
        },
        {
            path: '/user/settlement',
            name: 'UserSettlement',
            component: UserSettlement
        },
        {
            path: '/msg',
            name: 'Msg',
            component: Msg
        },
        {
            path: '/msg/notice',
            name: 'MsgNotice',
            component: MsgNotice
        },
        {
            path: '/msg/fans',
            name: 'MsgFans',
            component: MsgFans
        },
        {
            path: '/msg/attention',
            name: 'MsgAttention',
            component: MsgAttention
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
        },
        {
            path: '/article/:id',
            name: 'ArticleDetail',
            component: ArticleDetail
        },
        {
            path: '/live/:id',
            name: 'LiveDetail',
            component: LiveDetail
        },
        {
            path: '/find',
            name: 'FindIndex',
            component: FindIndex
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/fwd',
            name: 'Fwd',
            component: Fwd
        },
        {
            path: '/special/:id',
            name: 'SpecialDetail',
            component: SpecialDetail
        },
        {
            path: '/Classify/:id',
            name: 'Classify',
            component: Classify
        },
        {
            path: '/expert/more',
            name: 'ExpertMore',
            component: ExpertMore
        },
        {
            path: '/top',
            name: 'Top',
            component: Top
        },
        {
            path: '/market',
            name: 'Market',
            component: Market
        },
        {
            path: '/knowledge',
            name: 'Knowledge',
            component: Knowledge
        }
    ]
})
