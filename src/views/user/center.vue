<template>
    <div class="user">
        <div class="user-box">
            <Avatar imgsize="54" type="expert" img-class="user-box-left"/>
            <div class="user-box-right">
                <p class="user-name">遇见了查看或编辑主页查看或编辑主页查看或编辑主页查看或编辑主页查看或编辑主页</p>
                <p class="user-desciption">查看或编辑主页查看或编辑主页查看或编辑主页查看或编辑主页查看或编辑主页查看或编辑主页</p>
                <i class="iconfont icon-dianjijinru"></i>
            </div>
        </div>
        <Qa />
        <div>
            <QuestionOperate />
        </div>
        <focus />
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import Clomun from '../../components/user/clomun'
    import Focus from '../../components/common/focus'
    import Qa from '../../components/question/qa'
    import QuestionOperate from '../../components/question/operate'
    export default {
        name: 'subnav',
        props: {
            subnavs: ''
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
        components: { Avatar, Clomun, Focus, Qa, QuestionOperate }
    }
</script>

<style type="text/sass" lang="scss">
    .user {
        background-color: #f2f2f2;
        &-box {
            position: relative;
            padding: 15px 16px;
            margin-bottom: 10px;
            background: #fff;
            
            &-left {
               float: left;
               margin-right: 10px;
            }
            &-right {
                position: relative;
                

                i {
                    position: absolute;
                    top: 50%;
                    right: 0px;
                    margin-top: -6px;
                    color: rgba(0, 0, 0, 0.38);
                    font-size: 12px;
                }
            }
        }
        &-name {
            margin-top: 9px;
            font-size: 15px;
            margin-right: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-desciption {
            margin-top: 5px;
            font-size: 12px;
            margin-right: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>
