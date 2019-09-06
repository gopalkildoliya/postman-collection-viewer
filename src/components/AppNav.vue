<template>
    <b-navbar type="is-success">
        <template slot="brand">
            <b-navbar-item href="/">
                Postman Collection Viewer
            </b-navbar-item>
        </template>
        <template slot="start">
            
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
	                
                    <a href="https://github.com/gopalkildoliya/postman-collection-viewer">
                        <b-button size="is-medium" type="is-primary"
	                		icon-left="github-circle">
	                	Github
	            		</b-button>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    export default {
        name: "AppNav",
        props: {
            api: Object
        },
    }
</script>

<style scoped>
</style>