<template>
    <div class="msg-notice">
        <Notice v-for="notice in msgNotice" :notice="notice" :key="notice"/>
    </div>
</template>

<script>
    import Notice from '../../components/msg/notice'
    import {mapGetters} from 'vuex'
    export default {
        name: 'msg-notice',
        data () {
            return {
            }
        },
        computed: {
            ...mapGetters(['msgNotice'])
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('getMsgNotice', {
                    page: 1,
                    user_id: userId,
                    user_token: user.user_token
                })
            })
        },
        components: { Notice }
    }
</script>

<style type="text/sass" lang="scss">
   .msg-notice {
        background: #f2f2f2;
   }
</style>
