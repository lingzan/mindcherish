<template>
    <div class="default-msg-domain clearfix" :class="domainClass">
        <div class="default-msg-domain-left">
            <p class="default-msg-domain-name">{{domain.name}} <slot name="mark"></slot></p>
            <p class="default-msg-domain-desciption">{{domain.content}}</p>
        </div>
        <div class="default-msg-domain-right">
            <slot><Focus focus-class="default-msg-domain-focus" ></Focus></slot>
        </div>
    </div>
</template>

<script>
    import Focus from '../../components/common/focus'

    export default {
        name: 'default-msg-domain',
        props: {
            domainClass: '',
            domain: {}
        },
        data () {
            return {
            }
        },
        computed: {
        },
        components: { Focus }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .default-msg-domain {
        display: flex;
        position: relative;
        background-color: #fff;
            

        &-left {
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
