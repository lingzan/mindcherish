<template>
    <div class="my-get">
        <section class="my-get-item" v-for="item in userGet">
            <User :user="item.question_info.expert">
                <span></span>
            </User>
            <p class="my-get-title">{{item.question_info.title}}</p>
            <ModuleQaBox :box="getFormat(item.question_info)"/>
            <Operate operate-class="my-get-operate">
                <span>{{item.question_info.visiter_amount}} get</span>
                <span>· {{item.question_info.good_amount}} 赞</span>
                <a :href="item.id">· {{item.question_info.comment_amount}} 评价</a>
                <a :href="classify.id" v-for="classify in item.question_info.classifys"> · #{{classify.name}}</a>
            </Operate>
        </section>
    </div>
</template>

<script>
    import User from '../../components/common/user'
    import ModuleQaBox from '../../components/flow/moduleTypeBox'
    import Operate from '../../components/common/operate'
    import {mapGetters} from 'vuex'
    export default {
        name: 'my-get',
        computed: {
            ...mapGetters(['userGet'])
        },
        methods: {
            getFormat (get) {
                let _get = {}
                _get.content = get
                return _get
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('userGet', {
                    page: 1,
                    rows: 10,
                    visiter_userid: to.params.id,
                    orderby: 'id'
                })
            })
        },
        components: {User, ModuleQaBox, Operate}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .my-get {
        background: #f2f2f2;
        &-item {
            margin-bottom: 10px;
            background: #fff;
            padding: 10px 16px;
        }
        &-title {
            margin: 6px 0 9px;
            word-wrap: break-word;
        }
        &-operate {
            margin-top: 13px;
        }
    }
</style>
