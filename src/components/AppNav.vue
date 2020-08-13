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
                    <a href="https://github.com/gopalkildoliya/postman-collection-viewer" class="button is-primary">
                            <b-icon icon="github-circle"></b-icon>
                            <span>Github</span>
                    </a>
                    <a href="https://twitter.com/Gopalkildoliya" class="button is-info">
                        <b-icon icon="twitter"></b-icon>
                        <span>Gopal Kildoliya</span>
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