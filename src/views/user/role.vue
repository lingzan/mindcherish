<template>
    <div class="user-role">
        <section>
            <h4 class="user-role-title">开启开关用户才能向您提问</h4>
            <div class="user-role-item">
                <p>允许被提问</p>
                <SwitchBtn switch-btn-class="user-role-btn" />
            </div>
            <div class="user-role-item">
                <p>被提问价格</p>
                <SwitchBtn switch-btn-class="user-role-btn" />
            </div>
        </section>
        <section>
            <h4 class="user-role-title">开启开关用户才能对您回答的问题追问</h4>
            <div class="user-role-item">
                <p>允许被追问</p>
                <SwitchBtn switch-btn-class="user-role-btn" />
            </div>
        </section>
        <section>
            <h4 class="user-role-title">开启开关用户可以使用答案试看券查看您的回答</h4>
            <div class="user-role-item">
                <p>允许使用试看券查看您的答案</p>
                <SwitchBtn switch-btn-class="user-role-btn" />
            </div>
        </section>
        <section>
            <h4 class="user-role-title">开启开关您的所有提问将匿名提问</h4>
            <div class="user-role-item">
                <p>匿名提问</p>
                <SwitchBtn switch-btn-class="user-role-btn" />
            </div>
        </section>
        <section>
            <h4 class="user-role-title">开启开关您在平台上所有的回答将显示为匿名回答</h4>
            <div class="user-role-item">
                <p>匿名回答</p>
                <SwitchBtn switch-btn-class="user-role-btn" />
            </div>
        </section>
    </div>
</template>

<script>
    import SwitchBtn from '../../components/common/switchBtn'
    export default {
        name: 'user-role',
        components: {SwitchBtn}
    }
</script>

<style type="text/sass" lang="scss">
    @import '../../style/mixin.scss';
    @import '../../style/func.scss';
    .user-role {
        &-title {
            padding: 18px 16px 9px;

            font-size: pxToRem(13);
            line-height: pxToRem(13);
            color: rgba(0,0,0,.25);
            background: #f2f2f2;
        }
        &-item {
            position: relative;
            width: 100%;
            height: 44px;
            padding: 0 16px;

            line-height: 44px;
            font-size: pxToRem(14);
            color: rgba(0, 0, 0, 0.87);
            border-bottom: 1px solid #f2f2f2;
        }
        &-btn {
            position: absolute !important;
            top: 10px;
            right: 16px;
        }
    }
</style>
