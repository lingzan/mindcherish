<template>
    <div class="find">
        <Search search-class="find-search"/>
        <Swiper />
        <div class="find-nav">
            <router-link class="find-nav-item" to="f">
                <div class="find-topline-icon"></div>
                <div>潮汐头条</div>
            </router-link>
            <router-link class="find-nav-item" to="ff">
                <div class="find-dynamic-icon"></div>
                市场动态
            </router-link>
            <router-link class="find-nav-item" to="ff">
                <div class="find-knowledge-icon"></div>
                产业知识
            </router-link>
        </div>
        <ul class="find-classifies">
            <li>大宗大宗大宗大宗</li>
            <li>大宗大宗</li>
            <li>大宗</li>
            <li>大宗大 宗大宗</li>
       
            <li>大宗</li>
        </ul>
        <div class="find-column">
            <FindHeader title="智咖" instr="值得信赖的大咖与精英" url="/expert/more"/>
            <WellChosen v-for="wellChosen in wellChosens" :key="wellChosen.id" :wellChosen="wellChosen"/>
        </div>
        <div class="find-column">
            <FindHeader title="精选" instr="精彩问答集中看" url="/expert/more"/>
            <WellChosen v-for="wellChosen in wellChosens" :key="wellChosen.id" :wellChosen="wellChosen"/>
        </div>
        <div class="find-column">
            <FindHeader title="问答" instr="最稀缺、最独到的见解" url="/expert/more"/>
            <Question question-class="find-question" v-for="question in questions" :key="question.id" :question="dataFormat(question)"/>
        </div>
        <div class="find-column">
            <FindHeader title="文章" instr="研究成果的汇聚地" url="/expert/more"/>
            <ArticleModule article-class="find-article" v-for="article in articles" :key="article.id" :article="article"/>
        </div>
        <div class="find-column">
        <!-- {{lives}} -->
            <FindHeader title="Live" instr="为每个人提供与智咖的实时互动" url="/expert/more"/>
            <Live  v-for="live in lives" :key="live.id" :live="live"/>
        </div>
    </div>
</template>

<script>
    import Search from '../../components/nav/searchnav'
    import WellChosen from '../../components/wellChosen/module'
    import Question from '../../components/question/module'
    import ArticleModule from '../../components/article/module'
    import Live from '../../components/live/module'
    import FindHeader from '../../components/find/findHeader'
    import Swiper from '../../components/widget/swiper'
    import {mapGetters} from 'vuex'
    export default {
        name: 'find',
        computed: {
            ...mapGetters({
                questions: 'questionList',
                wellChosens: 'wellChosenList',
                articles: 'articleList',
                lives: 'liveList'
            })
        },
        methods: {
            dataFormat (data) {
                let _data = {}
                _data.content = data
                return _data
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getQuestionList', {
                    flag: 'i',
                    rows: 3,
                    orderby: 'id'
                })
                vm.$store.dispatch('getWellChosenList', {
                    flag: 'i',
                    rows: 3
                })
                vm.$store.dispatch('getArticleList', {
                    flag: 'i',
                    rows: 3
                })
                vm.$store.dispatch('getLiveList', {
                    flag: 'i',
                    rows: 3
                })
            })
        },
        components: { Search, WellChosen, Question, ArticleModule, Live, Swiper, FindHeader }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .find {
        background: #f2f2f2;
        &-search {
            position: absolute;
            top: 9px;
            width: 100%;
            background: transparent;
            z-index: 2;

            a {
                color: #aaaaaa;
            }
            // color: #f2f2f2;
        }
        &-nav {
            display: flex;
            just-content: center;
            align-items: center;

            margin-bottom: 10px;
            background: #fff;

            &-item {
                flex: 1;
                padding: 16px 0 13px;
                text-align: center;
                font-size: pxToRem(14);
            }
        }
        &-column {
            margin-top: 10px;
        }
        &-topline {
            &-icon {
                margin:  0 auto 12px;
                @include imgBg(46px, 46px, '../../assets/icon/icon-topline.png')
            }
        }
        &-dynamic {
            &-icon {
                margin:  0 auto 12px;
                @include imgBg(46px, 46px, '../../assets/icon/icon-dynamic.png')
            }
        }
        &-knowledge {
            &-icon {
                margin:  0 auto 12px;
                @include imgBg(46px, 46px, '../../assets/icon/icon-dynamic.png')
            }
        }
        &-classifies {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            background: #fff;
            li {
                flex: 1;
                height: 50px;
                padding: 0 16px;

                line-height: 50px;
                white-space: nowrap;
                text-align: center;
                border: 0.5px solid #f2f2f2;
            }
        }
        &-question,
        &-article {
            margin-top: 1px;
        }

    }
</style>
