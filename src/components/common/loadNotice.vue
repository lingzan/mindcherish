<template>
    <div class="load-notice">{{text}}</div>
</template>

<script>
    export default {
        name: 'load-notice',
        props: {
            overText: '',
            emptyText: '',
            isOver: false,
            isEmpty: false
        },
        computed: {
            text () {
                let _text = ''
                if (this.isEmpty) {
                    _text = this.emptyText
                } else if (this.isOver) {
                    _text = this.overText
                } else {
                    _text = ''
                }
                return _text
            }
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .load-notice {
        padding: 16px;
        font-size: pxToRem(14);
        text-align: center;
        color: rgba(0,0,0,.38);
    }
</style>
