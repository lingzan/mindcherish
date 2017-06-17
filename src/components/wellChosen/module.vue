<template>
    <div class="wellChosen-module" :class="wellChosenClass">
        <div class="left">
            <Avatar avatar-size='54' :avatar-url="wellChosen.image" />
        </div>
        <div class="right">
            <h2 class="wellChosen-module-title">{{wellChosen.name}}</h2>
            <p class="wellChosen-module-content">{{wellChosen.expert_amount}} 位智咖 · {{wellChosen.answer_amount}} 个智答</p>
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import User from '../../components/common/user'
    import ModuleHeader from '../flow/moduleHeader'

    export default {
        name: 'article-module',
        props: {
            wellChosenClass: '',
            wellChosen: ''
        },
        components: { Avatar, User, ModuleHeader }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    .wellChosen-module {
        padding: 16px 16px;
        background: #fff;

        .left {
            float: left
        }

        .right {
            min-height: 54px;
            margin-left: 64px;
        }
        &-title {
            padding-top: 6px;

            font-size: 16px;
            font-weight: 500;
            color: rgba(0,0,0,.87);
            line-height:16px;
            @include textOverflow(1)
        }
        &-content {
            margin-top: 11px;

            font-size: 14px;
            color: rgba(0,0,0,.38);
            line-height:14px;
        }
    }
</style>
