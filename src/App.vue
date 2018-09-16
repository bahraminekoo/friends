<template>
  <div id="app">
    <div class="left">
        <user-list />
    </div>
    <div class="right">
        <leaflet-map />
    </div>
  </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import axios from 'axios';
    import UserList from './components/UserList.vue';
    import LeafletMap from './components/LeafletMap.vue'

    export default {
        name: 'App',
        components: {
            UserList,
            LeafletMap,
        },
        mounted() {

            axios.get('http://www.json-generator.com/api/json/get/cfdlYqzrfS')
            .then(response => {
                // JSON responses are automatically parsed.
                this.addUserList(response.data)
            }).catch(e => {
                //state.errors.push(e)
            })
        },
    methods: {
        ...mapMutations([
            'FILL_IN_USERS'
        ]),
        addUserList: function(list) {
            this.FILL_IN_USERS(list)
        }
    }
    }
</script>
<style>

    @import "~leaflet/dist/leaflet.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 960px;
  margin-right:auto;
  margin-left: auto;
  border:1px solid blue;
}
.left {
  width: 480px;
  border:1px solid gray;
  float: left;
}
  .right {
    width: 470px;
    float:right;
  }

</style>
