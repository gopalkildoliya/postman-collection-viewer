<template>
  <div class="columns">
    <div class="column is-3">
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" v-model="url" placeholder="URL to collection.json">
        </div>
        <div class="control">
          <button class="button is-info" @click="getApi">
            Load
          </button>
        </div>
      </div>
      <app-sidebar :api="api"></app-sidebar>
    </div>
    <div class="column is-9">
      <div>
        <div v-if="api.info" class="box">
          <h3>{{api.info.name}}</h3>
          <markdown-view :data="api.info.description"></markdown-view>
        </div>

      </div>
      <div>
      <request-view :api="api"></request-view>
      </div>
      
    </div>
  </div>

</template>

<script>
  import CollectionFolder from './CollectionFolder';
  import CollectionRequest from './CollectionRequest';
  import RequestView from './RequestView';
  import AppSidebar from './AppSidebar';
export default {
  name: 'HelloWorld',
  components: {CollectionFolder, CollectionRequest, AppSidebar, RequestView},
  props: {
    msg: String
  },
  data() {
    return {
      api: {},
      url: ''
    }
  },
  mounted() {
    let url = localStorage.getItem('apiUrl');
    if(url){
      this.sendApiRequest(url);
    }
  },
  methods: {
    getApi(){
      this.sendApiRequest(this.url);
    },
    sendApiRequest(url){
        fetch(url).then(response => response.json()).then(data => {
          console.log(data);
          localStorage.setItem('apiUrl', url);
          this.api = data;
        }).catch(error => {
          console.log(error);
        });
    },
    getPath(name){
      return `/#/api/${name}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
