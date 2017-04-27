<template>
    <div class="comment">
        <Column>
            <div class="comment-text">
                <p class="left">你好，能问你个问题吗,伟大总伟大总伟大总伟大总伟大总伟大总伟大总伟大总伟大总 </p>
                <span class="right"><i class="iconfont icon-thumbs-up"></i>32</span>
            </div>
            <p class="comment-content">这次百家我们请到了债券市场领域的顶级大小拿，大家可以到董老师的智咖页提问</p>
            <div class="comment-total">5分钟前<span> · </span>5条回复</div>
        </Column>
    </div>

</template>

<script>
    import Column from '../../components/comment/column'

    export default {
        name: 'comment',
        components: { Column }
    }
</script>

<style type="text/sass" lang="scss">
    .comment {
        &-text {
            position: relative;

            .left {
                height: 16px;
                margin-right: 36px;

                line-height: 16px;
                font-size: 15px;
                font-weight: 600;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                
            }

            .right {
                position: absolute;
                top: 0;
                right: 0;
                
                height: 16px;
                line-height: 16px;
                color: rgba(0,0,0,.25);

                i {
                    position: relative;
                    top: 1px;
                    margin-right: 3px;
                    color: rgba(0,0,0,.18); 
                }
            }
        }

        &-content {
            margin-top: 5px;
            font-size: 15px;
            line-height: 23px;
        }

        &-total {
            height: 12px;
            margin-top: 8px;

            line-height: 12px;
            color: rgba(0,0,0,.38);
            font-size: 12px;
        }
    }
</style>
