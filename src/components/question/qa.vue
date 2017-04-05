<template>
    <div class="qa clearfix">
        <div class="qa-left fl"><i class="iconfont icon-wenbenhuida"></i>5元查看</div>
        <div class="qa-right fr">273字</div>
    </div>
</template>

<script>
    export default {
        name: 'qa'
    }
</script>

<style type="text/sass" lang="scss">
    .qa {
        box-sizing: border-box;
        width: 240px;
        height: 44px;
        padding:0 12px;

        line-height: 44px;
        border-radius: 100px;
        background-color: #0af;
        color: #fff;
        cursor: pointer;

        i {
            font-size: 18px;
            margin-right: 3px;
        }
    }
</style>
