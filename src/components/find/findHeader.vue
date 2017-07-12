<template>
    <router-link :to="url">
        <div class="find-item-header">
            <h3>{{title}}<i class="iconfont icon-jinru"></i></h3>
            <p class="instr">{{instr}}</p>
        </div>
    </router-link>   
</template>

<script>
    export default {
        name: 'find-header',
        props: {
            title: '',
            instr: '',
            url: ''
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .find-item-header {
        padding: 15px;
        
        text-align: center;
        background: #fff;

        h3 {
            font-size: pxToRem(16);
            line-height: 1;
            color: #212121;

            i {
                position: relative;
                top: -1px;
                margin-left: 3px;
                font-size: pxToRem(13);
            }
        }
        .instr {
            margin-top: 10px;

            font-size: pxToRem(14);
            line-height: 1;
            color: #9e9e9e;
        }
    }
</style>
