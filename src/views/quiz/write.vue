<template>
    <div>
        <div class="quiz-write-header">
            <div class="left">
                <i class="iconfont icon-guanbi"></i>取消
            </div>
            <div class="medium">1/150</div>
            <div class="right active">下一步</div>
        </div>
        <div class="quiz-write-content">
            <textarea v-model="question" style="height:20px;" @input="changes($event)" placeholder="输入你的问题（10-100字）..."></textarea>
            <div></div>
            <!-- {{question}} -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'quiz-write',
        data () {
            return {
                question: '',
                test: ''
            }
        },
        methods: {
            changes: function (e) {
                console.log(e.target.tagName)
                console.log(document.getElementsByTagName(e.target.tagName))
                let $this = document.getElementsByTagName(e.target.tagName)[0]
                console.log($this.style.height)
            }
        }
        // watch: {
        //     question: function (val, oldVal) {
        //         console.log('new: %s, old: %s', val, oldVal)
        //     }
        // }
    }
</script>

<style type="text/sass" lang="scss">
    .quiz-write {
        &-header {
            position: relative;
            height: 51px;

            line-height: 51px;
            border-bottom: 1px solid #f2f2f2;
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

            textarea {
                width: 100%;
                height: 24px;
                line-height: 24px;
                border: none;
                outline: none;
                resize: none;
            }
        }
    }
</style>
