<template>
    <div class="special-clomun clearfix">
        <Avatar imgsize='54' type="expert" img-class="avatar"/>
        <div class="special-clomun-info">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'

    export default {
        name: 'special-clomun',
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
   .special-clomun {
        padding:22px 16px;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;

        .avatar {
            float: left;
        }

        &-info {
            min-height: 40px;
            margin-left: 66px;
            line-height: 24px;
            
        }
   }
</style>
