<template>
  <div>
    <h2>User {{ userID }} - {{ userName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'user-template',
  data() {
    return {
      usersURL: 'https://jsonplaceholder.typicode.com/users',
      users: [],
      userName: 'test'
    }
  },
  props: ['userID'],
  mounted() {
    this.getUserName();
  },
  methods: {
    getUserName() {
      this.axios.get(this.usersURL).then((response) => {
      this.users = response.data;
      this.userName = this.users.find(item => item.id == this.userID).name
      // console.log(this.userName);
      })
      .catch(error => {
        console.log('--- error ---');
        console.log(error);
      });
    }
  }
}
</script>