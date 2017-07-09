<template>
    <div class="user-recharge">
        <header class="user-recharge-header"><i class="iconfont icon-weixindenglu"></i>微信支付</header>
        <section class="user-recharge-content">
            <input type="number" name="" placeholder="输入充值金额">
            <div class="user-recharge-balance">当前余额 ￥ 253.00</div>
            <button class="user-recharge-btn">确认提现</button>
            <div class="user-recharge-notice">
                <p>温馨提示：</p>
                <p>单次最高20000元</p>
                <p>如有疑问请联系<router-link to="/chat/10002">扑克小助手</router-link></p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'user-recharge'
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .user-recharge {
        background: #f2f2f2;

        &-header {
            height: 54px;
            padding: 0 16px;
            margin-bottom: 10px;

            line-height: 54px;
            background: #fff;

            i {
                position: relative;
                top: -3px;
                margin-right: 18px;

                color: #6dd94e;
                font-size: pxToRem(28);
                vertical-align: middle;
            }
        }

        &-content {
            background: #fff;

            input {
                display: block;
                width: 100%;
                height: 76px;
                line-height: 30px;
                padding: 23px 16px;

                font-size: pxToRem(25);
                color: #000;
                border-bottom: 1px solid #f2f2f2

                
            }
            input::placeholder{
                color: rgba(0,0,0,.54);
            }
        }

        &-balance{
            height: 38px;
            padding: 0 16px;

            line-height: 38px;
            font-size: pxToRem(14);
            color: rgba(0, 0, 0, 0.38);
        }

        &-btn{
            display: block;
            width: calc(100% - 16px);
            height: 40px;
            margin: 52px auto 0;
            line-height: 40px;
            color: #fff;
            text-align: center;
            background: #ffdeb3;

            &.active{
                background: #ffa42f;

            }
        }

        &-notice {
            padding: 23px 16px 0;
            
            font-size: pxToRem(13);
            line-height: 21px;
            color: rgba(0, 0, 0, 0.38);

            a {
                text-decoration: underline;
                color: #0af;
            }
        }
    }
</style>
