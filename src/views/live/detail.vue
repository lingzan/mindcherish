<template>
    <section class="live-detail">
        <div class="live-detail-header">
            <h2>{{liveContent.title}}</h2>
            <div class="live-detail-time">{{liveDate}} 开始 · {{liveContent.favorite_amount}} 收藏</div>
            <div class="live-detail-tags">
                <span v-for="classify in liveContent.classifys" :key="classify.id">#{{classify.name}}</span>
            </div>
        </div>
    </section>
</template>

<script>
    import Tool from '../../util/tool'
    import {mapGetters} from 'vuex'
    export default {
        name: 'live-detail',
        computed: {
            ...mapGetters({
                liveContent: 'liveContent'
            }),
            liveDate: function () {
                console.log(this.liveContent)
                return Tool.dateFormat(this.liveContent.begin_time, 'mm月dd日 hh:ii')
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getLiveContent', to.params.id)
            })
        },
        components: {}
    }
</script>

<style type="text/sass" lang="scss">
    .live-detail {
        &-header {
            padding: 16px 16px 20px;

            h2 {
                line-height: 24px;
                font-size: 24px;
                font-weight: 500;
                color: #212121;

            }
        }

        &-time {
            margin-top: 13px;

            font-size: 14px;
            line-height: 14px;
            color: #9e9e9e;
        }

        &-tags {
            margin-top: 14px;
            color: #0af;
            font-size: 14px;
            line-height: 14px;

            span {
                margin-right: 14px;
            }
        }
    }
</style>
