<template>
    <div class="login flex-body" >
        <div class="flex-main">
            <header>
                <router-link to="/">
                    <div class="login-logo"></div>
                </router-link>
            </header>
            <section>
                <div class="login-item login-account">
                    <label>+86<i class="iconfont icon-xiala2"></i></label>
                    <input type="text" name="" v-model="user.username">
                    <input type="hidden" v-model="user.areaCode" name="">
                </div>
                <div class="login-item login-password">
                    <input type="password" name="" v-model="user.pwd">
                    <div class="login-password-btn">
                        <i class="iconfont icon-jiazaishibai"></i>
                        <i class="icon-eye"></i>
                    </div>
                </div>
                <div class="login-item login-btn" @click="submits()">
                    立即登录
                </div>
                <div class="login-help clearfix">
                    <router-link to="/register" class="fl">忘记密码？</router-link>
                    <router-link to="/register" class="fr">注册账号</router-link>
                </div>
            </section>
        </div>
        <footer class="flex-other">
            <div class="login-third" >第三方账号登录</div>
        </footer>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: 'login',
        data () {
            return {
                btn: false,
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
                this.login({
                    user: this.user,
                    cb: function () {
                        that.$router.replace('/')
                    }
                })
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .login {
        width: 100%;
        height: 100%;
        background: url(../../assets/images/login.png) no-repeat;
        background-size: cover;
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
        &-item {
            position: relative;
            margin: 0 auto;
            width: calc(100% - 50px);
            height: 44px;
            padding: 0 13px;

            font-size: pxToRem(16);
            border-radius: 100px;
            background: rgba(255,255,255,.2);

            input {
                width: 100%;
                height: 44px;
                line-height: 16px;
                padding: 14px 0;
            }
        }

        &-account {
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

        &-password {
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
                .icon-eye {
                    display: inline-block;
                    box-sizing:content;
                    width: 14px;
                    height: 10px;
                    margin-left: 8px;
                    background: url(../../assets/icon/icon-eye.png) no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        &-btn {
            line-height: 44px;
            text-align: center;
            background: #f5bb42;
            color: #212121;
            cursor: pointer;
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
        }
    }
</style>
