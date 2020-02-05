<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-9">

          <posts-template :posts="posts" :users="users" :comments="comments">
          </posts-template>
        </div>

        <div class="col-md-3 bg-light mt-4">
          
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>


export default {  
  name: 'app',
  data() {
    return {
      url: {
        posts: 'https://jsonplaceholder.typicode.com/posts?_limit=15',
        users: 'https://jsonplaceholder.typicode.com/users'
      },
      posts: [],
      users: [],
      comments: [],
      clearUsers: []
    }    
  },
  mounted() {
    this.getPosts();
    this.getUsers();
  },
  methods: {
    getPosts() {
      this.axios.get(this.url.posts).then((response) => {
      this.posts = response.data;   
      })
      .catch(error => {
        console.log('--- error ---');
        console.log(error);
      });
    },
    getUsers() {
      this.axios.get(this.url.users).then((response) => {        
      this.users = response.data;
      })
      .catch(error => {
        console.log('--- error ---');
        console.log(error);
      });
    }
  }
}
</script>

<style>
#app {
  font-size: 16px;
}
</style>
