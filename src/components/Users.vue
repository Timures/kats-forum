<template>
  <div>
    <div v-for="user in checkUser" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'users-template',
  props: ['userID','users', 'name'],
  computed: {
    currentUser: function() {
      return this.users.filter((user) => {
        return user.id == this.userID;
      });
    },
    checkUser: function() {
      return this.currentUser.filter((usr) => {
        return usr.name.match(this.name);
      });
    }
  }
}
</script>