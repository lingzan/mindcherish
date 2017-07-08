<template>
    <div class="fading" v-show="loading">
        <div class="fading-circle one"></div>
        <div class="fading-circle two"></div>
        <div class="fading-circle third"></div>
        <div class="fading-circle four"></div>
        <div class="fading-circle five"></div>
        <div class="fading-circle six"></div>
        <div class="fading-circle seven"></div>
        <div class="fading-circle eight"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'loading',
        computed: {
            ...mapGetters({loading: 'getLoading'})
        }

    }
</script>
<style type="text/sass" lang="scss">
    /*圆点loading*/
    .fading {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -50px;
        margin-left: -50px;
        width: 100px;
        height: 100px;

    }
    .fading-circle{
        width: 100%;
        height: 100%;
        position: absolute;
        &:before {
            content: '';
            display: block;
            margin: 0 auto;
            width: 15%;
            height: 15%;
            border-radius: 50%;
            background: #9e9e9e;
        }
        &.one {
            transform: rotate(0deg);
            animation:fading 1.4s ease-in-out -0.2s infinite;
        }
        &.two {
            transform: rotate(45deg);
            animation:fading 1.4s ease-in-out -0.4s infinite;
        }
        &.third {
            transform: rotate(90deg);
            animation:fading 1.4s ease-in-out -0.6s infinite; 
        }
        &.four {
            transform: rotate(135deg);
            animation:fading 1.4s ease-in-out -0.8s infinite;
        }
        &.five {
            transform: rotate(180deg);
            animation:fading 1.4s ease-in-out -1s infinite;
        }
        &.six {
            transform: rotate(225deg);
            animation:fading 1.4s ease-in-out -1.2s infinite;
        }
        &.seven {
            transform: rotate(270deg);
            animation:fading 1.4s ease-in-out -1.4s infinite;
        }
        &.eight {
            transform: rotate(315deg);
            animation:fading 1.4s ease-in-out -1.6s infinite;
       }
    }
    @keyframes fading {
        0%{
            opacity: 0;
        },
        100%{
            opacity: 1;
        }
    }
</style>
