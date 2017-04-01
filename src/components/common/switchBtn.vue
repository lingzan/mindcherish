<template>
    <input type="checkbox" class="default-switch-btn" @change="switchBtnStatus()" />
</template>
<script>
    export default {
        name: 'default-switch-btn',
        props: {
            currentStatus: ''
        },
        methods: {
            switchBtnStatus () {
                console.log(1)
            }
        }
    }
</script>
<style type="text/sass" lang="scss" scoped>
    .default-switch-btn{
        position: relative;

        display: block;
        width: 40px;
        height: 24px;
        float: right;
        
        -webkit-appearance: none;
        appearance:none;

        background: rgba(0, 0, 0, 0.12);
        border-radius: 14px;
        border: none;
        outline: none;

        &:before{
            content: '';
            position: absolute;
            top: 1px;
            left: 1px;
            width: 22px;
            height: 22px;
    
            border-radius: 50%;
            background: #fff;
            transition: left 0.3s;
        }

        &:checked {
            &:before{
                left: 16px 
            }

            background: #0af;
        }
    }
</style>
