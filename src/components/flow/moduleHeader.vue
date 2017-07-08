<template>
    <div class="module-header" :class="moduleHeaderClass">
        <Avatar avatar-size='20' :avatar-url="user.face" :type="user.is_expert" avatar-class="module-header-avatar"/>
        <div class="module-header-title">{{user.nickname}} <span v-html="filterFlowType(actor)"></span></div>
        <time class="module-header-time">{{timeLine}}</time>
    </div>
</template>

<script>
    import Avatar from '../avatar/user'
    import Tool from '../../util/tool'

    export default {
        name: 'module-header',
        props: {
            actor: {},
            moduleHeaderClass: '',
            time: ''
        },
        computed: {
            user: function () {
                let _user = {}
                switch (this.actor.content.arctype) {
                case 'expert_question':
                    _user = this.actor.content.expert
                    break
                case 'article':
                    _user = this.actor.content.author
                    break
                case 'live':
                    _user = this.actor.content.guest_info
                }
                return _user
            },
            timeLine: function () {
                return Tool.dateFormat(this.actor.time_line_date)
            }
        },
        methods: {
            filterFlowType: function (val) {
                if (typeof val === 'undefined') {
                    return
                }
                let _text = ''
                switch (val.type) {
                case 'article_classify_recommend':
                case 'expert_classify_question_recommend':
                    _text = '来自领域 ' + val.actor.name
                    break
                case 'expert_question_recommend':
                    _text = '回答了 <a href="/user/' + val.content.questioner.id + '">' + val.content.questioner.nickname + '</a> 的问题'
                    break
                case 'expert_question_comment':
                    _text = '评论了 <a href="/user/' + val.content.expert.id + '">' + val.content.expert.nickname + '</a> 的回答'
                    break
                case 'expert_question_answer':
                    _text = '回答了 <a href="/user/' + val.content.questioner.id + '">' + val.content.questioner.nickname + '</a> 的问题'
                    break
                case 'expert_question_score':
                    _text = '赞同了 <a href="/user/' + val.content.expert.id + '">' + val.content.expert.nickname + '</a> 的回答'
                    break
                case 'expert_answer_visiter':
                    _text = 'GET了 <a href="/user/' + val.content.expert.id + '">' + val.content.expert.nickname + '</a> 的回答'
                    break
                case 'article_recommend':
                    _text = '发布了文章'
                    break
                case 'article_comment':
                    _text = '评论了 <a href="/user/' + val.content.author.id + '">' + val.content.author.nickname + '</a> 的文章'
                    break
                case 'article_add':
                    _text = '发布了文章'
                    break
                case 'article_favorite':
                    _text = '收藏了 <a href="/user/' + val.content.author.id + '">' + val.content.author.nickname + '</a> 的文章'
                    break
                case 'article_score':
                    _text = '赞同了 <a href="/user/' + val.content.author.id + '">' + val.content.author.nickname + '</a> 的文章'
                    break
                case 'activity_comment':
                    _text = '评论了活动'
                    break
                case 'activity_recommend':
                    _text = '推荐了活动'
                    break
                case 'activity_registration':
                    _text = '报名了活动'
                    break
                case 'reward_answer_add':
                    _text = '回答了悬赏问题'
                    break
                case 'reward_answer_score':
                    _text = '赞同了 <a href="/user/' + val.content.answer_person.id + '">' + val.content.answer_person.nickname + '</a> 的悬赏回答'
                    break
                case 'reward_question_recommend':
                    _text = '推荐了悬赏问题'
                    break
                case 'live_add':
                    _text = '创建了Live'
                    break
                case 'live_registration':
                    _text = '报名了Live'
                    break
                case 'live_recommend':
                    _text = '创建了Live <span class="rt2 btn-icon-recommed"></span>'
                    break
                case 'live_score':
                    _text = '赞同了 <a href="/user/' + val.content.guest_info.id + '">' + val.content.guest_info.nickname + '</a> 的Live'
                    break
                case 'fine_recommend':
                    _text = '来自 潮汐精选'
                    break
                default:
                    break
                }
                console.log(_text)
                return _text
            }
        },
        components: { Avatar }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .module-header {
        position: relative;
        width: 100%;
        height: 20px;

         font-size: pxToRem(13);
        line-height: 20px;
        color: rgba(0, 0, 0, 0.38);



        &-avatar {
            font-size: 0;
            position: absolute !important;
            top: 50%;
            transform: translate(0,-50%);
        }

        &-title {
            margin: 0 78px 0 25px;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            a{
               color: rgba(0, 0, 0, 0.38); 
            }
        }
        &-time {
            position: absolute;
            right: 0;
            top: 0;
        }
    }
</style>
