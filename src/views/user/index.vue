<template>      
    <div class="user">
            <!-- {{userStat}} -->
            <!-- {{user}} -->
            <!-- {{wallet}} -->
        <div class="user-info">
            <div>
                <div class="no-login" v-if="userStat.user_id === undefined">
                    <Avatar avatar-size="54" avatar-class="left"/>
                    <div class="right" >
                        您好，请登录
                        <div class="fr"><i class="iconfont icon-dianjijinru"></i></div>
                    </div>
                </div>
                <div class="user-logined" v-if="userStat.user_id !== undefined">
                    <router-link :to="'/user/' + user.id">
                        <Avatar avatar-size="54" avatar-class="left" :avatar-url="user.face"/>
                        <div class="middle">
                            <p class="title">{{user.nickname}}</p>
                            <p class="intro">{{user.company + ' · ' + user.position}}</p>
                            <div class="middle-right"><i class="iconfont icon-dianjijinru"></i></div>
                        </div>
                    </router-link>
                </div>
            </div>
            <router-link to="/user/wallet" >
                <div class="user-info-wallet">
                    <i class="iconfont icon-qianbao1"></i>我的钱包
                    <div class="fr">
                        <span class="user-balance">{{wallet.wallet_balance}} </span>元
                        <i class="iconfont icon-dianjijinru"></i>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="user-box">
            <SubImgNav :subimg='subimgnavOne' :subclass='subclassOne' :subid="user.id" />
            <SubImgNav :subimg='subimgnavs' :subclass='subclass' :subid="user.id" />
        </div>
        <div class="user-apply">
            <Clomun text='认证成为智咖' v-if="user.is_expert === '0'" iconClass="icon-renzheng" msgNum="32"><div :class="{'disabled':user.is_identify==='0'}" class="user-identify">去认证</div></Clomun>
            <router-link :to="'/user/answer/' + user.id"><Clomun text='邀我回答' v-if="user.is_expert === '1'" iconClass="icon-xaioxi2" msgNum="32"></Clomun></router-link>
        </div>
        <Clomun text='邀请好友' iconClass="icon-yaoqing" msgNum="获取答案试看券"></Clomun>
        <router-link :to="'/user/role/' + user.id"><Clomun text='权限管理' iconClass="icon-quanxianguanli"></Clomun></router-link>
        <Clomun text='意见反馈' iconClass="icon-fankui" msgNum="有问题反馈给我们哦"></Clomun>
        <Clomun text='APP下载' iconClass="icon-xiazai1" msgNum="32"></Clomun>
        <router-link :to="'/user/set/'"><Clomun text='设置' iconClass="icon-shezhi" msgNum="32"></Clomun></router-link>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import User from '../../components/common/user'
    import Clomun from '../../components/user/clomun'
    import SubImgNav from '../../components/nav/subimgnav'
    import {mapGetters} from 'vuex'
    export default {
        name: 'subnav',
        props: {},
        data () {
            return {
                usernav: [
                    {
                        icon: 'icon-yaowohuida',
                        name: '邀我回答'
                    }
                ],
                subclassOne: 'user-subimg mb23',
                subclass: 'user-subimg'
            }
        },
        computed: {
            ...mapGetters({
                userStat: 'getUserLicense',
                user: 'user',
                wallet: 'wallet'
            }),
            sub: function () {
                if (typeof this.subnavs !== 'undefined' && this.subnavs !== '') {
                    return JSON.parse(this.subnavs)
                } else {
                    return []
                }
            },
            subimgnavOne: function () {
                return [
                    {'name': '提问', 'icon': 'user-question', 'url': '/user/question/' + this.user.id},
                    {'name': '悬赏', 'icon': 'user-reward', 'url': '/user/reward/' + this.user.id},
                    {'name': 'Get', 'icon': 'user-get', 'url': '/user/get/' + this.user.id},
                    {'name': 'Live', 'icon': 'user-live', 'url': '/user/live/' + this.user.id}
                ]
            },
            subimgnavs: function () {
                return [
                    {'name': '活动', 'icon': 'user-activity', 'url': '/user/activity/' + this.user.id},
                    {'name': '文章', 'icon': 'user-article', 'url': '/user/article/' + this.user.id},
                    {'name': '收藏', 'icon': 'user-collect', 'url': '/user/collect/' + this.user.id},
                    {'name': '草稿', 'icon': 'user-draft', 'url': '/user/draft/' + this.user.id}
                ]
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                const user = vm.$store.state.account.userLicense
                const userId = to.params.id ? to.params.id : user.user_id
                vm.$store.dispatch('getUserInfo', userId)
                vm.$store.dispatch('wallet', {userid: userId, userToken: user.user_token})
            })
        },
        components: { User, Clomun, SubImgNav, Avatar }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .user {
        padding-top: 10px;
        background-color: #f2f2f2;
        &-logined,
        .no-login {
            padding: 34px 16px 28px;
            line-height: 54px;
            color: rgba(255,255,255,.8);

            .left {
                float: left;
                margin-right: 16px;
            }
            .right {
                i {
                    font-size: pxToRem(13);
                    color: rgba(255, 255, 255, 0.65)
                }
            }
        }
        &-logined {
            position: relative;

            .middle {
                position: relative;
                padding:0 70px 0 15px;
                color: rgba(255, 255, 255, 0.65);
                
        
                .title {
                    height: pxToRem(18);
                    margin: 6px 0 9px;

                    font-size: pxToRem(18);
                    line-height: 1;
                    color: #fff;
                    word-wrap: break-word;

                    @include textOverflow(1);
                }
                .intro {
                    height: pxToRem(14);

                    font-size: pxToRem(14);
                    line-height: 1;

                    @include textOverflow(1);
                }
                &-right {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    i {
                        font-size: pxToRem(13);
                    }
                }
            }
            
        }
        &-balance {
            color: #ffa42f;
        }
        &-apply {
            margin-bottom: 10px;
            .icon-renzheng {
                position: relative;
                top: 1px;
            }
        }
        &-subimg {
            p {
                margin-top: 0.3125rem;
            }
        }
        &-info {
            position: relative;
            width: 100%;
            height: 176px;
            background-image: url(../../assets/images/center-header.png);
            background-size: 100% 100%;

            &-wallet {
                position: absolute;
                bottom: 0;

                width: 100%;
                height: 56px;
                padding: 0 16px;

                line-height: 56px;
                font-size: pxToRem(14);
                color: rgba(255, 255, 255, 0.9);
                background-color: rgba(0, 0, 0, 0.16);

                .icon-dianjijinru {
                    margin-left: 10px;
                    font-size: pxToRem(13);
                    color: rgba(255, 255, 255, 0.65)
                }
            }
            .icon-qianbao1 {
                margin-right: 14px;
            }
        }
        &-box {
            position: relative;
            padding: 15px 16px;
            margin-bottom: 10px;
            background: #fff;
            
            &-left {
               float: left;
               margin-right: 10px;
            }
            &-right {
                position: relative;
                

                i {
                    position: absolute;
                    top: 50%;
                    right: 0px;
                    margin-top: -6px;
                    color: rgba(0, 0, 0, 0.38);
                     font-size: pxToRem(12);
                }
            }
        }
        &-name {
            margin-top: 9px;
            margin-right: 16px;
            height: 15px;

            line-height: 15px;
            font-size: pxToRem(15);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-desciption {
            margin-top: 5px;
             font-size: pxToRem(12);
            margin-right: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &-question {
            background-image: url(../../assets/icon/icon-question.png);
            background-size: contain;
        }
        &-reward {
            background: url(../../assets/icon/icon-reward.png);
            background-size: contain;
        }
        &-get {
            background: url(../../assets/icon/icon-get.png);
            background-size: contain;
        }
        &-live {
            background: url(../../assets/icon/icon-live.png);
            background-size: contain;
        }
        &-activity {
            background-image: url(../../assets/icon/icon-activity.png);
            background-size: contain;
        }
        &-article {
            background: url(../../assets/icon/icon-article.png);
            background-size: contain;
        }
        &-collect {
            background: url(../../assets/icon/icon-collect.png);
            background-size: contain;
        }
        &-draft {
            background: url(../../assets/icon/icon-draft.png);
            background-size: contain;
        }
        &-identify {
            width: 59px;
            height: 24px;
            margin-top: 15px;

            line-height: 24px;
            font-size: pxToRem(12);
            text-align: center;
            border-radius: 2px;
            cursor: pointer;
            color: #fff;
            background-color: #ffa42f;

            &.disabled {
                background-color: rgba(0,0,0, .05);
                color: rgba(0,0,0,.38);
            }
        }
        .mb23 {
            margin-bottom: 23px;
        }
    }
</style>
