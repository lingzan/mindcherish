<template>
    <router-link :to="msgItemUrl" class="msg-item" :class="msgItemClass">
        <div class="msg-item-icon" :class="msgItemIcon">
        </div>{{msgItemName}}
        <span class="fr"><slot><i class="iconfont icon-jinru"></i></slot></span>
    </router-link>
</template>
<script>
    export default {
        name: 'msg-item',
        props: {
            msgItemIcon: '',
            msgItemClass: '',
            msgItemName: '',
            msgItemUrl: ''
        }
    }
</script>
<style type="text/sass" lang="scss" scoped>
    .msg {
        &-item {
            display: block;
            height: 63px;
            padding: 0 16px;

            line-height: 62px;
            background: #fff;
            border: 1px solid #f2f2f2;
            span {
                font-size: pxToRem(14);
                color: rgba(0, 0, 0, 0.38);
            }
            .icon-jinru {
                font-size: pxToRem(13);
                color: #9e9e9e;
            }

            &-icon {
                display: inline-block;
                width: 46px;
                height: 46px;
                margin-right: 12px;

                vertical-align: middle;
                border-radius: 50%;
            }
        }
    }
</style>
