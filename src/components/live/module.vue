<template>
    <section class="live-item" :class="liveModuleClass">
        <div class="left">
            <Avatar avatar-size="54" :avatar-url="face"/>
        </div>
        <div class="right">
            <h2 class="title">{{liveData.title}}</h2>
            <div class="author">{{liveData.guest_info.nickname}} | {{liveData.guest_info.company}} · {{liveData.guest_info.position}}</div>
            <div class="effect">
                <Star :num="liveData.avg_score" />
                <div class="effect-num">{{liveData.favorite_amount}} 人收藏 · {{liveData.payer_amount}} 人参加</div>
            </div>
            <Operate>
                <span>{{liveData.begin_time}} </span>
                <router-link :to='"/c:"+classify.id' :key="classify.id" v-for="classify in liveData.classifys"><span>#{{classify.name}} </span></router-link>
            </Operate>
        </div>
    </section>
</template>
<script>
    import Avatar from '../avatar/user'
    import Star from '../widget/star'
    import Operate from '../common/operate'
    export default {
        name: 'live-item',
        props: {
            liveModuleClass: '',
            liveData: ''
        },
        computed: {
            face: function () {
                return this.liveData.guest_info.face
            }
        },
        components: { Avatar, Star, Operate }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    .live-item {
        background: #fff;
        padding: 15px 16px 17px;

        .left {
            float: left;
        }

        .right {
            margin-left: 64px;
            
            .title {
                font-size: 16px;
                font-weight: 500;
                color: #444;

                @include textOverflow(1)
            }
            .author {
                height: 20px;
                margin-top: 5px;

                font-size: 14px;
                color: #999;
                line-height: 20px;
                @include textOverflow(1)
            }
            .effect {
                height: 14px;
                margin: 8px 0 15px; 

                font-size: 13px;
                line-height: 14px;
                color: #999;

                &-num {
                    display: inline-block;
                }
            }
        }
    }
</style>
