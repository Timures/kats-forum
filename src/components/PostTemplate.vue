<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="post_wrapper">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <p>{{ post.userId }}</p>
      <h2>{{ post.id }}</h2>
      <br />
      <user-template :userID="post.userId"></user-template>
      <comments-template :postID="post.id"></comments-template>
    </div>
    
    
    <br />
    
  </div>
</template>

<script>
export default {
  name: 'PostTemplate',
  data() {
    return {
      posts: [],
      user: 'test',
      url: {
        posts: 'https://jsonplaceholder.typicode.com/posts?_limit=15'
      }
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.axios.get(this.url.posts).then((response) => {
      this.posts = response.data;
        // console.log(this.posts.find(item => item).title);
      })
      .catch(error => {
        console.log('--- error ---');
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.post_wrapper {
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: lightblue;
  padding: 10px;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>