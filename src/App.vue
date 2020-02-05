<template>
  <div id="app">
    <div class="container">
      <div class="row flex-column-reverse flex-md-row">
        <div class="col-md-9 col-sm-12">
          <div v-for="post in filteredPosts" :key="post.id+ '-post'" class="my-4 border row p-3 mr-3 mt-3 post">
             <div>
                <img src="https://placekitten.com/g/180/150" alt="cat photo" class="img-thumbnail float-left mr-3">
                <users-template :userID="post.userId" :users="users" :name="name"></users-template>
                  <div class="font-weight-bold">{{ post.title }}</div>
                
                <div class="float-right float-md-none">{{ post.body }} </div>
              </div>
            
            
            <div class="d-flex flex-column w-100">
              <!-- Element to collapse -->
              <b-collapse :id="'collapse-' + post.id">            
                <comments-template :postID="post.id"></comments-template>            
              </b-collapse>
              <!-- Using value -->
              <b-button v-b-toggle="'collapse-' + post.id" class="my-3 ml-auto" variant="outline-info">
                <span class="when-opened">Скрыть</span>
                <span class="when-closed">Открыть</span>
                комментарии
              </b-button> 
            </div>
            
              
                        
          </div>
        </div>
        <div class="col-md-3 col-sm-12 mt-4 filter p-3">
          <div class="title font-weight-bold">Фильтры</div>
          <div class="my-3">
            <div class="font-weight-bold">Имя/название</div>
            <input type="text" v-model="search" placeholder="show me">
          </div>

          <div>
            <div class="font-weight-bold">Контент</div>
            <input type="text" v-model="name" placeholder="show me">
          </div>
          
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
        posts: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
        users: 'https://jsonplaceholder.typicode.com/users'
      },
      posts: [],
      users: [],
      comments: [],
      clearUsers: [],
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
.post {
  background-color: #eff6ff;
}
.filter {
  background-color: #cecece;
}
.title {
  font-size: 18px;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
input[type="text"] {
  width: 100%;
}
.username {
  font-size: 15px;
}
</style>
