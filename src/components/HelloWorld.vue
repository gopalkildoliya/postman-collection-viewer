<template>
  <div class="columns">
    <div class="column is-3">
      <app-sidebar :api="api"></app-sidebar>
    </div>
    <div class="column is-9">
      <div>
        <div v-if="api.info" class="box">
          <h3>{{api.info.name}}</h3>
          <markdown-view :data="api.info.description"></markdown-view>
        </div>

      </div>
      <router-view :api="api"></router-view>
    </div>
  </div>

</template>

<script>
  import CollectionFolder from './CollectionFolder';
  import CollectionRequest from './CollectionRequest';
  import AppSidebar from './AppSidebar';
export default {
  name: 'HelloWorld',
  components: {CollectionFolder, CollectionRequest, AppSidebar},
  props: {
    msg: String
  },
  data() {
    return {
      api: {}
    }
  },
  mounted() {
    fetch('postman.json').then(response => response.json()).then(data => {
      console.log(data);
      this.api = data;
    }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    getPath(name){
      return `/#/api/${name}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
