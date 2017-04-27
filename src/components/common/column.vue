<template>
    <div class="default-column clearfix" :class="columnClass">
        <router-link :to="columnUrl">
            <Avatar :imgsize="columnImgSize" :type="columnType" img-class="avatar"/>
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'

    export default {
        name: 'default-column',
        data () {
            return {}
        },
        props: {
            columnClass: '',
            columnImgSize: '',
            columnType: '',
            columnUrl: ''
        },
        computed: {
        },
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss">
   .default-column {
        padding:18px 16px;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;

        .avatar {
            float: left;
        }
        
   }
</style>
