<template>
    <div class="wellChosen">
        <router-link :to="'/special/' + wellChosen.id" v-for="wellChosen in wellChosens" :key="wellChosen.id">
            <WellChosenModule well-chosen-class="wellChosen-item"  :well-chosen="wellChosen" />
        </router-link>
    </div>
</template>

<script>
    import WellChosenModule from '../../components/wellChosen/module'
    import {mapGetters} from 'vuex'

    export default {
        name: 'special-clomun',
        computed: mapGetters({
            wellChosens: 'wellChosenList',
            loading: 'getLoading'
        }),
        methods: {
            wellChosenFormat: function (question) {
                let _question = {}
                _question = question
                return _question
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
