<template>
    <div class="account-bg" :class="accountBgClass">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'account-bg',
        props: {
            accountBgClass: ''
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .account {
        &-bg {
            width: 100%;
            height: 100%;
            background: url(../../assets/images/login.png) no-repeat;
            background-size: cover;
        }

        &-input {
            position: relative;
            margin: 0 auto 16px;
            width: calc(100% - 50px);
            height: 44px;
            padding: 0 13px;
            
            line-height: 44px;
            color: #fff;
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
        
        &-btn {
            position: relative;
            margin: 0 auto 16px;
            width: calc(100% - 50px);
            height: 44px;
            padding: 0 13px;
            
            line-height: 44px;
            color: #fff;
            text-align: center;
            font-size: pxToRem(16);
            border-radius: 100px;
            color: rgba(33, 33, 33, 0.4);
            background: #a7a7a7;
        }
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
                    background: #b8b8b8;
                    color: #212121;   
                }
            }
        }
        &-btn {
            margin-top: 26px;
            cursor: pointer;
            &.active {
                background: #f5bb42;
                color: #212121;
            }
        }
        &-notice {
            text-align: center;
            background: transparent;
            font-size: pxToRem(14);
            color: #b8b8b8;
            a {
                color: #f5bb42
            }
        }
    }
</style>
