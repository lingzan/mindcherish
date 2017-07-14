<template>
    <div class="user-set">
        <router-link :to="'/user/set/'" class="mb10"><Clomun text='账号密码'><i class="iconfont icon-dianjijinru"></i></Clomun></router-link>
        <router-link :to="'/user/set/'" class="mb10"><Clomun text='实名认证'><i class="iconfont icon-dianjijinru"></i></Clomun></router-link>
        <router-link :to="'/user/set/'"><Clomun text='权限设置'><i class="iconfont icon-dianjijinru"></i></Clomun></router-link>
        <router-link :to="'/user/set/'" class="mb10"><Clomun text='提现设置'><i class="iconfont icon-dianjijinru"></i></Clomun></router-link>
        <router-link :to="'/user/set/'"><Clomun text='帮助中心'><i class="iconfont icon-dianjijinru"></i></Clomun></router-link>
        <router-link :to="'/user/set/'"><Clomun text='关于我们'><i class="iconfont icon-dianjijinru"></i></Clomun></router-link>
        <router-link :to="'/user/set/'"><Clomun text='意见反馈'><i class="iconfont icon-dianjijinru"></i></Clomun></router-link>
        <router-link to="/login"><div class="login-out">退出登录</div></router-link>
    </div>
</template>

<script>
    import Clomun from '../../components/user/clomun'
    export default {
        name: 'user-set',
        components: { Clomun }
    }
</script>

<style type="text/sass" lang="scss">
    .user-set {
        min-height: 100%;
        background: #f2f2f2;
        a{
            display: block;

            &.mb10 {
                margin-bottom: 10px;
            }
        }
    }
    .login-out {
        height: 44px;
        margin-top: 10px;

        line-height: 44px;
        color: #ff2600;
        text-align: center;
        background: #fff;
        cursor: pointer;
    }
</style>
