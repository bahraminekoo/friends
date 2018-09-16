<template>
    <div>
        <div style="height: 10%; overflow: auto;">
            <h3>Friend Details</h3>
            <br />
            Location :  {{getCenter.lat}} ,  {{getCenter.lng}}
        </div>
        <l-map style="height: 500px" :zoom="zoom" :center="getCenter">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="getMarker"></l-marker>
        </l-map>
        <div>
            <p class="user-item">
                <img :src=getSelectedUser.picture width=40 height=40 />
                <span class="user-name">{{getSelectedUser.name}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

    export default {
        name: 'LeafletMap',
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        computed: {
            ...mapGetters([
                'getSelectedUser',
                'allUsers',
                'getCenter',
                'getMarker'
            ])
        },
        methods: {

        },
        data () {
            return {
                zoom:13,
                center: L.latLng(22.28552,114.15769),
                url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution:'&copy; <a href="http://moovup.hk">MoovUp</a> contributors',
                marker: L.latLng(22.28552,114.15769),
            }
        }
    }
</script>
<style scoped>
    .user-item {
        border-radius: 3px;
        margin: 0 5px 8px 5px;
        padding: 10px;
        text-align: left;
        background-color: #F5F5F5;
    }
    .user-item img {
        margin-right: 5px;
    }
    .user-item span {
        display: inline-block;
        margin-bottom: 0;
        position: relative;
        bottom: 15px;
    }
</style>