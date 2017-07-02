<template>
    <section class="fine-module" >
        <ModuleHeader :actor="fine" module-header-class="fine-module-header"/>
        <WellChosenModule :well-chosen="fine.content"/>
    </section>
</template>

<script>
    import Avatar from '../../components/avatar/user'
    import User from '../../components/common/user'
    import ModuleHeader from '../flow/moduleHeader'
    import WellChosenModule from '../wellChosen/module'

    export default {
        name: 'article-module',
        props: {
            fine: ''
        },
        components: { Avatar, User, ModuleHeader, WellChosenModule }
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .fine-module {
        margin-bottom: 10px;
        background: #fff;

        &:last-child {
            margin-bottom: 0;
        }
        
        &-header {
            height: 40px;
            padding: 0 16px;

            line-height: 40px;
             font-size: pxToRem(13);

            border-bottom: 1px solid #f2f2f2;

        }
        &-title {
            margin:6px 0 8px;

             font-size: pxToRem(18);
            line-height: 23px;
            font-weight: 500;

            @include textOverflow(2)
        }
        
    }
</style>
