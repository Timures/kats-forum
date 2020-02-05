<template>
  <div>
    <div v-for="comment in comments" :key="comment.id" class="border p-3 comment">
      <div class="d-flex">
        <img src="https://placekitten.com/g/60/80" alt="cat photo" class="img-responsive float-left mr-2">
        <div>
          <div>
          <span class="font-weight-bold">{{ comment.name }}</span>
          <span class="username ml-1 text-secondary">промурчал</span>
        </div>
        <div> {{ comment.body }}</div>
        </div>
      </div>
     
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

<style scoped>
.comment {
  min-height: 100px;
}
img {
  max-height: 80px;
  max-width: 60px;
  min-height: 80px;
  min-width: 60px;
}
</style>