<template>
    <AccountBg account-bg-class="register">
        <div class="account-input register-account">
            <label>+86<i class="iconfont icon-xiala2"></i></label>
            <input type="text" @input="valite()" name="" placeholder="手机号码" v-model="user.username">
            <input type="hidden" v-model="user.areaCode" name="">
        </div>
        <div class="account-input register-code">
            <input type="text" @input="valite()" placeholder="6位短信验证码" name="" v-model="user.code">
        </div>
        <div class="account-input register-pwd">
            <input type="text" @input="valite()" placeholder="6-16位登录密码" name="" v-model="user.pwd">
        </div>
        <div class="account-input register-invite">
            <input type="text" placeholder="邀请码（可不填）" name="" v-model="user.invite">
        </div>
        <div class="account-btn register-btn">确认注册</div>
    </AccountBg>
</template>

<script>
    import AccountBg from '../../components/account/bg'
    export default {
        name: 'register',
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
            submit () {},
            valite () {}
        },
        components: {AccountBg}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    .register {
        padding-top: 87px;
        &-account {
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
                padding-left: 70px;
            }
        }
        &-btn {
            margin-top: 26px;
            &.active {
                background: #f5bb42;
                color: #212121;
            }
        }
    }
</style>
