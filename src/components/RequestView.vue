<template>
    <div>
        <collection-folder v-if="currentPath.item" :item="currentPath" :path="`api`"></collection-folder>
        <collection-request v-else :item="currentPath" :path="`api`"></collection-request>
    </div>
</template>

<script>
    import CollectionFolder from './CollectionFolder';
    import CollectionRequest from './CollectionRequest';
    
    export default {
        name: "RequestView",
        components: {CollectionFolder, CollectionRequest},

        methods: {
           getItem(api, path){
               console.log(path);
               console.log(api);
               let _path = path.shift();
               return api;
               if(!api.item){
                   return api;
               }
               let _matched = api.item.filter(item => item.name == _path)
                if(_matched.length == 1){
                    if (path.length > 0){
                        return this.getItem(_matched[0], path)
                    }
                    return _matched[0];
                }
                return api;
           }
        },
        computed: {
            currentPath(){
                return this.$attrs.api;
                let lines = this.$route.params.pathMatch.split('/')
                return this.getItem(this.$attrs.api, lines);

            }
        }
    }
</script>

<style scoped>

</style>