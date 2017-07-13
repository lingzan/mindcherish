<template>
    <div class="default-msg clearfix" :class="userClass">
        <!-- <div class="default-avatar" :class="imgClassObject" >
        <img :src="imgUrls">
        <em :class="iconClassObject"></em>
    </div> -->
        <Avatar avatar-size="40" type="expert" avatar-class="default-msg-left"/>
        <div class="default-msg-middle">
            <p class="default-msg-name">{{msgFormat.content}}</p>
            <p class="default-msg-desciption">{{msgFormat.chater.nickname}}</p>
        </div>
        <div class="default-msg-right">
            {{dateFormat(msgFormat.msgtime)}}
        </div>
    </div>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import Tool from '../../util/tool'
    export default {
        name: 'common-user',
        props: {
            userClass: '',
            msg: {}
        },
        computed: {
            msgFormat () {
                let _msg = {}
                _msg.chater = this.msg.chater
                _msg.msgtime = this.msg.msgtime
                if (this.msg.type === 'msg') {
                    let _content = this.msg.content
                    _msg.content = this.msg.chater.nickname
                    _msg.chater.nickname = _content
                } else {
                    _msg.content = this.msg.content
                }
                return _msg
            }
        },
        methods: {
            dateFormat (date) {
                return Tool.dateFormat(date)
            }
        },
        data () {
            return {
            }
        },
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .default-msg {
        display: flex;
        position: relative;
        background-color: #fff;
            
        &-left {
           flex-shrink: 0;
           margin-right: 10px;
        }
        &-middle {
            position: relative;
            height: 100%;
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-right {
            flex-shrink: 0;
            font-size: pxToRem(14);
            color: #9e9e9e;
        }
        &-name {
            height: 18px;
            padding-top:3px;

            line-height: 15px;
             font-size: pxToRem(15);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-desciption {
            margin-top: 8px;
            font-size: pxToRem(14);
            height: 14px;
            line-height: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: rgba(0, 0, 0, 0.54);
        }
        &-focus {
            position: absolute;
            top: 50%;
            right: 0;

            transform: translateY(-50%);
        }
    }
</style>
