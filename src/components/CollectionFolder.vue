<template>
    <div class="box" v-bind:id="getIdPath(item.name)">
        <a v-bind:id="item.id"></a>
        <h3 class="title is-3">{{item.name}}</h3>
        <hr>
        <div v-for="innerItem in item.items.all()" v-bind:key="innerItem.id">
            <collection-folder v-if="isItemGroup(innerItem)" :item="innerItem" :path="getPath(item.name)"></collection-folder>
            <collection-request v-else :item="innerItem" :path="getPath(item.name)"></collection-request>
        </div>
    </div>
</template>

<script>
    import CollectionRequest from './CollectionRequest';
    import collectionMixin from "../mixin/collectionMixin";

    export default {
        name: "CollectionFolder",
        components: {CollectionRequest},
        mixins: [collectionMixin],
        props: {
            item: Object,
            path: String
        },
        methods: {
            getPath(name){
                if(name)
                return `${this.path}/${name}`;
                return this.path
            },
            getIdPath(name) {
                return this.getPath(name).replace(/\W/ig, '-');
            }
        }
    }
</script>

<style scoped>
.box {
    margin-bottom: 10px;
}
</style>