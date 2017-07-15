<template>
    <div class="expert-more">
        <Tab :tab="tab" 
             :tab-current="tabCurrent"
             :tab-click="switchTab"
             tab-class="expert-more-tab"/>
        <div>
            <Expert expert-class="expert-more-item" :expert="expert.expert_user" v-for="expert in experts" :key="expert.id"/>
        </div>
    </div>
</template>

<script>
    import Expert from '../../components/expert/info'
    import Tab from '../../components/common/tab'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'expert-info',
        props: {
            expert: ''
        },
        data () {
            return {
                tab: [
                    {name: '全部智咖', type: 'hot'},
                    {name: '最新智咖', type: 'new'}
                ],
                tabCurrent: 'hot'
            }
        },
        computed: {
            ...mapGetters(['experts'])
        },
        methods: {
            ...mapActions(['getExperts']),
            switchTab (name) {
                this.tabCurrent = name
                this.getExperts({
                    get_userstat: 1,
                    orderby: name,
                    page: 1,
                    rows: 12
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('getExperts', {
                    get_userstat: 1,
                    orderby: 'hot',
                    page: 1,
                    rows: 12
                })
            })
        },
        components: { Expert, Tab }
    }
</script>

<style type="text/sass" lang="scss">
    .expert {
        &-more {
            background: #f2f2f2;
            &-tab {
                margin-bottom: 10px;
            }
            &-item {
                padding: 16px;
                border-bottom: 1px solid #f2f2f2;
            }
        }
    }
</style>
