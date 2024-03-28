<!-- PostPage.vue -->
<template>
  <div>
    <h1>Post Page</h1>
    <v-card class="ma-5">
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>{{ post.content }}</v-card-text>
      <v-card-actions>
        <div>Number of likes: {{ post.likes }}</div>
        <v-btn @click="likePost" icon>
          <v-icon :color="liked ? 'red' : ''">mdi-heart</v-icon>
        </v-btn>
        <div>Tags:</div>
        <v-chip v-for="tag in post.tags" :key="tag" label color="primary">{{
          tag
        }}</v-chip>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        // id: 1,
        // title: "First Post",
        // content: "This is the content of the first post.",
        // likes: 10,
        // tags: ["tag1", "tag2"],
      },
      liked: false,
    };
  },
  mounted() {
    // Fetch post details from the store or API based on the route parameter and populate the post object
    // const postId = this.$route.params.id;
    // this.post = this.$store.state.posts.find((post) => post.id === postId);
  },
  methods: {
    likePost() {
      this.liked = !this.liked;
      if (this.liked) {
        // Call an action to increment likes for the post
        this.$store.dispatch("incrementLikes", this.post.id);
      } else {
        // Call an action to decrement likes for the post
        this.$store.dispatch("decrementLikes", this.post.id);
      }
    },
  },
};
</script>
