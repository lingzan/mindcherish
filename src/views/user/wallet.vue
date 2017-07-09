<template>
    <div class="user-wallet">
        <header class="user-wallet-header">
            <div class="user-wallet-balance">
                <p class="price">{{wallet.wallet_balance}}</p>
                <p class="instr">可用余额（元）</p> 
            </div>
            <div class="user-wallet-total clearfix">
                <div class="user-wallet-total-left">
                    <p class="money">{{wallet.total_income}}</p>
                    <p class="instr">累计收益（元）</p>
                </div>
                <div class="user-wallet-total-right">
                    <p class="money">{{wallet.frozen_fee}}</p>
                    <p class="instr">暂存金额（元）<i class="iconfont icon-bangzhu"></i></p>
                </div>
            </div>
        </header>
        <section class="user-wallet-operate">
            <router-link to="/user/recharge" class="item">
                <i class="iconfont icon-chongzhi"></i>充值
                <i class="iconfont icon-dianjijinru"></i>
            </router-link>
            <router-link to="/user/settlement" class="item mb10">
                <i class="iconfont icon-tixian"></i>提现
                <i class="iconfont icon-dianjijinru"></i>
            </router-link>
            <router-link to="/user/coupon" class="item">
                <i class="iconfont icon-youhuiquan1"></i>优惠券
                <span class="fr">您有 2 张优惠券未使用<i class="iconfont icon-dianjijinru"></i></span>
            </router-link>
        </section>
        <section class="user-wallet-detail">
            <h4 class="title">账单明细</h4>
            <ul class="user-wallet-record">
                <li v-for="bill in userBill" :key="bill.id">
                    <div class="clearfix status">
                        <span class="fl">{{bill.memo}}</span>
                        <span class="fr">{{bill.fee}}</span>
                    </div>
                    <div class="clearfix instr">
                        <span class="fl">{{bill.charge_id}}</span>
                        <span class="fr">{{bill.date}}</span>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'user-wallet',
        computed: {
            ...mapGetters({
                userBill: 'userBill',
                wallet: 'wallet'
            })
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('userBill', {
                    id: '',
                    for: 'pull-up-lastest',
                    rows: 10
                })
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('wallet', {userid: userId, userToken: user.user_token})
            })
        }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .user-wallet {
        background: #f2f2f2;

        .mb10 {
            margin-bottom: 10px;
        }
        &-header {
            margin-bottom: 10px;
            text-align: center;
            background: #fff;
        }
        &-balance {
            padding: 60px 0 39px;

            color: #fff;
            background-image: linear-gradient(to bottom, #ff6842, #ff532a); 
            
            .price {
                font-size: pxToRem(46);
                line-height: pxToRem(34);
                margin-bottom: 16px;
            }
            .instr {
                font-size: pxToRem(14);
                line-height: 1;
                color: rgba(255, 255, 255, 0.8);
            }
        }
        &-total {
            &-left {
                float: left;
                width: 50%;
                padding: 14px 0;

                .money {
                    color: #ff5d35;
                    font-size: pxToRem(18);
                    line-height: pxToRem(14);
                }

                .instr {
                    margin-top: 5px;
                    
                    font-size: pxToRem(14);
                    line-height: pxToRem(14);
                    color: #9e9e9e;
                }
            }
            &-right {
                float: right;
                width: 50%;
                padding: 14px 0;

                .money {
                    color: #ff5d35;
                    font-size: pxToRem(18);
                    line-height: pxToRem(14);
                }

                .instr {
                    margin-top: 5px;

                    font-size: pxToRem(14);
                    line-height: pxToRem(14);
                    color: #9e9e9e;
                }
            }
        }
        &-operate {
            .item {
                display: block;
                height: 52px;
                padding: 0 16px;

                line-height: 52px;
                background: #fff;
                border: 1px solid #f2f2f2;
                span {
                    font-size: pxToRem(14);
                    color: rgba(0, 0, 0, 0.38);
                }
                .icon-tixian,
                .icon-youhuiquan1,
                .icon-chongzhi {
                    margin: 0 14px 0 4px;
                }
                .icon-chongzhi {
                    color: #0af;
                }
                .icon-tixian {
                    color: #ffa42f;
                    margin: 0 14px 0 4px;
                }
                .icon-youhuiquan1 {
                    color: #f96268;
                    margin: 0 14px 0 4px;
                }
                .icon-dianjijinru {
                    float: right;
                    
                    font-size: pxToRem(13);
                    color: rgba(0, 0, 0, 0.38);
                }
            }
        }
        &-detail {
            .title {
                padding: 0 16px;
                margin: 18px 0 10px;

                font-size: pxToRem(14);
                line-height: pxToRem(14);
                color: rgba(0, 0, 0, 0.38);
            }
        }
        &-record {
            li {
                padding: 17px 16px;
                background: #fff;
                border-bottom: 1px solid #f2f2f2;

                .instr {
                    margin-top: 7px;
                    font-size: pxToRem(12);
                    line-height: pxToRem(13);
                    color: rgba(0,0,0,.38);
                }
            }
            
        }
    }
</style>
