<template>
    <div class="index">
        <SubNav :subnavs="subnavs"/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
            }
        },
        computed: {
        },
        components: {}
    }
</script>

<style type="text/sass" lang="scss">
   .index {
        background: #f2f2f2;
   }
</style>
