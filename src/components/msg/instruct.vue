<template>
    <div class="default-instruct clearfix" :class="instructClass">
        <Avatar avatar-size="40" type="expert" avatar-class="default-instruct-left" :avatar-url="instruct.title_image"/>
        <div class="default-instruct-middle">
            <p class="default-instruct-name">{{instruct.name}} <slot name="mark"></slot></p>
            <p class="default-instruct-desciption">{{instruct.content}}</p>
        </div>
        <div class="default-instruct-right">
            <slot><Focus focus-class="default-instruct-focus" ></Focus></slot>
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import Focus from '../../components/common/focus'

    export default {
        name: 'common-instruct',
        props: {
            instructClass: '',
            instruct: {}
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
    .default-instruct {
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
