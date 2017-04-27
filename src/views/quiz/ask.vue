<template>
    <div class="quiz-ask">
        <QuizHeader :title="title">
            <span slot="left" @click="back()"><i class="iconfont icon-fanhui"></i>返回</span>
        </QuizHeader>
        <div class="quiz-ask-content">
            <div class="textarea-box">
                <textarea @input="changes($event)"></textarea>
                <span class="word-num">0/111</span>
            </div>
            <div @click="chooseDomain()">
                <DomainHeader :selectedData="selectedData" />
            </div>
            <div class="quiz-ask-status">
                <SwitchBtn switch-class="anonymous" />匿名提问（答案每被get一次，你就赚2.5元）
            </div>
        </div>
        <Domain v-if="domainFlag" />
    </div>
</template>

<script>
    import QuizHeader from '../../components/quiz/header'
    import SwitchBtn from '../../components/common/switchBtn'
    import DomainHeader from '../../components/common/domainHeader'
    import Domain from '../../components/common/domain'

    export default {
        name: 'quiz-ask',
        data () {
            return {
                title: '向XX提问',
                selectedData: [{name: '方法', id: ''}],
                domainFlag: false
            }
        },
        methods: {
            back: function () {
                this.$router.go(-1)
            },
            changes: function (e) {
                let $this = document.getElementsByTagName(e.target.tagName)[0]
                $this.removeAttribute('style')
                $this.style.height = $this.scrollHeight + 'px'
                console.log($this.offsetHeight, $this.scrollTop, $this.scrollHeight, $this.style.height)
            },
            chooseDomain: function () {
                this.domainFlag = !this.domainFlag
            }
        },
        mounted: function () {
            console.log(this)
        },
        components: { QuizHeader, SwitchBtn, DomainHeader, Domain }
    }
</script>

<style type="text/sass" lang="scss">
    .quiz-ask {

        &-content {
            padding: 0 16px;

            .textarea-box {
                
                position: relative;
                .word-num {
                    position: absolute;
                    right: 0;
                    bottom: 12px;

                    color: rgba(0,0,0,.38);
                }
            }
            textarea {
                width: 100%;
                margin: 16px 0 44px;
                height: 120px;

                line-height: 24px;
                font-size: 1rem;
                border: none;
                outline: none;
                resize: none
            }
        }

        .anonymous {
            float: left;
            margin-right: 5px;
        }

        &-status {
            color: rgba(0,0,0,.38);
            font-size: 14px;
            line-height: 24px;
        }
    }
</style>
