<template>
    <div class="special-detail">
        <header class="special-detail-header">
            <h3 class="title">{{wellChosenGet.name}}</h3>
            <p class="instr">{{wellChosenGet.content}}</p>
        </header>
        <div class="special-detail-description">{{wellChosenGet.introduction}}</div>
        <section class="special-detail-wellchosen" v-for="wellChosen in wellChosenDetail" :key="wellChosen.id">
            <User user-class="special-detail-item-header" :user="wellChosen.question_info.expert">
                <span class="special-detail-item-time">{{dateFormat(wellChosen.question_info.date)}}</span>
            </User>
            <QuestionModule :question="detailFormat(wellChosen.question_info)" />
            <Operate operate-class="special-detail-operate">
                {{wellChosen.question_info.visiter_amount}} get · {{wellChosen.question_info.good_amount}} 赞
                <router-link :to="'/classify/' + classify.id" v-for="classify in wellChosen.question_info.classifys" :key="classify.id"> · #{{classify.name}}</router-link>
            </Operate>
        </section>
    </div>
</template>

<script>
    import QuestionModule from '../../components/question/module'
    import Operate from '../../components/common/operate'
    import User from '../../components/common/user'
    import Tool from '../../util/tool'
    import {mapGetters, mapActions} from 'vuex'
    console.log(Tool)
    export default {
        name: 'special-detail',
        computed: {
            ...mapGetters({
                wellChosenDetail: 'wellChosenDetail',
                wellChosenGet: 'wellChosenGet'
            })
        },
        methods: {
            ...mapActions(['getWellChosenDetail']),
            detailFormat (wellChosen) {
                let _wellChosen = {}
                _wellChosen.content = wellChosen
                return _wellChosen
            },
            dateFormat (date) {
                return Tool.dateFormat(date)
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getWellChosen', {
                    'id': to.params.id
                })
                vm.$store.dispatch('getWellChosenDetail', {
                    'fineid': to.params.id,
                    'page': 1,
                    'rows': 10
                })
            })
        },
        components: {QuestionModule, User, Operate}
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .special-detail {
        background: #f2f2f2;
        &-header {
            width: 100%;
            padding: 40px 16px;
            // height: 133px;
            
            text-align: center;
            background: url(../../assets/images/special.jpg) no-repeat;
            background-size: 100% 100%;

            .title {
                font-size: pxToRem(22);
                font-weight: 500;
                line-height: pxToRem(24);
                color: #fd9324;                
                @include textOverflow(2)
            }
            .instr {
                margin-top: 10px;

                font-size: pxToRem(13);
                line-height: pxToRem(18);
                color: #fff;
                opacity: 0.6;
            }
        }
        &-description  {
            padding: 16px;

            font-size: pxToRem(14);
            line-height: pxToRem(24);
            background: #fff;
        }
        &-wellchosen {
            padding: 16px;
            margin-top: 10px;

            background: #fff;
        }
        &-operate {
            margin-top: 13px;
        }
    }
</style>
