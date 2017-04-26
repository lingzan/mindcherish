<template>
    <div class="quiz-write">
        <QuizHeader next="#/quiz/domain" title="1/50"/>
        
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
            }
        },
        components: { Operate, QuizHeader }
    }
</script>

<style type="text/sass" lang="scss">
    @mixin text-overflow ($clomun) {
        display: -webkit-box;
        -webkit-line-clamp: $clomun;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .quiz-write {
        background: #f2f2f2;

        &-header {
            position: relative;
            height: 51px;

            line-height: 51px;
            border-bottom: 1px solid #f2f2f2;
            background-color: #fff;
            text-align: center;
            .left { 
                position: absolute;
                left: 16px;
                top: 50%;

                transform: translateY(-50%);

                i {
                    position: relative;
                    top: -1px;
                    margin-right: 9px;
                    font-size: 12px;

                }
            }
            .right {
                position: absolute;
                right: 16px;
                top: 50%;

                transform: translateY(-50%);
                color: rgba(0, 0, 0, 0.25);

                &.active {
                    color: rgba(0, 0, 0, 0.87);
                }
            }
        }

        &-content {
            padding: 16px;
            margin-bottom: 10px;
            background-color: #fff;

            textarea {
                width: 100%;
                height: 24px;

                font-size: 18px;
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
