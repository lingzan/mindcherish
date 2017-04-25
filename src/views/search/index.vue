<template>
    <div class="search">
        <SearchHeader />
        <SearchHistory />
    </div>
</template>

<script>
    import SearchHeader from '../../components/search/search'
    import SearchHistory from '../../components/search/history'

    export default {
        name: 'nav-search',
        components: { SearchHeader, SearchHistory }
    }
</script>

<style type="text/sass" lang="scss">
    .search {
        background-color: #f2f2f2;
    }
</style>
