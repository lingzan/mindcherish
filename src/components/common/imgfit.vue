<template>
    <div class="img-autofit" :class="autofitSize">
        <img src="http://image.mindcherish.com/upload/article/170407/1491542046-w8FwjNTMu9.png?imageMogr2/thumbnail/720x360!">
    </div>
</template>
<script>
    export default {
        name: 'img-autofit',
        props: {
            autofitSize: ''
        }
    }
</script>

<style type="text/sass" lang="scss">
    .img-autofit {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
            position: absolute;
            top: 50%;
            left: 0;

            width: 100%;
            height: 100%;
            min-height: 100%;
            transform: translateY(-50%);
        }
    }
</style>
