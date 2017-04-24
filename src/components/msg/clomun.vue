<template>
    <div class="mgs-clomun clearfix">
        <Avatar imgsize='40' type="expert" img-class="avatar"/>
        <div class="mgs-clomun-info">
            <slot>
                <p>杜琪峰<span>回答了问题</span>服务腹黑黑<span>回答了问题</span>发髻</p>
                <p>美元的世界货币地位给美国带来了哪些经济和政治利益？</p>
                <time class="mgs-clomun-info-time">8月30日</time>
            </slot>
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'

    export default {
        name: 'mgs-clomun',
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
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss">
   .mgs-clomun {
        padding:0 16px;
        background-color: #fff;

        .avatar {
            margin-top: 16px;
            float: left;
        }

        &-info {
            min-height: 40px;
            padding: 16px 0;
            margin-left: 52px;
            line-height: 24px;
            border-bottom: 1px solid #f2f2f2;

            span {
                margin:0 7px;
                color: rgba(0, 0, 0, 0.38)
            }

            &-time {
                height: 14px;
                line-height: 14px;
                font-size: 14px;
                color: rgba(0,0,0,.38);
            }
        }
   }
</style>
