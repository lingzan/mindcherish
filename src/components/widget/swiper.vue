<template>
    <div class="swiper-container" ondragstart="return false">
        <div class="swiper-wrapper" 
            @touchstart="swiperTouchStart($event)"
            @touchmove="swiperTouchMove($event)"
            @touchend="swiperTouchEnd($event)"
            :style="swiperStyle">
            <div class="swiper-slider">
                <img src="http://image.mindcherish.com/upload/expertbanner/170629/14bIZO-1FTsqG9gyH.jpg?imageMogr2/thumbnail/1080x360!">
            </div>
            <div class="swiper-slider">
                <img src="http://image.mindcherish.com/upload/expertbanner/170629/14bIZO-1FTsqG9gyH.jpg?imageMogr2/thumbnail/1080x360!">
            </div>
            <div class="swiper-slider">
                <img src="http://image.mindcherish.com/upload/expertbanner/170629/14bIZO-1FTsqG9gyH.jpg?imageMogr2/thumbnail/1080x360!">
            </div>
            <div class="swiper-slider">
                <img src="http://image.mindcherish.com/upload/expertbanner/170629/14bIZO-1FTsqG9gyH.jpg?imageMogr2/thumbnail/1080x360!">
            </div>
            <div class="swiper-slider">
                <img src="http://image.mindcherish.com/upload/expertbanner/170629/14bIZO-1FTsqG9gyH.jpg?imageMogr2/thumbnail/1080x360!">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'swiper',
        data () {
            return {
                options: {
                    element: 'swiper-wrapper'
                },
                swiper: {
                    startX: 0,
                    startY: 0,
                    moveX: 0,
                    moveY: 0
                },
                swiperStyle: '',
                swiperWidth: 0,
                swiperLength: 0
            }
        },
        methods: {
            swiperTouchStart: function (e) {
                const touches = e.touches[0]
                this.swiper.startX = touches.pageX - this.swiper.moveX
                // console.log(e.touches, this.swiper, 's')
            },
            swiperTouchMove: function (e) {
                const touches = e.touches[0]
                let moveX = touches.pageX - this.swiper.startX
                if (moveX > 160) {
                    moveX = 160
                }
                this.swiperStyle = 'transition-duration: 0ms;transform: translate3d(' + moveX + 'px, 0px, 0px)'
                // console.log(e.touches, 'm')
            },
            swiperTouchEnd: function (e) {
                const touches = e.changedTouches[0]
                const hasMoveX = this.swiper.moveX
                this.swiper.moveX = touches.pageX - this.swiper.startX
                console.log(this.swiper.moveX, hasMoveX)
                if (this.swiper.moveX > 0) {
                    this.swiper.moveX = 0
                    this.swiperStyle = 'transition-duration: 300ms;transform: translate3d(0px, 0px, 0px)'
                } else {
                    let swiperMultiple = Math.ceil(Math.abs(this.swiper.moveX / this.swiperWidth))
                    if (hasMoveX > this.swiper.moveX) {
                        swiperMultiple = -swiperMultiple
                    } else {
                        swiperMultiple = -Math.floor(Math.abs(this.swiper.moveX / this.swiperWidth))
                    }
                    if (swiperMultiple <= -this.swiperLength) {
                        swiperMultiple = -this.swiperLength + 1
                    }
                    let additionalMove = swiperMultiple * this.swiperWidth
                    this.swiper.moveX = additionalMove
                    this.swiperStyle = 'transition-duration: 300ms;transform: translate3d(' + additionalMove + 'px, 0px, 0px)'
                }
                // console.log(e.changedTouches, 'e')
            }
        },
        mounted: function () {
            this.swiperWidth = document.body.clientWidth
            this.swiperLength = document.querySelectorAll('.swiper-slider').length
            console.log(document.querySelectorAll('.swiper-slider').length)
        }
    }
</script>

<style type="text/sass" lang="scss">
    .swiper {
        &-container {
            position: relative;
            width: 100%;
            overflow: hidden;
            z-index: 1;
        }
        &-wrapper {
            display: flex;
            width: 100%;
            height: 100%;

            transition-property: transform;
        }
        &-slider {
            position: relative;
            display:flex;
            box-pack: center;
            justify-content: center;
            box-align: center;
            align-items: center;
            flex-shrink: 0;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
            }
        }
    }
</style>
