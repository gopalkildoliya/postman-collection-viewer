<template>
    <li class="item">
            <b-collapse  :open.sync="isOpen" v-if="isItemGroup(items)" >
                <div slot="trigger">
                    <a :href="getIdPath(items.id)" active-class="is-active">
                        <b-icon
                                :icon="icon"
                                size="is-small">
                        </b-icon>
                        {{items.name}}
                    </a>
                </div>

                <div class="links-block">
                    <ul class="menu-list">
                        <sidebar-links v-for="item in items.items.all()" :items="item" v-bind:key="item.id"></sidebar-links>
                    </ul>
                </div>
            </b-collapse>

        <div v-else class="control">
            <a :href="getIdPath(items.id)" active-class="is-active">
                <div class="tags has-addons">
                    <span class="tag is-success tag-width" v-if="items.request.method == 'GET'">{{items.request.method}}</span>
                    <span class="tag is-info tag-width" v-if="items.request.method == 'POST'">{{items.request.method}}</span>
                    <span class="tag is-warning tag-width" v-if="items.request.method == 'PUT'">{{items.request.method}}</span>
                    <span class="tag is-danger tag-width" v-if="items.request.method == 'DELETE'">{{items.request.method}}</span>
                    <span class="tag"> {{items.name}}</span>
                </div>
            </a>
        </div>
    </li>

</template>

<script>
    import collectionMixin from "../mixin/collectionMixin";

    export default {
        name: "SidebarLinks",
        mixins: [collectionMixin],
        props: {
            items: [Array, Object]
        },
        data(){
            return {
                isOpen: false
            }
        },
        computed: {
            icon(){
                return this.isOpen ? 'folder-open' : 'folder';
            }
        },
        methods: {
            getIdPath(name) {
                return '#'+name;
            }
        }
    }
</script>

<style scoped>
    .item{
        padding-left: 0em;
    }
    .links-block{
        border: 1px solid #f5f5f5;
        margin-bottom: 1em;
    }
    .tag {
        justify-content: left;
    }
    .tag-width {
        width: 60px;
    }
</style>
