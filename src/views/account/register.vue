<template>
    <AccountBg account-bg-class="register">
        <div class="account-input register-account">
            <label>+86<i class="iconfont icon-xiala2"></i></label>
            <input type="text" @input="valite()" name="" placeholder="手机号码" v-model="registerInfo.account">
            <input type="hidden" v-model="registerInfo.areaCode" name="">
        </div>
        <div class="account-input register-code">
            <input type="text" @input="valite()" placeholder="6位短信验证码" name="" v-model="registerInfo.code">
            <button @click="getVerifyCode()">{{codeText}}</button>
        </div>
        <div class="account-input register-pwd">
            <input type="text" @input="valite()" placeholder="6-16位登录密码" name="" v-model="registerInfo.pwd">
        </div>
        <div class="account-input register-invite">
            <input type="text" placeholder="邀请码（可不填）" name="" v-model="registerInfo.invitecode">
        </div>
        <div class="account-btn register-btn" :class="active" @click="submit()">确认注册</div>
    </AccountBg>
</template>

<script>
    import AccountBg from '../../components/account/bg'
    import {mapActions} from 'vuex'
    export default {
        name: 'register',
        data () {
            return {
                pwdIcon: 'icon-yanjing',
                pwdType: 'password',
                btn: false,
                active: '',
                codeText: '获取验证码',
                registerInfo: {
                    account: '',
                    verify: '',
                    pwd: '',
                    areaCode: 86,
                    code: '',
                    invitecode: ''
                }
            }
        },
        methods: {
            ...mapActions(['register', 'verifyCode']),
            submit () {
                var that = this
                if (this.btn) {
                    this.register({registerInfo: that.registerInfo})
                }
            },
            getVerifyCode () {
                let codeTime = 60
                let that = this
                setInterval(() => {
                    that.codeText = codeTime + 's后重新获取'
                    codeTime--
                }, 1000)
                // if (1 || this.btn) {
                //     this.verifyCode({registerInfo: this.registerInfo})
                // }
            },
            valite () {
                if (this.registerInfo.account && this.registerInfo.code && this.registerInfo.pwd) {
                    this.btn = true
                    this.active = 'active'
                } else {
                    this.btn = true
                    this.active = ''
                }
            }
        },
        components: {AccountBg}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
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
        &-code {
            padding-right: 50px;
            button {
                position: absolute;
                top: 7px;
                right: 13px;
                height: 30px;
                padding: 0 8px;

                font-size: pxToRem(12);
                color: #212121;
                line-height: 30px;
                border-radius: 100px;
                background: #f5bb42;

                &.disable{

                }
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
