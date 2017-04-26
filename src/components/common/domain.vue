<template>
    <div class="default-domain">
        <div class="default-domain-selected">
            <div class="placeholder" v-if="(selectedData.length == 0)">选择领域（1-3）</div>
            <span @click="removeSelected(item)" v-for="item in selectedData">{{item.name}}</span>
        </div>
        <div class="default-domain-box">
            <ul class="default-domain-item level-one">
                <li :class="{'active': filtersSelected(item.id)}" @click="clickSelect(item)" v-for="item in oneLevel">{{item.name}}<i></i></li>
            </ul>
            <ul class="default-domain-item level-two">
                <li :class="{'active': filtersSelected(item.id)}" @click="clickSelect(item)" v-for="item in secondLevel">{{item.name}}<i></i></li>
            </ul>
            <ul class="default-domain-item level-third">
                <li @click="clickSelect(item)" :class="{'active': filtersSelected(item.id)}" v-for="item in thirdLevel">{{item.name}}<i></i></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'default-domain',
        data () {
            return {
                domain: [{'id': '56', 'name': '\u5927\u5b97\u4ea7\u4e1a', 'level_depth': '0', 'level_path': '56'}, {'id': '95', 'name': '\u94a2\u6750\u94c1\u77ff', 'level_depth': '2', 'level_path': '56-60-95'}, {'id': '96', 'name': '\u7126\u70ad\u7164\u70ad', 'level_depth': '2', 'level_path': '56-60-96'}, {'id': '97', 'name': '\u94c1\u5408\u91d1', 'level_depth': '2', 'level_path': '56-60-97'}, {'id': '98', 'name': '\u5176\u4ed6', 'level_depth': '2', 'level_path': '56-60-98'}, {'id': '61', 'name': '\u6709\u8272\u91d1\u5c5e', 'level_depth': '1', 'level_path': '56-61'}, {'id': '100', 'name': '\u94dd', 'level_depth': '2', 'level_path': '56-61-100'}, {'id': '101', 'name': '\u950c', 'level_depth': '2', 'level_path': '56-61-101'}, {'id': '102', 'name': '\u94c5', 'level_depth': '2', 'level_path': '56-61-102'}, {'id': '103', 'name': '\u954d', 'level_depth': '2', 'level_path': '56-61-103'}, {'id': '104', 'name': '\u9521', 'level_depth': '2', 'level_path': '56-61-104'}, {'id': '105', 'name': '\u5176\u4ed6', 'level_depth': '2', 'level_path': '56-61-105'}, {'id': '99', 'name': '\u94dc', 'level_depth': '2', 'level_path': '56-61-99'}, {'id': '62', 'name': '\u8d35\u91d1\u5c5e', 'level_depth': '1', 'level_path': '56-62'}, {'id': '106', 'name': '\u5176\u4ed6', 'level_depth': '2', 'level_path': '56-62-106'}, {'id': '63', 'name': '\u80fd\u6e90\u5316\u5de5', 'level_depth': '1', 'level_path': '56-63'}, {'id': '107', 'name': '\u539f\u6cb9', 'level_depth': '2', 'level_path': '56-63-107'}, {'id': '108', 'name': '\u5929\u7136\u6c14', 'level_depth': '2', 'level_path': '56-63-108'}, {'id': '109', 'name': '\u5929\u7136\u6a61\u80f6', 'level_depth': '2', 'level_path': '56-63-109'}, {'id': '110', 'name': '\u5851\u6599', 'level_depth': '2', 'level_path': '56-63-110'}, {'id': '111', 'name': '\u7532\u9187', 'level_depth': '2', 'level_path': '56-63-111'}],
                selectedData: []
            }
        },
        computed: {
            oneLevel: function () {
                let _domain = this.domain
                let _oneLevel = []
                _domain.forEach(function (item) {
                    if (item.level_depth - 0 === 0) {
                        _oneLevel.push(item)
                    }
                })
                return _oneLevel
            },
            secondLevel: function () {
                let _domain = this.domain
                let _secondLevel = []

                _domain.forEach(function (item) {
                    if (item.level_depth - 1 === 0) {
                        _secondLevel.push(item)
                    }
                })

                return _secondLevel
            },
            thirdLevel: function () {
                let _domain = this.domain
                let _thirdLevel = []

                _domain.forEach(function (item) {
                    if (item.level_depth - 2 === 0) {
                        _thirdLevel.push(item)
                    }
                })

                return _thirdLevel
            }
        },
        methods: {
            filtersSelected: function (value) {
                let _selectedData = this.selectedData
                let _selectFlag = false
                _selectedData.forEach(function (item) {
                    if (item.id === value) {
                        _selectFlag = true
                    }
                })
                return _selectFlag
            },
            clickSelect: function (val) {
                let isInSelectedData = -1
                this.selectedData.forEach(function (item, i) {
                    if (val.id === item.id) {
                        isInSelectedData = i
                    }
                })
                if (isInSelectedData > -1) {
                    this.selectedData.splice(isInSelectedData, 1)
                } else {
                    this.selectedData.push(val)
                }
            },
            removeSelected: function (val) {
                var _this = this
                this.selectedData.forEach(function (item, i) {
                    if (val.id === item.id) {
                        _this.selectedData.splice(i, 1)
                    }
                })
            }
        }
    }
</script>

<style type="text/sass" lang="scss">
    @mixin text-overflow ($clomun) {
        display: -webkit-box;
        -webkit-line-clamp: $clomun;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .default-domain {
        background: #f2f2f2;
        &-box {
            display: flex;
            flex-direction: rows;

            background: #fff;
        }

        &-selected {

            .placeholder {
                text-align: center;
                color: rgba(0,0,0,.38);
            }
            padding: 0 16px;
            margin-bottom: 10px;
            height: 44px;
            line-height: 44px;

            @include text-overflow(1)
            background: #fff;

            span {
                padding: 3px 6px;
                margin-right: 3px;
                font-size: 12px;
                color: #0af;
                border-radius: 100px;
                opacity: .6;
                background: #e6f7ff;
                cursor: pointer;
            }
        }

        &-item {
            flex: 1;
            
            li {
                height: 54px;

                line-height: 54px;
                text-align: center;

                cursor: pointer;

                &.active {
                    color: #0af;
                    background: #e6f7ff;
                    position: relative;

                    i {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 26px;
                        height: 26px;

                        background: url(../../assets/icon/icon-selected.png) no-repeat;
                        background-size: contain;
                    }
                }
            }

            &.level-one {
                color: rgba(0,0,0,.87);
                font-weight: 600;
                border-right: 1px solid #f2f2f2;
            }

            &.level-two {
                color: rgba(0,0,0,.87);
                font-size: 14px;
                border-right: 1px solid #f2f2f2;
            }

            &.level-third {
                color: rgba(0,0,0,.87);
                font-size: 14px;
            }
        }
    }
</style>
