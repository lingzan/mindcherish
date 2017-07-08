import fetch from '../axios'

const USER_API = {
    get: 'v1/user/get',
    wallet: 'v1/user/wallet',
    userLive: 'v1/live/lists',
    userQuestion: 'v1/expertquestion/lists',
    userReward: 'v1/reward_question/lists',
    userGet: 'v1/expertvisiter/lists',
    userActivity: 'v1/activity/lists',
    userArticle: 'v1/article/lists',
    userCollect: 'v1/favorite/lists',
    userDraft: 'v1/draft/lists'
}

export default {
    get (id) {
        let _data = {
            id: id
        }
        let promise = fetch(USER_API.get, _data, 'GET')
        return promise
    },
    wallet (userid, userToken) {
        let _data = {
            user_id: userid,
            user_token: userToken
        }
        let promise = fetch(USER_API.wallet, _data, 'GET')
        return promise
    },
    userLive (param) {
        /*
            @param
            @var page
            @var rows
            @var join_userid 我参加的
            @var guest_userid  我创建的
         */
        let promise = fetch(USER_API.userLive, param, 'GET')
        return promise
    },
    userQuestion (param) {
        /*
            @param
            @var page
            @var rows
            @var invite_status 问题状态 wait_answer|invite_status:has_answer|invite_status:has_refuse|has_expire
            @var questioner_userid  提问者的id
            @var isMy 是否是自己
         */
        let promise = fetch(USER_API.userQuestion, param, 'GET')
        return promise
    },
    userReward (param) {
        /*
            @param
            @var page
            @var rows
            @var answer_userid 回答的
            @var payer_userid 看过的
         */
        let promise = fetch(USER_API.userReward, param, 'GET')
        return promise
    },
    userGet (param) {
        /*
            @param
            @var page
            @var rows
            @orderby id
            @var visiter_userid get的id
         */
        let promise = fetch(USER_API.userGet, param, 'GET')
        return promise
    },
    userActivity (param) {
        /*
            @param
            @var page
            @var rows
            @var hand_mode sign|join
            @var userid  用户id
         */
        let promise = fetch(USER_API.userActivity, param, 'GET')
        return promise
    },
    userArticle (param) {
        /*
            @param
            http://lz.mindcherish.com/v1/article/lists?author_userid=20233&article_status=1&page=1
            @var page
            @var rows
            @var author_userid 用户id
            @var article_status  1|0
         */
        let promise = fetch(USER_API.userArticle, param, 'GET')
        return promise
    },
    userCollect (param) {
        /*
            @param
            http://lz.mindcherish.com/v1/favorite/lists?arctype=article&favoriter_userid=20233&page=1
            @var page
            @var rows
            @var arctype article|reward_answer|expert_question|live
            @var favoriter_userid  用户id
         */
        let promise = fetch(USER_API.userCollect, param, 'GET')
        return promise
    },
    userDraft (param) {
        /*
            @param
            http://lz.mindcherish.com/v1/draft/lists?page=1&rows=10&type=expert_question
            @var page
            @var rows
            @var type expert_question|article|reward_answer
         */
        let promise = fetch(USER_API.userDraft, param, 'GET')
        return promise
    }
}
