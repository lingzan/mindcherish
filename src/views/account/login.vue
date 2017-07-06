<template>
    <AccountBg>
        <div class="login flex-body" >
            <div class="flex-main">
                <header>
                    <router-link to="/">
                        <div class="login-logo"></div>
                    </router-link>
                </header>
                <section>
                    <div class="account-input login-account">
                        <label>+86<i class="iconfont icon-xiala2"></i></label>
                        <input type="text" @input="valite()" name="" v-model="user.username" autocomplete="off">
                        <input type="hidden" v-model="user.areaCode" name="">
                    </div>
                    <div class="account-input login-password">
                        <input type="password" ref="pwdType" @input="valite()" name="" v-model="user.pwd">
                        <div class="login-password-btn">
                            <i class="iconfont icon-jiazaishibai" @click="clearPwd()"></i>
                            <i class="iconfont" :class="pwdIcon" @click="lookPwd()"></i>
                        </div>
                    </div>
                    <div class="account-btn login-btn" @click="submits()" :class="active">
                        立即登录
                    </div>
                    <div class="login-help clearfix">
                        <router-link to="/fwd" class="fl">忘记密码？</router-link>
                        <router-link to="/register" class="fr">注册账号</router-link>
                    </div>
                </section>
            </div>
            <footer class="flex-other">
                <div class="login-third">第三方账号登录</div>
                <div class="login-third-link">
                    <div><i class="iconfont icon-wechats"></i></div>
                    <div><i class="iconfont icon-unie61d"></i></div>
                </div>
            </footer>
        </div>
    </AccountBg>
</template>

<script>
    import {mapActions} from 'vuex'
    import AccountBg from '../../components/account/bg'
    export default {
        name: 'login',
        data () {
            return {
                pwdIcon: 'icon-yanjing',
                pwdType: 'password',
                btn: false,
                active: '',
                user: {
                    username: '',
                    pwd: '',
                    areaCode: 86
                }
            }
        },
        methods: {
            ...mapActions(['login']),
            submits () {
                let that = this
                if (this.btn) {
                    this.login({
                        user: this.user,
                        cb: function () {
                            that.$router.replace('/')
                        }
                    })
                }
            },
            valite () {
                if (this.user.username && this.user.pwd) {
                    this.btn = true
                    this.active = 'active'
                } else {
                    this.btn = false
                    this.active = ''
                }
            },
            clearPwd () {
                this.user.pwd = ''
                this.btn = false
                this.active = ''
            },
            lookPwd () {
                this.$refs.pwdType.type = this.$refs.pwdType.type === 'password' ? 'text' : 'password'
                if (this.$refs.pwdType.type === 'password') {
                    this.pwdIcon = 'icon-yanjing'
                } else {
                    this.pwdIcon = 'icon-biyan'
                }
                console.log(this.$refs.pwdType.type)
            }
        },
        mounted: function () {
            // document.getElementsByTagName('input').addEventListener('input', () => {
            //     console.log(this)
            // })
        },
        components: {AccountBg}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .login {
        header {
            padding: 72px 0 51px;
        }
        &-logo {
            width: 125px;
            height: 77px;
            margin: 0 auto;

            background: url(../../assets/icon/icon-logo.png) no-repeat;
            background-size: 100% 100%;
        }
        .login-account {
            color: #fff;
            margin-bottom: 16px;
            label {
                position: absolute;
                display: block;
                width: 60px;
                height: 44px;
                line-height: 44px;

                i {
                    position: absolute;
                }

                &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 1px;
                    height: 16px;
                    margin-top: -8px;
                    background: #fff;
                }
            }
            input {
                width: 100%;
                height: 44px;
                line-height: 16px;
                padding: 14px 0 14px 70px;
            }
        }

        .login-password {
            color: #fff;
            margin-bottom: 26px;

            input {
                padding-right: 70px;
            }

            &-btn {
                position: absolute;
                top: 0;
                right: 12px;
                width: 70px;
                height: 44px;
                line-height: 44px;

                .icon-jiazaishibai {
                    padding:8px;
                    color: #b8b8b8;
                    font-size: pxToRem(12);
                }
                .icon-yanjing, .icon-biyan {
                    padding:8px;
                    color: #b8b8b8;
                    font-size: pxToRem(12);
                }
            }
        }
        &-btn {
            line-height: 44px;
            text-align: center;
            background: #a7a7a7;
            color: rgba(33, 33, 33, 0.4);
            cursor: pointer;
            &.active {
                background: #f5bb42;
                color: #212121;
            }
        }
        &-help {
            padding: 0 25px;
            margin-top: 14px;
            a{
                padding: 0 14px;
                color: #f5bb42;
                font-size: pxToRem(14);
            }
        }
        footer {
        }
        &-third {
            position: relative;
            width: 100px;
            margin: 0 auto;
            font-size: pxToRem(14);
            text-align: center;
            color: #b8b8b8;
            line-height: 1;
            &:before {
                content: '';
                position: absolute;
                left: -92px;
                top: 50%;
                transform: translateY(-50%);
                width: 84px;
                height: 1px;
                background: linear-gradient(to left, #ffffff, #222021);
            }
            &:after {
                content: '';
                position: absolute;
                right: -92px;
                top: 50%;
                transform: translateY(-50%);
                width: 84px;
                height: 1px;
                background: linear-gradient(to right, #ffffff, #222021);
            }

            &-link {
                padding: 18px 0 34px;
                text-align: center;

                > div {
                    display: inline-block;
                    width: 45px;
                    height: 45px;
                    margin:0 12.5px;
                    
                    line-height: 45px;
                    color: #b8b8b8;
                    border: 1px solid #b8b8b8;
                    border-radius: 50%;

                    > i {
                        font-size: 23px;

                        &.icon-unie61d {
                            font-size: 28px;
                        }
                    }
                }
            }
        }
    }
</style>
