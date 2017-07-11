<template>
    <div class="nav-search" :class="searchClass">
        <router-link  to="/search" class="nav-search-left"><i class="iconfont icon-sousuo"></i>搜索智答、文章和用户</router-link>
        <!-- <button class="right" @click="quiz()">提问</button> -->
    </div>
</template>

<script>
    export default {
        name: 'nav-search',
        props: {
            searchClass: ''
        },
        methods: {
            quiz: function () {
                window.location.href = '#quiz/write'
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .nav-search {
        // width: 100%;
        padding:0 16px;
        color: rgba(255,255,255,.5);
        
        &-left {
            display: block;
            // margin-right: 76px;
            height: 36px;

            line-height: 36px;
            font-size: pxToRem(15);
            background: #fff;
            border-radius: 100px;
            cursor: pointer;

            i {
                margin: 0 3px 0 10px;
                 font-size: pxToRem(14);
            }
        }

        .right {
            position: absolute;
            top: 9px;
            right: 16px;

            width: 54px;
            height: 34px;

             font-size: pxToRem(14);
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
