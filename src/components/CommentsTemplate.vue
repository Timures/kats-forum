<template>
  <div>
    <div v-for="comment in comments" :key="comment.id">
      <h4> Comments</h4>
      <p>{{ comment.name }}</p>
      <p>{{ comment.body }}</p>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'comments-template',
  props: ['postID'],
  data() {
    return {
      commentsURL: 'https://jsonplaceholder.typicode.com/comments?postId=',
      comments: []
    }
  },
  mounted() {
    this.getCommentsByID();
  },
  methods: {
    getCommentsByID() {
      this.axios.get(this.commentsURL + this.postID).then((response) => {
      this.comments = response.data;
      // this.userName = this.comments.find(item => item.id == this.postID)
      // console.log(this.comments);
      })
      .catch(error => {
        console.log('--- error ---');
        console.log(error);
      });
    }
  }
}
</script>