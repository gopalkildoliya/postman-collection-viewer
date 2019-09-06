<template>
  <div>
  <app-nav></app-nav>
  <div class="columns" style="padding-top:20px">
    <div class="column is-3">
      
      <app-sidebar :api="api"></app-sidebar>
    </div>
    <div class="column is-9" style="padding-top:10px;">
    <section>
      <div class="columns">
        <div class="field has-addons column">
          <div class="control">
            <input class="input" type="text" v-model="url" placeholder="URL to collection.json">
          </div>
          <div class="control">
            <button class="button is-info" @click="getApi">
              Load
            </button>
          </div>
        </div>
        <div class="column is-1">
          OR
        </div>
        <div class="column">
          <b-field class="file">
              <b-upload v-model="file" @input="uploadFile">
                  <a class="button is-primary">
                      <b-icon icon="upload"></b-icon>
                      <span>Upload Collection</span>
                  </a>
              </b-upload>
              <span class="file-name" v-if="file">
                  {{ file.name }}
              </span>
          </b-field>
        </div>
        </div>
      </section>
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
</div>
</template>

<script>
  import CollectionFolder from './CollectionFolder';
  import CollectionRequest from './CollectionRequest';
  import RequestView from './RequestView';
  import AppSidebar from './AppSidebar';
  import AppNav from './AppNav';
export default {
  name: 'HelloWorld',
  components: {CollectionFolder, CollectionRequest, AppSidebar, RequestView, AppNav},
  props: {
    msg: String
  },
  data() {
    return {
      api: {},
      url: '',
      file: null,
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
    },
    uploadFile() {
      let that = this;
      var reader = new FileReader();
        reader.onload = function(){
          var text = reader.result;
          try {
              var data = JSON.parse(text);
          } catch (e) {
             console.log("Invalid Data");
             return;
          }
          
          if (data.info) {
            that.api = data;
          } else {
            console.log("Invalid Data");
          }
        };
        reader.readAsText(this.file);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
