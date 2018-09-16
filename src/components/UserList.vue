<template>
    <div>
        <h1>All Friends</h1>

        <div class="user-list">
            <p v-for="(user, index) in allUsers" v-bind:key="index" class="user-item" @click="setSelectedUsers(user)">
                <img :src=user.picture width=40 height=40 />
                <span class="user-name">{{user.name}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
    import axios from 'axios';

    export default {
        name: 'App',
        computed: {
            ...mapGetters([
                'allUsers'
            ])
        },
        methods: {
            ...mapActions([                  // Add this
                'setSelectedUser'
            ]),
            setSelectedUsers: function(user) {
                this.setSelectedUser(user)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .user-list {
        background-color: #eff3f6;
    }
    .user-item {
        border-radius: 3px;
        margin: 0 5px 8px 5px;
        padding: 10px;
        text-align: left;
        background-color: #F5F5F5;
    }
    .user-item:hover {
        background-color: #C0C0C0;
        cursor: pointer;
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
