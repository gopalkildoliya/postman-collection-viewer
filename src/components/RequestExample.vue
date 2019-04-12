<template>
    <div>
        {{response.name}}
        <b-field grouped group-multiline>
            <div class="control">
                <b-taglist attached>
                    <b-tag type="is-dark">Code</b-tag>
                    <b-tag type="is-info">{{response.code}}</b-tag>
                </b-taglist>
            </div>
            <div class="control">
                <b-taglist attached>
                    <b-tag type="is-dark">Status</b-tag>
                    <b-tag type="is-primary">{{response.status}}</b-tag>
                </b-taglist>
            </div>
        </b-field>
        <pre v-html="response.body"></pre>
    </div>
</template>

<script>
    export default {
        name: "RequestExample",
        props: {response: Object}
    }
</script>

<style scoped>

</style>