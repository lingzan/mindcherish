<template>
    <div class="default-clomun">
        <i class="iconfont" v-if="iconClass" :class="iconClass"></i>{{text}}
        <div class="default-clomun-right fr"><slot><span  v-if="msgNum">{{msgNum}}<i class="iconfont icon-dianjijinru"></i></span></slot></div>
    </div>
</template>
<script>
    export default {
        name: 'default-clomun',
        props: {
            iconClass: '',
            text: '',
            msgNum: ''
        }
    }
</script>
<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .default{
        &-clomun {
            position: relative;

            // width: 100%;
            height: 48px;
            padding: 0 16px;
            
            line-height: 48px;
            font-size: pxToRem(14);
            color: #616161;
            background-color: #fff;
            border-bottom: 1px solid #f2f2f2;
            overflow: hidden;

            i {
                color: #999;
                margin-right: 8px;
                font-size: pxToRem(14);
                vertical-align: middle;

                &.icon-jinengget, &.icon-huodong {
                     font-size: pxToRem(18);
                }
            }

            &-right {
                color:rgba(0,0,0,.38);

                .icon-dianjijinru {
                    color: rgba(0,0,0,.25);
                }
            }
        } 
    }
</style>
