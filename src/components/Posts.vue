<template>
  <div>
    
    
    
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
      name: '',
      showPost: true
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