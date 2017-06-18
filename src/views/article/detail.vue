<template>
    <article class="article-detail">
        <div class="article-detail-header">
            <ImgFit img-fit-class="article-detail-cover" :img-url="articleContent.cover" />
            <ul class="article-detail-tag">
                <router-link v-for="classify in articleContent.classifys" :key="classify.id" :to="'/classify/'+classify.id"><li >{{classify.name}}</li></router-link>
            </ul>
        </div>
        <h2 class="article-detail-title">{{articleContent.title}}</h2>
        <User :user="articleContent.author" :user-class="userClass">
            <router-link :to="'quiz/'+articleContent.author.id"><div class="question-btn">提问</div></router-link>
        </User>
        <div class="article-detail-content" v-html="articleContent.content"></div>
        <div class="article-detail-date">
            <p>编辑于 {{articleContent.date}}</p>
            <p>以上言论仅代表个人观点</p>
        </div>
        <DetailFooter :statistics="articleContent" />
    </article>
</template>

<script>
    import ImgFit from '../../components/common/imgfit'
    import User from '../../components/common/user'
    import DetailFooter from '../../components/common/detailFooter'
    import { mapGetters } from 'vuex'
    export default {
        name: 'article-detail',
        data () {
            return {
                userClass: 'article-detail-author'
            }
        },
        computed: mapGetters({
            articleContent: 'articleContent'
        }),
        mounted: function () {
            let that = this
            const userModuleTop = document.querySelector('.' + that.userClass).offsetTop
            document.addEventListener('scroll', () => {
                let scrollTop = document.body.scrollTop
                if (scrollTop > userModuleTop) {
                    that.userClass = 'article-detail-author-fixed'
                } else {
                    that.userClass = 'article-detail-author'
                }
            })
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getArticleContent', to.params.id)
            })
        },
        components: { ImgFit, User, DetailFooter }
    }
</script>

<style type="text/sass" lang="scss">
    .article-detail {
        padding-bottom: 53px;
        &-cover {
            height: 188px;
        }
        &-header {
            position: relative;
        }
        &-tag {
            position: absolute;
            bottom: 10px;
            left: 16px;

            li {
                float: left;
                height: 26px;
                padding: 0px 8px;

                color: #fff;
                font-size: 14px;
                line-height: 26px;
                background: #000;
                opacity: 0.7;
                border-radius: 80px;
            }
        }

        &-title {
            padding: 16px 16px 6px;

            line-height: 32px;
            font-size: 24px;
            font-weight: 500;
            border-bottom: 1px solid #f2f2f2;
        }
        &-author {
            padding: 10px 16px;
            border-bottom: 1px solid #f2f2f2; 
        }
        &-author-fixed {
            box-sizing: border-box;
            width: 100%;
            position: fixed;
            top: 0;
            padding: 10px 16px;
            border-bottom: 1px solid #f2f2f2; 
        }
        .question-btn {
            width: 70px;
            height: 30px;
            margin-top: 15px;
            margin-right: 16px;
            line-height: 30px;
            font-size: 14px;
            color: #0af;
            text-align: center;
            border-radius: 2px;
            border: 1px solid #0af;

        }

        &-content {
            padding: 6px 16px;

            font-size: 16px;
            line-height: 27px;
            color: #212121;

            div, p, li {
                margin-bottom: 22px;
            }

            img {
                width: 100%;
                margin-bottom: 16px;
            }
        }

        &-date {
            padding: 2px 16px 22px;
            font-size: 13px;
            line-height: 14px;
            text-align: right;
            color: #9e9e9e;
            p {
                margin-bottom: 8px;
            }
        }
    }
</style>
