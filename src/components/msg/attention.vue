<template>
    <div class="msg-attention">
        <Clomun v-for="i in 10" :key="i">
            <div class="msg-attention-text">
                <p class="left">你好，能问你个问题吗,你好，能问你个问题吗你好，能问你个问题吗事情是这... </p>
                <p class="left content">你好，能问你个问题吗,伟大总伟大总伟大总伟大总伟大总伟大总伟大总伟大总伟大总 </p>
                <Focus focus-class="right"/>
            </div>
            
        </Clomun>
    </div>
</template>

<script>
    import Clomun from '../../components/msg/clomun'
    import Focus from '../../components/common/focus'

    export default {
        name: 'msg-attention',
        data () {
            return {
                subnavs: [{'name': '首页', 'url': '/'}, {'name': '问答', 'url': '/question'}, {'name': '精选', 'url': '/specify'}, {'name': '文章', 'url': '/article'}],
                subclass: 'index-subimg',
                footernavs: [
                    {'name': '首页', 'icon': 'icon-tanzi3', 'url': '/'},
                    {'name': '发现', 'icon': 'icon-faxian', 'url': ''},
                    {'name': '消息', 'icon': 'icon-xaioxi2', 'url': '/msg'},
                    {'name': '我的', 'icon': 'icon-wode2', 'url': '/user'}
                ]
            }
        },
        computed: {
        },
        components: { Clomun, Focus }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .msg-attention {
        background: #f2f2f2;

        p {
            height: 20px;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &-text {
            position: relative;
            margin-right: 65px;

            .left {
                &.content {
                     font-size: pxToRem(14);
                    color: rgba(0,0,0,.38);
                }
            }
            .right {
                position: absolute;
                top: 7.5px;
                right: -65px;

                 font-size: pxToRem(14);
            }
        }
    }
</style>
