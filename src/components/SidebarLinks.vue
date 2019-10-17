<template>
    <li class="item">
            <b-collapse  :open.sync="isOpen" v-if="items.item" >
                <div slot="trigger">
                    <a :href="getIdPath(items.name)" active-class="is-active" v-scroll-to="getIdPath(items.name)">
                        <b-icon
                                :icon="icon"
                                size="is-small">
                        </b-icon>
                        {{items.name}}
                    </a>
                </div>

                <div class="links-block">
                    <ul class="menu-list">
                        <sidebar-links v-for="item in items.item" :items="item" :path="getPath(items.name)"></sidebar-links>
                    </ul>
                </div>
            </b-collapse>

        <div v-else class="control">
            <a :href="getIdPath(items.name)" active-class="is-active" v-scroll-to="getIdPath(items.name)">
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
    export default {
        name: "SidebarLinks",
        props: {
            items: [Array, Object],
            path: String
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
            getPath(name){
                return `${this.path}/${name}`;
            },
            getIdPath(name) {
                return '#'+this.getPath(name).replace(/\W/ig, '-');
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
