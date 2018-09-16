import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            users: [],
            errors: [],
            selectedUser: {
                id: '',
                picture: '',
                name: '',
                lat: 0.0,
                lng: 0.0
            },
            center: L.latLng(22.28552,114.15769),
            marker: L.latLng(22.28552,114.15769),
        },
        getters: {
            getSelectedUser: (state) => state.selectedUser,
            allUsers:(state) => state.users,
            getCenter: (state) => state.center,
            getMarker: (state) => state.marker,
        },
        mutations: {

            FILL_IN_USERS: (state, list) => {
                state.users = list;
                state.selectedUser.name = list[0].name;
                state.selectedUser.lat = list[0].location.latitude;
                state.selectedUser.lng = list[0].location.longitude;
                state.selectedUser.id = list[0]._id;
                state.selectedUser.picture = list[0].picture;
                state.center = L.latLng(list[0].location.latitude,list[0].location.longitude);
                state.marker = L.latLng(list[0].location.latitude,list[0].location.longitude);
            },
            SET_SELECTED_USER: (state, user) => {
                state.selectedUser.name = user.name;
                state.selectedUser.lat = user.location.latitude;
                state.selectedUser.lng = user.location.longitude;
                state.selectedUser.id = user._id;
                state.selectedUser.picture = user.picture;
                state.center = L.latLng(user.location.latitude,user.location.longitude);
                state.marker = L.latLng(user.location.latitude,user.location.longitude);
            }
        },
        actions: {
            setSelectedUser: (context, user) => {
                context.commit("SET_SELECTED_USER", user)
            }
        }
})
