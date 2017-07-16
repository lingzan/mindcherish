<template>
    <div class="search-record">
        <div class="search-history">
            <h3 class="search-history-title">历史搜索 <i class="fr iconfont icon-lajitong"></i></h3>
            <ul class="search-history-box">
                <li class="search-history-item" @click="searchClick(item)" v-for="item in history" :key="item">黑色金属</li>
            </ul>
        </div>
        <div class="search-hot" v-if="hot">
            <h3 class="search-hot-title">热门搜索</h3>
            <ul class="search-hot-box">
                <li class="search-hot-item" @click="searchClick(item)" v-for="item in hot" :key="item">{{item}}</li>
            </ul>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'search-record',
        props: {
            hot: '',
            searchClick: ''
        },
        computed: {
            history () {
                return [1231, 321, 321]
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/func.scss';
    .search {
        &-record {
            background: #fff;
        }

        &-history, &-hot {
            padding: 16px 16px 0;

            &-title {
                margin-bottom: 14px;
                font-size: pxToRem(14);
                font-weight: 500;
                color: rgba(0,0,0,.54);

                i {
                    position: relative;
                    top: 2px;
                    font-size: pxToRem(14);
                    color: rgba(0,0,0,.54);
                }
            }

            &-box {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
            }

            &-item {
                box-sizing: border-box;
                margin:0 10px 10px 0;
                height: 31px;
                padding:9px 10px;
                
                font-size: pxToRem(13);
                line-height: 13px;
                border-radius: 100px;
                background: #f2f2f2;
                cursor: pointer;
            }
        }
    }
</style>
