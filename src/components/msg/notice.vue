<template>
    <div class="mgs-clomun clearfix">
        <Avatar avatar-size='40' :type="notice.notifier.is_expert" :avatar-url="notice.notifier.face" avatar-class="avatar"/>
        <div class="mgs-clomun-info">
            <slot>
                <p>{{notice.notifier.nickname}}<span>{{notice.data.title}}</span></p>
                <p>{{notice.data.content}}</p>
                <time class="mgs-clomun-info-time">{{dateFormat(notice.data.date)}}</time>
            </slot>
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import Tool from '../../util/tool'
    export default {
        name: 'mgs-clomun',
        props: {
            notice: ''
        },
        data () {
            return {
            }
        },
        computed: {
        },
        methods: {
            dateFormat (date) {
                return Tool.dateFormat(date)
            }
        },
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
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
                 font-size: pxToRem(14);
                color: rgba(0,0,0,.38);
            }
        }
    }
</style>
