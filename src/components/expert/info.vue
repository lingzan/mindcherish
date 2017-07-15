<template>
    <div class="expert" :class="expertClass">
        <User user-class="expert-user"  :user="expert" />
        <Operate operate-class="expert-statics">
            <span>粉丝 {{expert.userstat.fans_amount}}</span>
            <span>被Get {{expert.userstat.geted_amount}}</span>
            <span>被赞 {{expert.userstat.gooded_amount}}</span>
        </Operate>
    </div>
</template>

<script>
    import User from '../common/user'
    import Operate from '../common/operate'
    export default {
        name: 'expert-info',
        props: {
            expert: '',
            expertClass: ''
        },
        components: { User, Operate }
    }
</script>

<style type="text/sass" lang="scss">
    .expert {
        background: #fff;
        &-user {

        }
        &-statics {
            margin-top: 10px;
            padding-left: 50px;
        }
    }
</style>
