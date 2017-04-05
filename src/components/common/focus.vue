<template>
    <div class="focus">
        <i class="iconfont icon-guanzhu"></i>关注
    </div>
</template>

<script>
    export default {
        name: 'subnav',
        props: {
            subnavs: ''
        },
        computed: {
            sub: function () {
                if (typeof this.subnavs !== 'undefined' && this.subnavs !== '') {
                    return JSON.parse(this.subnavs)
                } else {
                    return []
                }
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
   .focus {
        width: 60px;
        height: 25px;

        color: #fff;
        text-align: center;
        border: 1px solid #fff;

        i {
            color: #fff;
        }
   }
</style>
