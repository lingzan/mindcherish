<template>
    <div class="live" v-infinite-scroll="loadMore">
        <LiveModule v-for="live in lives" :key="live.id" liveModuleClass="live-module-item" :live="formatLive(live)" />
         <loading-notice-component :is-over="isOver" :is-empty="isEmpty" overText="已加载全部" emptyText="空状态"/>
    </div>
</template>

<script>
    import LiveModule from '../../components/live/module'
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: 'live-list',
        components: { LiveModule },
        computed: {
            ...mapGetters({
                lives: 'liveList',
                scrollTop: 'getScrollTop'
            }),
            ...mapState({
                loading: state => state.common.loading,
                page: state => state.live.page,
                isOver: state => state.live.isOver,
                isEmpty: state => state.live.isEmpty
            })
        },
        methods: {
            ...mapActions(['getLiveList']),
            formatLive: (live) => {
                let _live = {}
                _live = live
                return _live
            },
            loadMore () {
                let that = this
                if (that.loading || that.isOver || that.isEmpty || that.page === 1) {
                    return
                }
                that.getLiveList({
                    page: that.page,
                    rows: 10
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            if (from.path.indexOf('/live/content') === -1) {
                next(vm => {
                    vm.$store.dispatch('getLiveList')
                    // vm.$store.dispatch('getArticleContent')
                })
            } else {
                next(vm => {
                    // console.log('scrollTop')
                    document.body.scrollTop = vm.$store.state.live.scrollTop
                })
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    .live{
        margin-top: 10px;
        &-item {
            border-top: 1px solid #f2f2f2;
        }
    }
</style>
