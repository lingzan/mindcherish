import fetch from '../axios'

const MSG_API = {
    newMsg: 'v1/message_last/lists',
    register: 'v1/account/register',
    fwd: 'v1/account/login',
    verifyCode: 'v1/sms/verify'
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
    }
}
