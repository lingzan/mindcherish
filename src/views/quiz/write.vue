<template>
    <div class="quiz-write">
        <QuizHeader next="#/quiz/domain" title="1/50">
            <span slot="left"><i class="iconfont icon-fanhui" @click="back()"></i>返回</span>
            <div slot="right" @click="nextStep()">下一步</div>
        </QuizHeader>
        
        <div class="quiz-write-content">
            <textarea v-model="question" :class="{'active': question}" @input="changes($event)" placeholder="输入你的问题（10-100字）..."></textarea>
        </div>
        <div class="quiz-write-search">
            <div class="quiz-write-search-item" v-for="i in 10" >
                <p class="result">中国为什么要花<em>这么</em>多钱，费这么大的力气去发展高铁？中国为什么要花<em>这么</em>多钱，费这么大的力气去发展高铁？中国为什么要花<em>这么</em>多钱，费这么大的力气去发展高铁？</p>
                <Operate />
            </div>
        </div>
    </div>
</template>

<script>
    import QuizHeader from '../../components/quiz/header'
    import Operate from '../../components/common/operate'

    export default {
        name: 'quiz-write',
        data () {
            return {
                question: '',
                test: ''
            }
        },
        props: {
            next: ''
        },
        methods: {
            changes: function (e) {
                let $this = document.getElementsByTagName(e.target.tagName)[0]
                $this.removeAttribute('style')
                $this.style.height = $this.scrollHeight + 'px'
                console.log($this.offsetHeight, $this.scrollTop, $this.scrollHeight, $this.style.height)
            },
            back: function () {
                this.$router.go(-1)
            },
            nextStep: function () {
                window.location.href = '#quiz/domain'
            }
        },
        components: { Operate, QuizHeader }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    @mixin text-overflow ($clomun) {
        display: -webkit-box;
        -webkit-line-clamp: $clomun;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .quiz-write {
        background: #f2f2f2;

        &-content {
            padding: 16px;
            margin-bottom: 10px;
            background-color: #fff;

            textarea {
                width: 100%;
                height: 24px;

                 font-size: pxToRem(18);
                line-height: 24px;
                border: none;
                outline: none;
                resize: none;

                &.active {
                    font-weight: 600;
                }
            }
        }

        &-search {
            background: #fff;

            &-item {
                padding: 19px 16px 22px;
                border-bottom: 1px solid #f2f2f2;

                em {
                    color: #0af;
                    font-style: normal;
                }

                .result {
                    line-height: 21px;
                    max-height: 42px;
                    margin-bottom: 7px;
                    
                    @include text-overflow(2);
                }
            }
        }
    }

    
</style>
