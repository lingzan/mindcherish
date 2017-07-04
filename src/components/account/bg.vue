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
    }
</style>
