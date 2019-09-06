<template>
    <aside class="menu sidebar" v-if="api.info">
        <a href="#api"><h3>{{api.info.name}}</h3></a>

        <ul class="menu-list">
                <sidebar-links v-if="api.item" v-for="item in api.item" :items="item" :path="`api`"></sidebar-links>
        </ul>
    </aside>
</template>

<script>
    import SidebarLinks from './SidebarLinks';
    export default {
        name: "AppSidebar",
        components: {SidebarLinks},
        props: {
            api: Object
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