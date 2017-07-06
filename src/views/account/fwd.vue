<template>
    <AccountBg account-bg-class="fwd">
        <div class="account-input account-account">
            <label>+86<i class="iconfont icon-xiala2"></i></label>
            <input type="text" @input="valite()" name="" placeholder="手机号码" v-model="info.account">
            <input type="hidden" v-model="info.areaCode" name="">
        </div>
        <div class="account-input account-code">
            <input type="text" @input="valite()" placeholder="6位短信验证码" name="" v-model="info.code">
            <button @click="getVerifyCode()" :class="codeClass">{{codeText}}</button>
        </div>
        <div class="account-input register-pwd">
            <input type="text" @input="valite()" placeholder="输入新密码" name="" v-model="info.pwd">
        </div>
        <div class="account-input register-pwd">
            <input type="text" @input="valite()" placeholder="再次输入新密码" name="" v-model="info.pwdConfirm">
        </div>
        <div class="account-btn" :class="active" @click="submit()">确认修改</div>
        <div class="account-notice">验证出现问题？请联系<router-link to="/rule">扑克小助手</router-link></div>
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
                codeClass: '',
                codeText: '获取验证码',
                codeBtn: false,
                info: {
                    account: '',
                    verify: '',
                    pwd: '',
                    pwdConfirm: '',
                    areaCode: 86,
                    code: '',
                    require: 'is_exist'
                }
            }
        },
        methods: {
            ...mapActions(['fwd', 'verifyCode']),
            submit () {
                var that = this
                console.log(this.btn)
                if (this.btn) {
                    console.log(31)
                    this.btn = true
                    this.fwd({
                        info: that.info,
                        cb: function (status) {
                            if (status === 0) {
                                that.btn = true
                                that.$router.replace('/login')
                            } else {
                                that.btn = true
                            }
                        }
                    })
                }
            },
            getVerifyCode () {
                if (this.codeBtn) {
                    return
                }
                this.codeBtn = true
                let codeTime = 59
                let that = this
                that.codeClass = 'disable'
                that.codeText = 60 + 's后重新获取'
                const setIntervalId = setInterval(() => {
                    that.codeText = codeTime + 's后重新获取'
                    codeTime--
                    if (codeTime < 0) {
                        that.codeBtn = false
                        that.codeClass = ''
                        that.codeText = '重新获取'
                        clearInterval(setIntervalId)
                    }
                }, 1000)
                this.verifyCode({
                    info: this.info,
                    cb (status) {
                        if (status === 0) {
                        } else {
                            that.codeBtn = false
                            that.codeClass = ''
                            that.codeText = '重新获取'
                            clearInterval(setIntervalId)
                        }
                    }
                })
            },
            valite () {
                if (this.info.account && this.info.code && this.info.pwd) {
                    this.btn = true
                    this.active = 'active'
                } else {
                    this.btn = false
                    this.active = ''
                }
            }
        },
        components: {AccountBg}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .fwd {
        padding-top: 87px;
 
    }
</style>
