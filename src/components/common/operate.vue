<template>
    <div class="default-operate">
        <slot></slot>
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
        height: 13px;
        line-height: 13px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 13px;
        text-align: left;
        color: #9e9e9e;

        a {
            color: #9e9e9e;
        }       
    }
</style>
