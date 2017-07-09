<template>
    <div class="my-live">
    <!-- {{userLive}} -->
        <section class="my-live-item" v-for="live in userLive">
            <LiveModule :liveData="live"/>
        </section>
    </div>
</template>

<script>
    import LiveModule from '../../components/live/module'
    import {mapGetters} from 'vuex'
    export default {
        name: 'my-live',
        computed: {
            ...mapGetters(['userLive'])
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                // @var join_userid 我参加的
                // @var guest_userid  我创建的
                vm.$store.dispatch('userLive', {
                    page: 1,
                    rows: 10,
                    join_userid: to.params.id
                })
            })
        },
        components: {LiveModule}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .my-live {
        background: #f2f2f2;
        &-item {
            margin-bottom: 10px;
        }
    }
</style>
