<!-- ManagePostsPage.vue -->
<template>
  <div>
    <h1>Manage Posts</h1>
    <div v-for="post in posts" :key="post.id">
      <v-card>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-text>{{ post.content }}</v-card-text>
        <v-card-actions>
          <router-link :to="'/admin/posts/edit/' + post.id">Edit</router-link>
          <v-btn @click="deletePost(post.id)" color="error">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    deletePost(postId) {
      // Call an action to delete the post with the given postId
      this.$store.dispatch("deletePost", postId);
    },
  },
};
</script>
