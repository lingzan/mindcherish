<template>
    <div class="detail-footer">
        <div class="detail-footer-back"><i class="iconfont icon-fanhui"></i></div>
        <ul class="clearfix">
            <li class="detail-footer-item">
               <i class="iconfont icon-zanma"></i>
               <p>赞</p>
            </li>
            <li class="detail-footer-item">
               <i class="iconfont icon-dashang"></i>
               <p>打赏</p>
            </li>
            <li class="detail-footer-item">
               <i class="iconfont icon-shoucang1"></i>
               <p>收藏 ({{statistics.favorite_amount}})</p>
            </li>
            <li class="detail-footer-item">
               <i class="iconfont icon-pinglun"></i>
               <p>评价 ({{statistics.comment_amount}})</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'detail-footer',
        props: {
            statistics: {}
        }
    }
</script>
<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .detail-footer {
        position: fixed;
        bottom: 0;

        box-sizing: border-box;
        width: 100%;
        height: 52px;
        padding-left: 42px;

        background: #fff;
        border-top: 1px solid #f2f2f2;
        &-back {
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            width: 42px;
            height: 52px;

            line-height: 52px;
            color: #333333;
            text-align: center;
        }
        &-item {
            float: left;
            width: 25%;
            text-align: center;
            font-size: 0;

            i {
                display: inline-block;
                margin-top: 11px;
                height: 17px;
                overflow: hidden;

                font-size: pxToRem(17);
                line-height: pxToRem(17);
                color: rgba(0,0,0,.7);
            }
            .icon-dashang:before {
                position: relative;
                left: 1px;
            }
            .icon-shoucang1:before {
                position: relative;
                left: -1px;
            }
            .icon-pinglun:before {
                position: relative;
                top: 2px;
            }
            p {
                margin-top: 5px;

                font-size: pxToRem(11);
                line-height: pxToRem(11);
                color: #333333;
            }
        }
    }
</style>
