<template>
    <div class="default-domain-header">
        <div class="default-domain-selected">
            <div class="placeholder" v-if="(selectedData.length == 0)">选择领域（1-3）</div>
            <span @click="removeSelected(item)" v-for="item in selectedData">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'default-domain-header',
        props: {
            selectedData: ''
        },
        methods: {
            removeSelected: function (item) {
                this.$emit('removeSelected', item)
            }
        }
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
    .default-domain {
        background: #f2f2f2;
        &-box {
            display: flex;
            flex-direction: rows;

            background: #fff;
        }

        &-selected {

            .placeholder {
                text-align: center;
                color: rgba(0,0,0,.38);
            }
            padding: 0 16px;
            margin-bottom: 10px;
            height: 44px;
            line-height: 44px;

            @include text-overflow(1)
            background: #fff;

            span {
                padding: 3px 6px;
                margin-right: 3px;
                font-size: 12px;
                color: #0af;
                border-radius: 100px;
                opacity: .6;
                background: #e6f7ff;
                cursor: pointer;
            }
        }
    }
</style>
