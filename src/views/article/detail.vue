<template>
    <div class="article-detail">
        <div class="article-detail-header">
            <ImgFit img-fit-class="article-detail-cover" :img-url="articleContent.cover" />
            <ul class="article-detail-tag">
                <router-link v-for="classify in articleContent.classifys" :key="classify.id" :to="'/classify/'+classify.id"><li >{{classify.name}}</li></router-link>
            </ul>
        </div>
        <h2 class="article-detail-title">{{articleContent.title}}</h2>
        <User :user="articleContent.author" user-class="article-detail-author">
            <router-link :to="'quiz/'+articleContent.author.id"><div class="question-btn">提问</div></router-link>
        </User>
    </div>
</template>

<script>
    import ImgFit from '../../components/common/imgfit'
    import User from '../../components/common/user'
    import { mapGetters } from 'vuex'
    export default {
        name: 'article-detail',
        computed: mapGetters({
            articleContent: 'articleContent'
        }),
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getArticleContent', to.params.id)
            })
        },
        components: { ImgFit, User }
    }
</script>

<style type="text/sass" lang="scss">
    .article-detail {
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
    }
</style>
