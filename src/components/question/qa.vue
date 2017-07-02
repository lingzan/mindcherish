<template>
    <div class="qa clearfix" :class="qaClass">
        <div class="qa-left fl"><i class="iconfont icon-wenbenhuida"></i>5元查看</div>
        <div class="qa-right fr">273字</div>
    </div>
</template>

<script>
    export default {
        name: 'qa',
        props: {
            qaClass: ''
        }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
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
        &-left,&-right {
            height: 100%;
        }
        i {
             font-size: pxToRem(18);
            margin-right: 3px;
        }
    }
</style>
