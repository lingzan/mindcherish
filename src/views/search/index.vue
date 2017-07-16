<template>
    <div class="search">
        <SearchHeader :search-input="search" :search-click="searchClick" :search-key="searchKey"/>
        <SearchHistory :hot="hot" v-if="searchs.length === 0 && !result" :search-click="searchClick" />
        <div class="search-relative" v-if="!result">
            <div class="search-relative-item" @click="searchClick(item)" v-for="item in searchs" :key="item"><i class="iconfont icon-sousuo"></i>{{item}}</div>
        </div>
        <div class="search-result" v-if="result">
            <Tab :tab="tab" :tab-current="tabCurrent" :tab-click="switchTab"/>
            <div v-if="tabCurrent === 'getSearchUser'">
                <User  user-class="search-result-user" :user="user" v-for="user in searchUser" :key="user.id">
                    <span></span>
                </User>
            </div>
            <div v-if="tabCurrent === 'getSearchQuestion'">
                <div class="search-result-question" v-for="question in searchQuestion" :key="question.id">
                    <p v-html="question.title"></p>
                    <Operate>Get {{question.visiter_amount}} · 赞 {{question.good_amount}}</Operate>
                </div>
            </div>
            <div v-if="tabCurrent === 'getSearchArticle'">
                <div class="search-result-question" v-for="article in searchArticle" :key="article.id">
                    <p v-html="article.title"></p>
                    <Operate>浏览 {{article.visiter_amount}} · 赞 {{article.good_amount}}</Operate>
                </div>
            </div>
        </div>
        <!-- {{searchs}} -->
    </div>
</template>
  
<script>
    import SearchHeader from '../../components/search/search'
    import SearchHistory from '../../components/search/history'
    import Tab from '../../components/common/tab'
    import User from '../../components/common/user'
    import Operate from '../../components/common/operate'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'nav-search',
        data () {
            return {
                searchInterval: '',
                searchKey: '',
                result: false,
                tab: [
                    {name: '用户', type: 'getSearchUser'},
                    {name: '问答', type: 'getSearchQuestion'},
                    {name: '文章', type: 'getSearchArticle'}
                ],
                tabCurrent: 'getSearchUser'
            }
        },
        computed: {
            ...mapGetters(['searchs', 'hot', 'searchUser', 'searchQuestion', 'searchArticle'])
        },
        methods: {
            ...mapActions(['getExpandSearch', 'getCorrectedSearch', 'getSearchUser', 'getSearchQuestion', 'getSearchArticle']),
            search (key) {
                let that = this
                this.result = false
                if (this.searchInterval) {
                    clearTimeout(this.searchInterval)
                }
                this.searchInterval = setTimeout(() => {
                    that.getExpandSearch({
                        key: key
                    })
                }, 300)
            },
            searchClick (key) {
                var that = this
                that.searchKey = key
                that.result = true
                that.getSearchUser({
                    key: key,
                    page: 1,
                    rows: 6
                })
            },
            switchTab (name) {
                this.tabCurrent = name
                this[name]({
                    key: this.searchKey,
                    page: 1,
                    rows: 10
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getHotSearch', {
                    page: 1,
                    rows: 10
                })
            })
        },
        components: { SearchHeader, SearchHistory, Tab, User, Operate }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .search {
        background-color: #f2f2f2;

        &-relative {
            &-item {
                height: 52px;
                padding: 0 16px;
                color: #9e9e9e;
                line-height: 52px;
                border-bottom: 1px solid #f2f2f2;
                background: #fff;
                cursor: pointer;

                i {
                    font-size: 15px;
                    margin-right: 3px;
                }
            }
        }
        &-result {
            &-user {
                padding: 16px;
                border-top: 1px solid #f2f2f2;
            }

            em {
                font-style: normal;
                color: #ffa42f;
            }
            &-question {
                padding: 16px;
                background: #fff;
                border-top: 1px solid #f2f2f2;

                p {
                    font-size: pxToRem(16);
                    color: #212121;
                    line-height: pxToRem(21);
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
