<!-- BlogPage.vue -->
<template>
  <div>
    <h1>Blog Page</h1>
    <div v-for="post in posts" :key="post.id">
      <v-card class="ma-5">
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-text>{{ post.content }}</v-card-text>
        <v-card-actions>
          <router-link :to="'/post/' + post.id">Read more</router-link>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // Fetch posts from the store or API and populate the posts array
    this.posts = this.$store.state.posts;
  },
};
</script>
