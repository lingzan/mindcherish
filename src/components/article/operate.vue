<template>
    <div class="article-operate">
        <Operate>
               <slot></slot> 
        </Operate>
    </div>
</template>

<script>
    import Operate from '../../components/common/operate'
    export default {
        name: 'article-operate',
        components: { Operate }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .article-operate {
        width: 100%;
        font-size: pxToRem(14);
        a {
           color: rgba(0,0,0,.25); 
        }
        .icon-shoucang1 {
            margin-right: 3px;
            font-size: pxToRem(14);
            color: rgba(0,0,0,.18);
        }
        .icon-pinglun {
            position: relative;
            top: 1px;

            margin-right: 3px;
             font-size: pxToRem(14);
        }

        .icon-thumbs-up {
            position: relative;
            top: 1px;

            margin-right: 3px;
        }
        .mr20 {
            margin-right: 20px;
        }
    }
</style>
