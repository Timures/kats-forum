<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-9">
          <h3>Posts</h3>
          
          
          <div v-for="post in filteredPosts" :key="post.id+ '-post'" class="my-4 border">
            <div>
              <users-template :userID="post.userId" :users="users" :name="name"></users-template>
            </div>
            

            {{ post.title }}
            {{ post.body }}
            
            <br />
            <comments-template :postID="post.id"></comments-template>
          </div>
        </div>
        <div class="col-3">
          <h3>Search</h3>
          <div class="my-3">
            <h4>Search in posts</h4>
            <input type="text" v-model="search" placeholder="show me">
          </div>

          <div>
            <h4>Search by name</h4>
            <input type="text" v-model="name" placeholder="show me">
          </div>
          
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'posts-template',
  props: ['posts', 'users'],
  data() {
    return {
      postID: '',
      userID: '',
      search: '',
      name: ''
    }
  },
  computed: {
    filteredPosts: function() {
      return this.posts.filter((post) => {
        return post.body.match(this.search);        
      });
    }
  }
}
</script>