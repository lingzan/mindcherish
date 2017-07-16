<template>
    <div class="search-header">
        <div class="left">
            <i class="iconfont icon-sousuo"></i><input @input="search" v-model="searchKey" placeholder="搜索智答、文章和用户"/>
        </div>
        <button class="right" @click="cancle()">{{btnText}}</button>
    </div>
</template>

<script>
    export default {
        name: 'search-header',
        data () {
            return {
                btnText: '取消'
            }
        },
        props: {
            searchInput: '',
            searchClick: '',
            searchKey: ''
        },
        methods: {
            cancle () {
                if (this.keys) {
                    this.searchClick(this.keys.trim())
                } else {
                    window.history.go(-1)
                }
            },
            search () {
                if (this.keys) {
                    this.btnText = '搜索'
                    this.searchInput(this.keys.trim())
                } else {
                    this.btnText = '取消'
                    // window.history.go(-1)
                }
            }
        }
    }
</script>

<style type="text/sass" lang="scss" scoped>
    @import '../../style/func.scss';
    .search-header {
        // width: 100%;
        height: 52px;
        padding:8px 16px;
        margin-bottom: 10px;
        background: #fff;

        .left {
            display: block;
            margin-right: 40px;
            height: 36px;

            line-height: 36px;
            font-size: pxToRem(15);
            color: rgba(0,0,0,.38);
            background: #f3f3f3;
            border-radius: 3px;
            cursor: pointer;
            
            input {
                display: block;
                box-sizing: border-box;

                width: 100%;
                height: 36px;
                padding-left: 35px;

                outline: none;
                border: none;
                background: #f3f3f3;
            }

            i {
                position: absolute;
                left:16px;
                margin-left: 16px;

                 font-size: pxToRem(14);
            }
        }

        .right {
            position: absolute;
            top: 9px;
            right: 16px;

            height: 34px;

            font-size: pxToRem(14);
            color: rgba(0,0,0,.38);
            line-height: 34px;
            text-align: center;
            background: #fff;
            outline: none;
            border:none;
            cursor: pointer;
        }
    }
</style>
