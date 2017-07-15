<template>
    <div class="focus" :class="focusClass">
        <i class="iconfont icon-jiaguanzhujiahao2"></i>关注
    </div>
</template>

<script>
    export default {
        name: 'focus',
        props: {
            focusClass: ''
        },
        computed: {
        }
    }
</script>

<style type="text/sass" lang="scss">
   .focus {
        width: 60px;
        height: 25px;

        color: #ffa42f;

        line-height: 25px;
        text-align: center;
        border: 1px solid #ffa42f;
        border-radius: 2px; 

        i {
            color: #ffa42f;
        }
   }
</style>
