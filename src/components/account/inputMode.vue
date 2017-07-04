<template>
    <div class="account-input" :inputModeClass="inputModeClass">
        <label>+86<i class="iconfont icon-xiala2"></i></label>
        <input type="text" @input="valite()" name="" v-model="user.username">
        <input type="hidden" v-model="user.areaCode" name="">
    </div>
</template>

<script>
    export default {
        name: 'account-input',
        props: {
            inputModeClass: ''
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    
</style>
