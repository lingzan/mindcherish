<template>
    <div class="subnav">
        <ul>
            <router-link :to="item.url" v-for="item in sub"><li >{{item.name}}</li></router-link>
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

<style type="text/sass" lang="scss">
    a.router-link-active {
        color: rgba(0,0,0,.87) !important;
        li {
            color: rgba(0,0,0,.87) !important;
        }        
    }
    .subnav {
        ul {
            display: flex;
            box-sizing: border-box;
            width:100%;
            height: 40px;

            line-height: 40px;
            background: #fff;
            border-bottom: solid 1px #f2f2f2;

            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            
            a {
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
