<template>
    <div class="default-user clearfix" :class="userClass">
        <Avatar avatar-size="40" type="expert" avatar-class="default-user-left"/>
        <div class="default-user-middle">
            <p class="default-user-name">{{user.nickname}} <slot name="mark"></slot></p>
            <p class="default-user-desciption">{{user.company}}<i> · </i>{{user.position}}</p>
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

<style type="text/sass" lang="scss">
    .default-user {
        position: relative;
        background-color: #fff;
            
        &-left {
           float: left;
           margin-right: 10px;
        }
        &-middle {
            position: relative;
            height: 100%;
            
        }
        &-right {
            position: absolute;
            top: 0;
            right:0;
            height: 100%;
            
        }
        &-name {
            height: 15px;
            margin-right: 65px;
            padding-top:3px;

            line-height: 15px;
            font-size: 15px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-desciption {
            margin-top: 8px;
            margin-right: 65px;
            font-size: 14px;
            height: 14px;
            line-height: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: rgba(0, 0, 0, 0.54);
        }
        &-focus {
            position: absolute;
            top: 50%;
            right: 0;

            transform: translateY(-50%);
        }
    }
</style>
