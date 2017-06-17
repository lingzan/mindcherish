<template>
    <div class="img-autofit" :class="imgFitClass">
    {{imgFitClass + imgUrl}}
        <img :src="imgUrl">
    </div>
</template>
<script>
    export default {
        name: 'img-autofit',
        props: {
            imgFitClass: '',
            imgUrl: ''
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
