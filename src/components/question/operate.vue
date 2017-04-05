<template>
    <div class="operate clearfix">
        <div class="operate-left fl">
            <span>提问价</span>
            <span>104 人get</span>
        </div>
        <div class="operate-right fr">
            <span><i class="iconfont icon-thumbs-up"></i>39</span>
            <span><i class="iconfont icon-thumbs-o-down"></i>39</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'question-operate'
    }
</script>

<style type="text/sass" lang="scss">
    .operate {
        width: 100%;
        font-size: 13px;

        &-left {
            text-align: left;
            color: rgba(0,0,0,.54);
        }

        &-right {
            color: rgba(0,0,0,.25);
        }
    }
</style>
