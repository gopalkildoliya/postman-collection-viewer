<template>
    <div v-html="markdown(data)">
    </div>
</template>

<script>
    import marked from 'marked';
    export default {
        name: "MarkdownView",
        props: ['data'],
        methods: {
            markdown(data){
                if(data)
                    return marked(data);
                return data;
            }
        }
    }
</script>

<style scoped>

</style>