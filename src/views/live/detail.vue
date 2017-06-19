<template>
    <section class="live-detail">
        <div class="live-detail-header">
            <h2>{{liveContent.title}}</h2>
            <div class="live-detail-time">{{liveDate}} 开始 · {{liveContent.favorite_amount}} 收藏</div>
            <div class="live-detail-tags">
                <span v-for="classify in liveContent.classifys" :key="classify.id">#{{classify.name}}</span>
            </div>
        </div>
        <div class="live-detail-payer">
            <ul>
                <li v-for="payer in livePayer">1</li>
            </ul>
        </div>
        <div class="live-detail-content">
            <User :user="liveContent.guest_info" user-class="live-detail-user">
                <span class="live-detail-mark" slot="mark">主讲人</span>
                <span></span>
            </User>
            <p class="live-detail-description">{{liveContent.guest_info.description}}</p>
            <h3 class="live-detail-outline">Live 简介</h3>
            <p class="live-detail-description">{{liveContent.description}}</p>
            <h3 class="live-detail-outline">Live 须知</h3>
            <p class="live-detail-description">{{liveContent.description}}</p>
        </div>
        <div class="live-detail-note">注：有关本次 Live 任何问题，请联系<router-link to="/32">潮汐小助手</router-link></div>
        <div class="live-detail-footer clearfix">
            <div class="live-detail-footer-left">
                <i class="iconfont icon-fanhui"></i>
                <div class="live-detail-footer-btn">
                    <i class="iconfont icon-pinglun"></i>
                    <p>暂无评价</p>
                </div>
                <div class="live-detail-footer-btn">
                    <i class="iconfont icon-shoucang1"></i>
                    <p>收藏</p>
                </div>
            </div>
            <div class="live-detail-footer-right">立即进入</div>
        </div>
    </section>
</template>

<script>
    import Tool from '../../util/tool'
    import User from '../../components/common/user'
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
        components: {User}
    }
</script>

<style type="text/sass" lang="scss">
    .live-detail {
        padding-bottom: 44px;
        background: #f2f2f2;
        &-header {
            padding: 16px 16px 20px;

            background: #fff;

            h2 {
                line-height: 24px;
                font-size: 24px;
                font-weight: 500;
                color: #212121;

            }
        }

        &-content {
            padding: 0 16px;
            background: #fff;
        }

        &-footer {
            position: fixed;
            bottom: 0;
            
            width: 100%;
            height: 44px;
            background: #fff;
            box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.05);
            &-left {
                position: relative;
                float: left;
                box-sizing: border-box;
                width: 50%;
                padding-left: 42px;

                .icon-fanhui {
                    position: absolute;
                    left: 13px;

                    color: #1e1e1e;
                    line-height: 44px;

                }

            }
            &-right {
                float: left;
                width: 50%;
                line-height: 44px;
                color: #fff;
                text-align: center;
                background: #0af;
            }
            &-btn {
                width: 50%;
                height: 100%;
                float: left;

                color: rgba(0, 0, 0, 0.7);
                font-size: 13px;
                text-align: center;

                i {
                    display: inline-block;
                    margin-top: 9px;
                    font-size: 13px;
                }

                >p {
                    font-size: 11px;
                    line-height: 11px;
                    margin-top: 5px;
                }
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
        &-mark {


            display: inline-block;
            padding: 1px 7px;
            margin-top: -3px;
            margin-left: 4px;

            font-size: 11px;
            color: #bdbdbd;
            border: 1px solid #bdbdbd;
            border-radius: 100px;
            vertical-align: top;
        }
        &-user {
            padding: 22px 0px 18px;
            .default-user-name {
                margin-right: 0;
            }
            .default-user-desciption {
                margin-right: 0;
            }
        }
        &-description {
            font-size: 14px;
            line-height: 23px;
            color: #616161;
            padding-bottom: 16px;
        }

        &-outline {
            padding: 22px 0 18px;

            font-size: 16px;
            line-height: 16px;
            border-top: 1px solid #f2f2f2;
        }
        

        &-note {
            padding: 10px 16px 22px;
            font-size: 13px;
            color: rgba(0,0,0,.38);

            a{
                color: #0af;
                text-decoration: underline;
            }
        }
    }
</style>
