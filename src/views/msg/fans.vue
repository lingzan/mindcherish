<template>
    <div class="msg-fans-list">
        <User v-for="fan in msgFans" :user="fan.fan_userinfo" :key="fan.id" user-class="msg-fans-list-avatar"/>
    </div>
</template>

<script>
    import User from '../../components/common/user'
    import {mapGetters} from 'vuex'
    export default {
        name: 'msg-fans',
        computed: {
            ...mapGetters(['msgFans'])
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('getMsgFans', {
                    page: 1,
                    action: 'fan',
                    attention_userid: userId,
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: { User }
    }
</script>

<style type="text/sass" lang="scss">
    .msg-fans-list {

        &-avatar {
            padding: 16px;
            border-bottom: 1px solid #f2f2f2;
        }
    }
</style>
