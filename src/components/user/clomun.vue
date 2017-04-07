<template>
    <div class="default-clomun">
        <i class="iconfont" :class="currentIconClass"></i>{{text}}
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
        },
        computed: {
            currentIconClass: function () {
                let iconClassHash = {}
                iconClassHash[this.iconClass] = true
                return iconClassHash
            }
        }
    }
</script>
<style type="text/sass" lang="scss" scoped>
    .default{
        &-clomun {
            position: relative;

            // width: 100%;
            height: 54px;
            padding: 0 16px;
            
            line-height: 54px;
            font-size: 16px;
            color: rgba(0,0,0,.54);
            background-color: #fff;
            border-bottom: 1px solid #f2f2f2; 

            i {
                color: rgba(0,0,0,.25);
                margin-right: 8px;
                font-size: 14px;

                &.icon-jinengget, &.icon-huodong {
                    font-size: 18px;
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
