<template>
    <div class="my-get">
       get
    </div>
</template>

<script>
    import LiveModule from '../../components/live/module'
    export default {
        name: 'my-get',
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                vm.$store.dispatch('userQuestion', {
                    page: 1,
                    rows: 6,
                    invite_status: 'wait_answer',
                    questioner_userid: user.user_id
                })
            })
        },
        components: {LiveModule}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    
</style>
