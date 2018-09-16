<template>
    <div>
{{center.lat}},{{center.lng}}
        <l-map ref="map" :zoom=12 style="height: 500px;" :center="[center.lat, center.lng]">
            ...
        </l-map>
    </div>
</template>

<script>

    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'


    export default {
        name: "GoogleMap",
        data() {
            return {
                // default to Montreal to keep it simple
                // change this to whatever makes sense
                center: { lat: this.$store.getters.GetSelectedUser.lat, lng: this.$store.getters.GetSelectedUser.lng },
                markers: [],
                places: [],
                currentPlace: null
            };
        },
        computed: {
            ...mapGetters([
                'GetSelectedUser'
            ])
        },
        mounted() {
            this.geolocate();
        },

        methods: {
            // receives a place object via the autocomplete component
            setPlace(place) {
                this.currentPlace = place;
            },
            addMarker() {
                if (this.currentPlace) {
                    const marker = {
                        lat: this.currentPlace.geometry.location.lat(),
                        lng: this.currentPlace.geometry.location.lng()
                    };
                    this.markers.push({ position: marker });
                    this.places.push(this.currentPlace);
                    this.center = marker;
                    this.currentPlace = null;
                }
            },
            geolocate: function() {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            }
        }
    };
</script>