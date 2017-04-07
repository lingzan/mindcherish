<template>
    <div class="default-operate clearfix">
        <div class="default-operate-left fl"><slot name="left">提问价 500 元<em> · </em>104 人技能已get</slot></div>
        <div class="default-operate-right fr"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'default-operate'
    }
</script>

<style type="text/sass" lang="scss">
    .default-operate {
        width: 100%;
        font-size: 13px;

        &-left {
            text-align: left;
            color: rgba(0,0,0,.54);
        }

        &-right {
            color: rgba(0,0,0,.25);
            i {
                color: rgba(0,0,0,.18);
            }
        }
    }
</style>
