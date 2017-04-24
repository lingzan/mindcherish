<template>
    <div class="comment-clomun clearfix">
        <Avatar imgsize='40' type="expert" img-class="avatar"/>
        <div class="comment-clomun-info">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'

    export default {
        name: 'comment-clomun',
        data () {
            return {
            }
        },
        computed: {
        },
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss">
   .comment-clomun {
        padding:18px 16px;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;

        .avatar {
            float: left;
        }

        &-info {
            min-height: 40px;
            margin-left: 52px;
            line-height: 24px;
        }
   }
</style>
