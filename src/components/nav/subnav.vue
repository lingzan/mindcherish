<template>
    <div class="subnav">
        <ul>
            <router-link :to="item.url" v-for="item in sub" :key="item"><li >{{item.name}}</li></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'subnav',
        props: {
            subnavs: ''
        },
        computed: {
            sub: function () {
                if (typeof this.subnavs !== 'undefined' && this.subnavs !== '') {
                    return this.subnavs
                } else {
                    return []
                }
            }
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    a.router-link-active {
        color: #ffa42f !important;
        li {
            color: #ffa42f !important;
        }
        &:before {
            content: '';
            position: absolute;
            left: 5px;
            bottom: 0;
            display: block;
            width: calc(100% - 10px);
            height: 3px;
            background: #ffa42f;
        }
    }
    .subnav {
         font-size: pxToRem(14);
        ul {
            display: flex;
            box-sizing: border-box;
            width:100%;
            height: 40px;

            line-height: 40px;
            background: #fff;

            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            
            a {
                position: relative;
                display: block;
                flex: 1;
                text-align: center;
            }

            li {
                color: rgba(0,0,0,.38);

                &.active {
                    color: rgba(0,0,0,.87);
                }
            }
        }
    }
</style>
