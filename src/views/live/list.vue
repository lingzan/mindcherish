<template>
    <div class="live">
        <LiveModule v-for="live in lives" :key="live.id" liveModuleClass="live-module-item" :liveData="formatLive(live)" />
    </div>
</template>

<script>
    import LiveModule from '../../components/live/module'
    import {mapGetters} from 'vuex'

    export default {
        name: 'live-list',
        components: { LiveModule },
        computed: mapGetters({
            lives: 'liveList',
            scrollTop: 'getScrollTop'
        }),
        methods: {
            formatLive: (live) => {
                let _live = {}
                _live = live
                return _live
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
                    console.log('scrollTop')
                    document.body.scrollTop = vm.$store.state.c.scrollTop
                })
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    .live{
        margin-top: 10px;
        &-module-item {
            border-top: 1px solid #f2f2f2;
        }
    }
</style>
