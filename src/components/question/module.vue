<template>
    <router-link :to="'/question/' + question.content.id">
        <p class="question-module-title">{{question.content.title}}</p>
        <ModuleQaBox :box="question" />
    </router-link>
</template>

<script>
    import ModuleQaBox from '../flow/moduleTypeBox'
    export default {
        name: 'question-item',
        props: {
            question: ''
        },
        components: {ModuleQaBox}
    }
</script>
