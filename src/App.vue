<template>
    <div id="app" class="">
        <router-view></router-view>
        <loading-component />
    </div> 
</template>

<script>
// import echarts from 'echarts'
import Avatar from './components/avatar/user'
import Clomun from './components/user/clomun'
import SwitchBtn from './components/common/switchBtn'
import SubNav from './components/nav/subnav'

export default {
    name: 'app',
    data () {
        return {}
    },
    mounted () {
        // var myChart = echarts.init(document.getElementById('main'))
        // myChart.setOption({
        //     title: {
        //         text: '自定义雷达图'
        //     },
        //     radar: {
        //         shape: 'circle',
        //         indicator: [
        //            {name: '销售（sales）', max: 6500},
        //            {name: '管理（Administration）', max: 16000},
        //            {name: '信息技术（Information Techology）', max: 30000},
        //            {name: '客服（Customer Support）', max: 38000},
        //            {name: '研发（Development）', max: 52000},
        //            {name: '市场（Marketing）', max: 25000}
        //         ]
        //     },
        //     series: [{
        //         name: '预算 vs 开销（Budget vs spending）',
        //         type: 'radar',
        //         data: [
        //             {
        //                 value: [4300, 10000, 28000, 35000, 50000, 19000],
        //                 name: '预算分配（Allocated Budget）'
        //             },
        //             {
        //                 value: [5000, 14000, 28000, 31000, 42000, 21000],
        //                 name: '实际开销（Actual Spending）'
        //             }
        //         ]
        //     }]
        // })
    },
    components: { Avatar, Clomun, SwitchBtn, SubNav }
}
</script>

<style type="text/sass" lang="scss">
    @import url('//at.alicdn.com/t/font_p8tiawop009ysyvi.css');
    @import './style/mixin.scss';

body,html {
    min-width: 320px;
    min-height: 100%;
    height: 100%;
    font-family:  -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 16px;
}
*{
    outline: 0;
    margin:0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.clearfix:before {
    content: '';
    display: block;
}
.clearfix:after {
    content: '';
    display: block;
    clear: both;
    zoom: 1;
    overflow: hidden;
}
a {
    text-decoration: none;
    color: rgba(0,0,0,.87);
}
li {
    list-style: none;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0,0,0,.87);
    // margin-top: 60px;
}

.speakContentBox{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    padding: 0 0 0;
    overflow: auto;
    overflow-x: hidden;
    background: #f2f2f2;
    -webkit-overflow-scrolling: touch;
}
.scrollContentBox{
    position: relative;
    min-height: 105%;
    z-index: 2;
}
/*flex 布局 解决移动端输入框弹出问题*/
.flex{
    &-body {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: vertical;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-flex-direction: column;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    &-main {
        position: relative;
        height: 100%;
        width: 100%;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        overflow: hidden;
    }

    &-other {
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        -ms-flex-negative: 0;
        flex-shrink: 0;
    }
}

.speakBox{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
