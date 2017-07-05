<template>
    <div class="user">
        <div class="user-info">
            <!-- <User /> -->
            <div>
                <div class="no-login">
                    <Avatar avatar-size="54" avatar-class="left"/>
                    <div class="right">
                        您好，请登录
                        <div class="fr"><i class="iconfont icon-dianjijinru"></i></div>
                    </div>
                </div>
            </div>
            <div class="user-info-wallet">
               <i class="iconfont icon-qianbao1"></i>我的钱包
               <div class="fr"><i class="iconfont icon-dianjijinru"></i></div>
            </div>
        </div>
        <div class="user-box">
            <SubImgNav :subimg='subimgnavs' :subclass='subclass' />
            <SubImgNav :subimg='subimgnavs' :subclass='subclass' />
        </div>
        <Clomun text='认证成为智咖' iconClass="icon-Group" msgNum="32"><div class="user-identify">认证中</div></Clomun>
        <Clomun text='草稿' iconClass="icon-caogao" msgNum="32"></Clomun>
        <Clomun text='收藏' iconClass="icon-wodeshoucang" msgNum="32"></Clomun>
        <Clomun text='提问' iconClass="icon-zhiwen" msgNum="32"></Clomun>
        <Clomun text='悬赏' iconClass="icon-xuanshang" msgNum="32"></Clomun>
        <Clomun text='活动' iconClass="icon-huodong1" msgNum="32"></Clomun>
        <Clomun text='技能get' iconClass="icon-jinengget" msgNum="32"></Clomun>
        <Clomun text='意见反馈' iconClass="icon-fankui" msgNum="32"></Clomun>
        <Clomun text='设置' iconClass="icon-shezhi" msgNum="32"></Clomun>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import User from '../../components/common/user'
    import Clomun from '../../components/user/clomun'
    import SubImgNav from '../../components/nav/subimgnav'
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
                subimgnavs: [
                    {'name': '提问', 'icon': 'user-wallet', 'url': '/center'},
                    {'name': '悬赏', 'icon': 'user-sale', 'url': '/'},
                    {'name': 'Get', 'icon': 'user-invite', 'url': '/'},
                    {'name': '关注', 'icon': 'user-focus', 'url': '/'}
                ],
                subclass: 'user-subimg'
            }
        },
        computed: {
            sub: function () {
                if (typeof this.subnavs !== 'undefined' && this.subnavs !== '') {
                    return JSON.parse(this.subnavs)
                } else {
                    return []
                }
            }
        },
        components: { User, Clomun, SubImgNav, Avatar }
    }
</script>

<style type="text/sass" lang="scss" >
    @import '../../style/func.scss';
    .user {
        padding-top: 10px;
        background-color: #f2f2f2;

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

        &-wallet {
            background-image: url(../../assets/icon/icon-wallet.png);
            background-size: contain;
        }
        &-sale {
            background: url(../../assets/icon/icon-sale.png);
            background-size: contain;
        }
        &-invite {
            background: url(../../assets/icon/icon-invite.png);
            background-size: contain;
        }
        &-focus {
            background: url(../../assets/icon/icon-focus.png);
            background-size: contain;
        }

        &-identify {
            width: 59px;
            height: 24px;
            margin-top: 15px;

            line-height: 24px;
             font-size: pxToRem(12);
            color: rgba(0,0,0,.38);
            text-align: center;
            vertical-align: center;

            border-radius: 2px;
            background-color: rgba(0,0,0, .05);
            cursor: pointer;
        }
    }
</style>
