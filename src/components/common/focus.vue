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

        color: #0af;

        line-height: 25px;
        text-align: center;
        border: 1px solid #0af;
        border-radius: 2px; 
        background-color: #fff;

        i {
            color: #0af;
        }
   }
</style>
