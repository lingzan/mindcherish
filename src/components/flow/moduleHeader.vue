<template>
    <div class="module-header">
        <Avatar avatar-size='20' avatar-class="module-header-avatar" />
        <div class="module-header-title">李大钊 <span>参加了线上活动</span></div>
        <time class="module-header-time">33分钟前</time>
    </div>
</template>

<script>
    import Avatar from '../avatar/user'
    export default {
        name: 'module-header',
        props: {
            user: {}
        },
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss">
    .module-header {
        position: relative;
        width: 100%;
        height: 20px;

        font-size: 13px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.38);



        &-avatar {
            float: left;
        }

        &-title {
            height: 20px;
            margin: 0 78px 0 25px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        &-time {
            position: absolute;
            right: 0;
            top: 0;
        }
    }
</style>
