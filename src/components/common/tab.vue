<template>
    <div class="tab" :class="tabClass">
        <ul>
            <li v-for="item in sub" 
                :key="item"
                :class="{'active': item.type === tabCurrent}"
                @click="tabClick(item.type)"
            >{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'tab',
        props: {
            tab: '',
            tabCurrent: '',
            tabClass: '',
            tabClick: ''
        },
        computed: {
            sub: function () {
                if (typeof this.tab !== 'undefined' && this.tab !== '') {
                    return this.tab
                } else {
                    return []
                }
            }
        },
        methods: {
            switchTab (name) {
                this.tabClick(name)
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
    .tab {
        background: #fff;
        font-size: pxToRem(14);
        
        ul {
            display: flex;
            box-sizing: border-box;
            width:100%;
            height: 40px;

            line-height: 40px;

            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            
            

            li {
                position: relative;
                flex: 1;
                text-align: center;
                cursor: pointer;
                color: rgba(0,0,0,.38);

                &.active {
                    color: #ffa42f;
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
            }
        }
    }
</style>
