<template>
    <div class="chat">
        <Clomun v-for="i in 10" :key="i">
            <div class="chat-text">
                <p class="left">你好，能问你个问题吗,伟大总伟大总伟大总伟大总伟大总伟大总伟大总伟大总伟大总 </p>
                <time class="right time">3分钟前</time>
            </div>
            <div class="chat-text">
                <p class="left content">你好，能问你个问题吗,你好，能问你个问题吗你好，能问你个问题吗事情是这... </p>
                <span class="right num">99+</span>
            </div>
            
        </Clomun>
    </div>
</template>

<script>
    import Clomun from '../../components/msg/clomun'

    export default {
        name: 'notice',
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
        components: { Clomun }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .chat {
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
            margin-right: 60px;

            .left {
                &.content {
                     font-size: pxToRem(14);
                    color: rgba(0,0,0,.38);
                }
            }
            .right {
                position: absolute;
                top: 2px;
                right: -60px;

                height: 14px;
                padding: 0 5px;

                line-height: 15px;


                &.time {
                     font-size: pxToRem(14);
                    color: rgba(0, 0, 0, 0.38);
                }

                &.num {
                    background: #ff5252;
                    border-radius: 6px;
                    color: #fff;
                     font-size: pxToRem(12);
                
                }
            }
        }
    }
</style>
