<template>
    <div class="default-avatar" :class="imgClassObject" >
        <img :src="imgUrls">
        <em :class="iconClassObject"></em>
    </div>
</template>
<script>
    export default {
        name: 'base-avatar',
        props: {
            type: '',
            avatarSize: '',
            avatarUrl: '',
            avatarClass: ''
        },
        computed: {
            imgUrls: function () {
                return this.imgUrl || 'http://image.mindcherish.com/upload/face/160919/14J2I0G-zTV4XRN7QR.jpeg'
            },
            imgClassObject: function () {
                let imgClass = {}
                switch (this.avatarSize) {
                case '66':
                    imgClass = 'img-size-sixty-six'
                    break
                case '54':
                    imgClass = 'img-size-fifty-four'
                    break
                case '50':
                    imgClass = 'img-size-fifty'
                    break
                case '40':
                    imgClass = 'img-size-forty'
                    break
                case '36':
                    imgClass = 'img-size-thridty-six'
                    break
                case '24':
                    imgClass = 'img-size-twenty-four'
                    break
                case '16':
                    imgClass = 'img-size-sixteen'
                    break
                default:
                    imgClass = 'img-size-twenty'
                    break
                }
                return imgClass + ' ' + this.avatarClass
            },
            iconClassObject: function () {
                return {
                    'default-expert': this.type === 'expert',
                    'default-talent': this.type === 'talent'
                }
            }
        }
    }
</script>
<style type="text/sass" lang="scss" scoped>
    .default{
        &-avatar {
            position: relative;

            width: 100%;
            height: 100%;


            img {
                width:100%;
                height: 100%;
                border-radius: 50%; 
            }

            em {
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }

        &-talent {
            background: url(../../assets/icon/icon-talent.png) no-repeat;
            background-size: cover;
        }

        &-expert {
            background: url(../../assets/icon/icon-expert.png) no-repeat;
            background-size: cover;
        }
    }
    .img {

        &-size-sixty-six {
            width:66px;
            height: 66px;

            em {
                width: 18px;
                height: 18px;
            }
        }

        &-size-fifty-four {
            width: 54px;
            height: 54px;

            em {
                width: 14px;
                height: 14px;
            }
        }
        &-size-fifty {
            width: 50px;
            height: 50px;

            em {
                width: 14px;
                height: 14px;
            }
        }
        &-size-forty {
            width: 40px;
            height: 40px;

            em {
                width: 12px;
                height: 12px;
            }
        }
        &-size-thridty-six {
            width: 36px;
            height: 36px;

            em {
                width: 13px;
                height: 13px;
            }
        }
        &-size-twenty-four {
            width: 24px;
            height: 24px;

            em {
                width: 8px;
                height: 8px;
            }
        }

        &-size-twenty {
            width: 20px;
            height: 20px;

            em {
                width: 8px;
                height: 8px;
            }
        }

        &-size-sixteen {
            width: 20px;
            height: 20px;

            em {
                width: 8px;
                height: 8px;
            }
        }
    }
</style>
