<template>
    <aside class="menu sidebar" v-if="collection && collection.name">
        <div>
            <a href="https://www.buymeacoffee.com/gopal" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
        </div>

        <a href="#api-home"><h3>{{collection.name}}</h3></a>

        <ul class="menu-list" v-if="collection.items">
                <sidebar-links  v-for="item in collection.items.all()" :items="item" v-bind:key="item.id"></sidebar-links>
        </ul>
    </aside>
</template>

<script>
    import SidebarLinks from './SidebarLinks';
    export default {
        name: "AppSidebar",
        components: {SidebarLinks},
        props: {
            collection: Object
        },
    }
</script>

<style scoped>
    .sidebar {
        z-index: 10;
        top: 60px;
        left: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
    }
    .menu{
        position: fixed;
    }
</style>