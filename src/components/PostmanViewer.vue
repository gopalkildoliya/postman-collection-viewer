<template>
  <div>
  <app-nav></app-nav>
  <div class="columns" style="padding-top:20px">
    <div class="column is-3 is-hidden-mobile">

      <app-sidebar :collection="collection"></app-sidebar>
    </div>
    <div class="column is-9" style="padding-top:10px;">
    <section style="padding:5px;">
      <div class="columns">
        <div class="column">
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
        </div>
        <div class="column is-1 is-hidden-mobile">
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
        <section v-if="collection">
            <div style="padding: 5px;">
                <div v-if="collection.name" class="box">
                    <a id="api-home"></a>
                    <h3 class="title">{{collection.name}}</h3>
                    <div v-if="collection.description">
                        <markdown-view :data="collection.description.toString()"></markdown-view>
                    </div>
                </div>

            </div>
            <div style="padding: 5px;" v-if="collection">
                <div v-for="innerItem in collection.items.all()">
                    <collection-folder v-if="isItemGroup(innerItem)" :item="innerItem" :collection="collection"></collection-folder>
                    <collection-request v-else :item="innerItem" :collection="collection"></collection-request>
                </div>
            </div>
        </section>


    </div>
  </div>
</div>
</template>

<script>
    import {Collection} from 'postman-collection'
  import CollectionFolder from './CollectionFolder';
  import CollectionRequest from './CollectionRequest';
  import RequestView from './RequestView';
  import AppSidebar from './AppSidebar';
  import AppNav from './AppNav';
  import collectionMixin from "../mixin/collectionMixin";
export default {
  name: 'PostmanViewer',
  components: {CollectionFolder, CollectionRequest, AppSidebar, RequestView, AppNav},
  mixins: [collectionMixin],
  props: {
    msg: String
  },
  data() {
    return {
      url: '',
      file: null,
      collection: null,
    }
  },
  mounted() {
    let url = localStorage.getItem('apiUrl') || 'https://raw.githubusercontent.com/gothinkster/realworld/master/api/Conduit.postman_collection.json';
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
          localStorage.setItem('apiUrl', url);
          this.loadCollection(data);
        }).catch(error => {
          console.log(error);
        });
    },
    uploadFile() {
      let that = this;
      let reader = new FileReader();
        reader.onload = function(){
          var text = reader.result;
          try {
              var data = JSON.parse(text);
          } catch (e) {
             console.log("Invalid Data");
             return;
          }

          if (data.info) {
            that.loadCollection(data);
          } else {
            console.log("Invalid Data");
          }
        };
        reader.readAsText(this.file);
    },
      loadCollection(data) {
        this.collection = new Collection(data);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
