<template>
    <div class="special">
        <Clomun v-for="i in 10">
            <div class="special-text">
                <p class="title">你好，能问你个问题吗,你好，能问你个问题吗你好，能问你个问题吗事情是这... </p>
                <p class="info">你好，能问你个问题吗,伟大总伟大总伟大总伟大总伟大总伟大总伟大总伟大总伟大总 </p>
            </div>
            
        </Clomun>
    </div>
</template>

<script>
    import Clomun from '../../components/special/clomun'

    export default {
        name: 'special-clomun',
        components: { Clomun }
    }
</script>

<style type="text/sass" lang="scss">
   .special {
        background: #f2f2f2;

        &-text {
            position: relative;

            .title {
                padding-top: 7px;
                font-size: 16px;
                line-height: 1;
                color: rgba(0,0,0,.87);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .info {
                padding-top: 12px;
                font-size: 14px;
                line-height: 1;
                color: rgba(0,0,0,.87);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: rgba(0,0,0,.38);
            }
            .right {
                position: absolute;
                top: 7.5px;
                right: -65px;

                font-size: 14px;
            }
        }

   }
</style>
