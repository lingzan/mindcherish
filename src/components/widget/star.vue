<template>
    <div class="widget-star">
        <img src="../../assets/icon/icon-stars.png" :class="starClass"/>
    </div>
</template>
<script>
    export default {
        name: 'widget-star',
        props: {
            widgetStarClass: '',
            num: ''
        },
        computed: {
            starClass: function () {
                let _starClass = ''
                let _num = this.num - 0
                switch (_num) {
                case 1:
                    _starClass = 'one-star'
                    break
                case 2:
                    _starClass = 'two-star'
                    break
                case 3:
                    _starClass = 'three-star'
                    break
                case 4:
                    _starClass = 'four-star'
                    break
                case 5:
                    _starClass = 'five-star'
                    break
                default:
                    _starClass = 'star'
                    break
                }
                return _starClass
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    .widget-star {
        display: inline-block;
        width: 73px;
        height: 13px;

        overflow: hidden;

        img {
            width: 200%;
        }
        .star {
            transform: translate(-50%)
        }
        .one-star {
            transform: translate(-40%)
        }
        .two-star {
            transform: translate(-30%)
        }
        .three-star {
            transform: translate(-20%)
        }
        .four-star {
            transform: translate(-10%)
        }
        .five-star {
            transform: translate(-10%)
        }

    }
</style>
