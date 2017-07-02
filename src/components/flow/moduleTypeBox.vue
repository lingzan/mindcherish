<template>
    <router-link class="module-type" :to="boxData.url">
            <div class="left"><i class="iconfont icon-chakanwenben" ng-class="{'active': boxData.content.is_free}"></i></div>
            <div class="middle">
                <p class="title">{{boxData.title}}</p>
                <p class="info">{{boxData.text}}</p>
            </div>
            <div class="right"><i class="iconfont icon-dianjijinru"></i></div>
    </router-link>
</template>

<script>
    import Avatar from '../avatar/user'
    export default {
        name: 'module-header',
        props: {
            box: {},
            moduleHeaderClass: '',
            time: ''
        },
        computed: {
            boxData: function () {
                let _boxData = this.box.content
                _boxData.answer.is_voice = _boxData.answer.is_voice - 0
                _boxData.answer.is_free = _boxData.answer.is_free - 0
                let _item = {}
                switch (_boxData.arctype) {
                case 'live':
                    _item['icon'] = 'icon-live'
                    _item['title'] = _boxData.title
                    _item['text'] = _boxData.favorite_amount + ' 收藏 · ' + _boxData.payer_amount + '人参加'
                    _item['url'] = '/expert/live?id=' + _boxData.id
                    break
                case 'article':
                    _item['icon'] = 'icon-wenzhang2'
                    _item['title'] = _boxData.title
                    _item['text'] = _boxData.good_amount + ' 赞 · ' + _boxData.comment_amount + '评价'
                    _item['url'] = '/article/content?id=' + _boxData.id
                    break
                case 'reward_answer':
                    _item['icon'] = 'icon-xuanshang1'
                    _item['title'] = _boxData.summary
                    _item['text'] = _boxData.good_amount + ' 赞 · ' + _boxData.comment_amount + '评价'
                    _item['url'] = '/reward/detail?id=' + _boxData.id
                    break
                case 'expert_question':
                    _item['title'] = _boxData.title
                    var _isFree = _boxData.is_free === 1 ? ' active' : ''
                    if (_boxData.answer.is_voice === 0) {
                        _item['icon'] = 'icon-chakanwenben' + _isFree
                        _item['text'] = '回答包含 ' + _boxData.answer.length + ' 字' + (_boxData.answer.content_flag === 'image' ? '，有图' : '')
                    } else {
                        _item['icon'] = 'icon-shoutingyuyin' + _isFree
                        _item['text'] = '回答时长 00:' + _boxData.answer.length
                    }
                    _item['url'] = '/expert/' + _boxData.id
                    // console.log(type, _item['text']);
                    break
                default:
                    _item['icon'] = 'icon-chakanwenben'
                    _item['title'] = _boxData.title
                    _item['text'] = '回答时长'
                    _item['url'] = '/expert/' + _boxData.id
                    break
                }
                return _item
            }
        },
        methods: {
            filterTypeBox: (item) => {
                return item
            }
        },
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .module-type {
        display: block;
        box-sizing: border-box;
        position: relative;
        height: 60px;
        padding: 10px;
        background: #fdfdfd;
        border: 1px solid #f2f2f2;
        border-radius: 3px;

        .left {
            float:left;
            height: 100%;
            margin-right: 12px;

            i {
                position: relative;
                top: 9px;
                
                color: #0af;
                 font-size: pxToRem(20);

                &.active {
                    color: #f7766a;
                }
            }
        }

        .middle {
            margin-right: 30px;

            .title {
                height: 20px;

                 font-size: pxToRem(14);
                line-height: 20px;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .info {
                height:12px;
                margin-top: 4px;
                line-height: 12px;
                 font-size: pxToRem(12);
                color: rgba(0,0,0,.38);

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .right {
            position: absolute;
            top: 16px;
            right: 10px;

            i {
                 font-size: pxToRem(12);
                color: rgba(0,0,0,.87)
            }
        }
    }
</style>
