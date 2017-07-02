<template>
    <div class="default-operate" :class="operateClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'default-operate',
        props: {
            operateClass: ''
        }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .default-operate {
        width: 100%;
        height: pxToRem(13);
        line-height: pxToRem(13);

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: pxToRem(13);
        text-align: left;
        color: #9e9e9e;

        a {
            color: #9e9e9e;
        }       
    }
</style>
