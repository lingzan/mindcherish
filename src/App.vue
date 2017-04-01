<template>
    <div id="app">
        <!-- <div id="main" :style="{width:'600px',height:'400px'}"></div> -->
        <router-view></router-view>
        <Avatar type="expert" imgsize="40" /><Avatar />
        <Clomun text='收藏' iconClass="icon-jinengget" msgNum="32"></Clomun>
        <Clomun text='活动' ></Clomun>
        <Clomun text='收藏' iconClass="icon-xuanshang"><SwitchBtn /></Clomun>
        <Clomun text='收藏' iconClass="icon-qianbao"></Clomun>
    </div>
</template>

<script>
// import echarts from 'echarts'
import Avatar from './components/avatar/user'
import Clomun from './components/user/clomun'
import SwitchBtn from './components/common/switchBtn'

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
    components: { Avatar, Clomun, SwitchBtn }
}
</script>

<style type="text/sass" lang="scss">
@import url('//at.alicdn.com/t/font_ey75r7cln6axxbt9.css');

body,html {
    min-width: 320px;
    min-height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
*{
    margin: 0;
    padding: 0;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0,0,0,.87);
    margin-top: 60px;
}
</style>
