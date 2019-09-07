<template>
    <div v-bind:class="classObject" v-bind:id="getIdPath(item.name)">
        <h4 class="message-header">{{item.name}}</h4>
        <div class="message-body">
            <div v-if="item.request">
                <div class="field has-addons">
                    <p class="control">
                        <span class="select">
                          <select disabled>
                            <option>{{item.request.method}}</option>
                          </select>
                        </span>
                    </p>
                    <p class="control is-expanded">
                        <input disabled class="input" type="text" :value="item.request.url.raw" placeholder="URL">
                    </p>
                </div>
                <markdown-view :data="item.request.description">
                </markdown-view>
                <div class="box" v-if="item.request.method === 'POST'">
                    Request Body
                    <pre  v-html="item.request.body.raw">
                    </pre>
                </div>
                <div>
                    Response
                    <request-example v-for="response in item.response" :response="response"></request-example>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import RequestExample from './RequestExample'
    export default {
        name: "CollectionRequest",
        components: {RequestExample},
        props: {
            item: Object,
            path: String
        },
        computed: {
            request(){
                return this.item.request
            },
            classObject: function () {
                return {
                    'is-success': this.request && this.request.method == 'GET',
                    'is-info': this.request && this.request.method == 'POST',
                    'is-warning': this.request && this.request.method == 'PUT',
                    'is-danger': this.request && this.request.method == 'DELETE',
                    'message': true
                }
            }
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
    .message {
        margin-bottom: 1em;
    }
    .box {
        margin-bottom: 1em;
    }
</style>