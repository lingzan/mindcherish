<template>
    <div class="wellChosen" v-infinite-scroll="loadMore">
        <router-link :to="'/special/' + wellChosen.id" v-for="wellChosen in wellChosens" :key="wellChosen.id">
            <WellChosenModule well-chosen-class="wellChosen-item"  :well-chosen="wellChosen" />
        </router-link>
        <loading-notice-component :is-over="isOver" :is-empty="isEmpty" overText="已加载全部" emptyText="空状态"/>
    </div>
</template>

<script>
    import WellChosenModule from '../../components/wellChosen/module'
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        name: 'special-clomun',
        computed: {
            ...mapGetters({
                wellChosens: 'wellChosenList',
                loading: 'getLoading'
            }),
            ...mapState({
                loading: state => state.common.loading,
                page: state => state.wellChosen.page,
                isOver: state => state.wellChosen.isOver,
                isEmpty: state => state.wellChosen.isEmpty
            })
        },
        methods: {
            ...mapActions(['getWellChosenList']),
            wellChosenFormat: function (question) {
                let _question = {}
                _question = question
                return _question
            },
            loadMore () {
                let that = this
                if (that.loading || that.isOver || that.isEmpty || that.page === 1) {
                    return
                }
                that.getWellChosenList({
                    page: that.page,
                    rows: 10
                })
            }
        },
        beforeRouteEnter: function (to, from, next) {
            // transition.next()
            // alert('l')
            next(vm => {
                console.log('vm', vm.$store)
                vm.$store.dispatch('getWellChosenList', {
                    page: 1,
                    rows: 10
                })
                // console.log('vm2', vm.$store.state)
            })
            console.log(to, from)
        },
        components: { WellChosenModule }
    }
</script>

<style type="text/sass" lang="scss">
   .wellChosen {
        background: #f2f2f2;
        margin-top: 10px;
        
        &-item {
            border-bottom: 1px solid #f2f2f2;
        }

   }
</style>
