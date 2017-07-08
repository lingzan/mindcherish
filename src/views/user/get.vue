<template>
    <div class="my-get">
        <section v-for="item in userGet">
            <User :user="item.question_info.expert">
                <span>fafafafafafafa</span>
            </User>
        </section>
       
    </div>
</template>

<script>
    import User from '../../components/common/user'
    import ModuleQaBox from '../../components/flow/moduleTypeBox'
    import Operate from '../../components/common/operate'
    import {mapGetters} from 'vuex'
    export default {
        name: 'my-get',
        computed: {
            ...mapGetters(['userGet'])
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.$store.dispatch('userGet', {
                    page: 1,
                    rows: 10,
                    visiter_userid: to.params.id,
                    orderby: 'id'
                })
            })
        },
        components: {User, ModuleQaBox, Operate}
    }
</script>

<style type="text/sass" lang="scss" scoped>
    
</style>
