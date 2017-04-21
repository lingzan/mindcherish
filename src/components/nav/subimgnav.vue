<template>
    <div class="subimgnav" :class="subclass">
        <ul>
            <router-link :to="item.url" v-for="item in sub"><li><i class="iconfont" :class="item.icon"></i>
            <p>{{item.name}}</p></li></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'subimgnav',
        props: {
            subimg: '',
            subclass: ''
        },
        computed: {
            sub: function () {
                if (typeof this.subimg !== 'undefined' && this.subimg !== '') {
                    return this.subimg
                } else {
                    return []
                }
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    .subimgnav {
        color: rgba(0,0,0,.54);
        
        ul {
            display: flex;
            box-sizing: border-box;
            width:100%;

            background: #fff;

            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            
            a {
                display: block;
                flex: 1;
                text-align: center;
            }

            li {
                font-size: 12px;
                text-align: center;
                
                

                // p {
                //     margin-top: 5px;
                // }
            }
        }

        i {
            width: 36px;
            height: 36px;
            margin: 0 auto;
            display: block;
        }
    }
</style>
