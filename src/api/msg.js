import fetch from '../axios'

const MSG_API = {
    newMsg: 'v1/message_last/lists',
    msgFans: 'v1/friend/lists',
    msgDomain: 'v1/expertclassify/lists',
    msgInstr: 'v1/enterprise/lists',
    msgNotice: 'v1/notification/lists',
    msgChat: 'v1/message/lists',
    addMsg: 'v1/message/add'
}
export default {
    newMsg (params) {
        /*
            @params
            @var orderby
            @var get_livemsg   1
            @var page
         */
        let promise = fetch(MSG_API.newMsg, params, 'GET')
        return promise
    },
    msgFans (params) {
        /*
            @params
            @var action  fan|''
            @var attention_userid
            @var page
            @var rows
         */
        let promise = fetch(MSG_API.msgFans, params, 'GET')
        return promise
    },
    msgDomain (params) {
        /*
            @params
            @var attention_userid
            @var page
            @var rows
            http://test.mindcherish.com/v1/expertclassify/lists?attention_userid=10684&rows=10&page=1
         */
        let promise = fetch(MSG_API.msgDomain, params, 'GET')
        return promise
    },
    msgInstr (params) {
        /*
            @params
            @var attention_userid
            @var page
            @var rows
            http://test.mindcherish.com/v1/enterprise/lists?attention_userid=10684&rows=10&page=1
         */
        let promise = fetch(MSG_API.msgInstr, params, 'GET')
        return promise
    },
    msgNotice (params) {
        /*
            @param
            @var page
        */
        let promise = fetch(MSG_API.msgNotice, params, 'GET')
        return promise
    },
    msgChat (params) {
        // ?chat_userid=10002&page=1&rows=6&sort=desc
        let promise = fetch(MSG_API.msgChat, params, 'GET')
        return promise
    },
    addMsg (params) {
        let promise = fetch(MSG_API.addMsg, params, 'POST')
        return promise
    }
}
