<template>
    <div class="default-user clearfix" :class="userClass">
        <Avatar avatar-size="40" :type="user.is_expert" avatar-class="default-user-left" :avatar-url="user.face"/>
        <div class="default-user-middle">
            <p class="default-user-name">{{user.nickname}} <slot name="mark"></slot></p>
            <p class="default-user-desciption">{{user.company}} · {{user.position}}</p>
        </div>
        <div class="default-user-right">
            <slot><Focus focus-class="default-user-focus" ></Focus></slot>
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import Focus from '../../components/common/focus'

    export default {
        name: 'common-user',
        props: {
            userClass: '',
            user: {}
        },
        data () {
            return {
            }
        },
        computed: {
        },
        components: { Avatar, Focus }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .default-user {
        display: flex;
        position: relative;
        background-color: #fff;
            
        &-left {
           flex-shrink: 0;
           margin-right: 10px;
        }
        &-middle {
            position: relative;
            height: 100%;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-right {
            flex-shrink: 0;
            line-height: 40px;
        }
        &-name {
            height: 18px;
            padding-top:3px;

            line-height: 15px;
             font-size: pxToRem(15);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-desciption {
            margin-top: 8px;
            font-size: pxToRem(14);
            height: 14px;
            line-height: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: rgba(0, 0, 0, 0.54);
        }
        &-focus {
            display: inline-block;
        }
    }
</style>
