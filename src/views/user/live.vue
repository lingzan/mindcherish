<template>
    <div class="my-live">
    <!-- {{userLive}} -->
        <Tab :tab="tabs"
             :tab-current="current"
             :tab-click="switchTab"
             tab-class="my-live-tab"/>
        <section class="my-live-item" v-for="live in userLive">
            <LiveModule :liveData="live"/>
        </section>
    </div>
</template>

<script>
    import LiveModule from '../../components/live/module'
    import Tab from '../../components/common/tab'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'my-live',
        data () {
            return {
                tabs: [
                    { name: '我参加的', type: 'join_userid' },
                    { name: '我创建的', type: 'guest_userid' }
                ],
                current: 'join_userid'
            }
        },
        computed: {
            ...mapGetters(['userLive'])
        },
        methods: {
            ...mapActions({getUserLive: 'userLive'}),
            switchTab (name) {
                this.current = name
                var _data = {}
                _data.page = 1
                _data.rows = 10
                _data[this.current] = this.$route.params.id
                this.getUserLive(_data)
            }
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
        components: {LiveModule, Tab}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .my-live {
        background: #f2f2f2;
        &-tab {
            margin-bottom: 10px;
        }
        &-item {
            margin-bottom: 10px;
        }
    }
</style>
