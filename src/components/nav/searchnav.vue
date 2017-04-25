<template>
    <div class="nav-search">
        <router-link to="/search" class="left"><i class="iconfont icon-sousuo"></i>搜索智答、文章和用户</router-link>
        <button class="right" @click="quiz()">提问</button>
    </div>
</template>

<script>
    export default {
        name: 'nav-search',
        methods: {
            quiz: function () {
                window.location.href = '#quiz/write'
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    .nav-search {
        // width: 100%;
        height: 36px;
        padding:8px 16px;
        background: #0af;

        .left {
            display: block;
            margin-right: 76px;
            height: 36px;

            line-height: 36px;
            font-size: 15px;
            color: rgba(255,255,255,.5);
            background: #0099e6;
            border-radius: 5px;
            cursor: pointer;

            i {
                margin: 0 3px 0 10px;
                font-size: 14px;
            }
        }

        .right {
            position: absolute;
            top: 9px;
            right: 16px;

            width: 54px;
            height: 34px;

            font-size: 14px;
            line-height: 34px;
            text-align: center;
            color: #fff;
            border-radius: 3px;
            background: #0af;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
            outline: none;
            border:none;
            cursor: pointer;
        }
    }
</style>
