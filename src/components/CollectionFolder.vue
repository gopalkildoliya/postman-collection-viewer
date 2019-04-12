<template>
    <div class="box">
        <h3 class="title is-3">{{item.name}}</h3>
        <hr>
        <div v-for="item in item.item">
            <collection-folder v-if="item.item" :item="item"></collection-folder>
            <collection-request v-else :item="item"></collection-request>
        </div>
    </div>
</template>

<script>
    import CollectionRequest from './CollectionRequest';

    export default {
        name: "CollectionFolder",
        components: {CollectionRequest},
        props: {
            item: Object
        },
    }
</script>

<style scoped>

</style>