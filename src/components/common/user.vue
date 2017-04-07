<template>
    <div class="default-user clearfix" :class="userClass">
        <Avatar imgsize="36" type="expert" img-class="default-user-left"/>
        <div class="default-user-right">
            <p class="default-user-name">遇见了查看或编辑主页查看或编辑主页查看或编辑主页查看或编辑主页查看或编辑主页</p>
            <p class="default-user-desciption">上海期货交易所<i> · </i>高级交易员</p>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'

    export default {
        name: 'subnav',
        props: {
            userClass: ''
        },
        data () {
            return {
                usernav: [
                    {
                        icon: 'icon-yaowohuida',
                        name: '邀我回答'
                    }
                ]
            }
        },
        computed: {
            sub: function () {
                if (typeof this.subnavs !== 'undefined' && this.subnavs !== '') {
                    return JSON.parse(this.subnavs)
                } else {
                    return []
                }
            }
        },
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss">
    .default-user {
        background-color: #fff;
            
        &-left {
           float: left;
           margin-right: 10px;
        }
        &-right {
            position: relative;
			height: 100%;
            
        }
        &-name {
            font-size: 14px;
            height: 14px;
            line-height: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-desciption {
            margin-top: 5px;
            font-size: 14px;
            height: 14px;
            line-height: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: rgba(0, 0, 0, 0.54);
        }
    }
</style>
