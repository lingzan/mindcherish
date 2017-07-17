<template>
    <div class="msg-chat flex-body">
        <div class="flex-main">{{msgChat}}</div>
        <div class="flex-other msg-chat-textarea">
            <textarea placeholder="回复潮汐小助手" v-model="content">3</textarea>
            <i class="iconfont icon-fasong" @click="addMsgs()"></i>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: 'msg-chat',
        data () {
            return {
                content: ''
            }
        },
        computed: {
            ...mapGetters(['msgChat', 'getUserLicense']),
            ...mapState({
                loading: state => state.common.loading,
                page: state => state.msg.msgChatPage,
                isOver: state => state.msg.msgChatIsOver,
                isEmpty: state => state.msg.msgChatIsEmpty
            })
        },
        methods: {
            ...mapActions(['getMsgChat', 'addMsg']),
            loadMore () {
                let that = this
                if (that.loading || that.isOver || that.isEmpty || that.page === 1) {
                    return
                }
                that.getMsgChat({
                    page: that.page,
                    action: 'fan',
                    attention_userid: that.getUserLicense.user_id,
                    user_id: that.getUserLicense.user_id,
                    user_token: that.getUserLicense.user_token
                })
            },
            addMsgs () {
                if (this.content.trim() || this.loading) {
                    return
                }
                this.addMsg({
                    chat_userid: 10002,
                    content: this.content,
                    user_id: this.getUserLicense.user_id
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('getMsgChat', {
                    page: 1,
                    chat_userid: 10002,
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: {}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .msg-chat {
        background: #f2f2f2;
        &-textarea {
            position: relative;
            padding: 16px 70px 16px 16px;
            background: #fff;

            textarea {
                width: 100%;
                height: 20px;
                line-height: 20px;
                resize: none;
            }
            i {
                position: absolute;
                right: 16px;
                top: 50%;
                padding: 10px;
                margin-top: -19px;

            }
        }
    }
</style>
