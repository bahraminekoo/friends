<template>
  <div class="home">
    <user-list title="User List"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList.vue'

export default {
  name: 'home',
  components: {
      UserList
  }
}
</script>
