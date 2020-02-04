<template>
  <div id="app">
    <h3>All Posts template</h3>
    <post-template></post-template>
    
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      posts: [],
      url: {
        posts: 'https://jsonplaceholder.typicode.com/posts?_limit=3',
        users: 'https://jsonplaceholder.typicode.com/users',
        comments: 'https://jsonplaceholder.typicode.com/comments?postId=1'
      }
    }
  }
}
</script>

<style>
#app {
  font-size: 16px;
}
</style>
