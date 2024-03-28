<!-- EditView.vue -->
<template>
  <div v-if="post">
    <h1>Edit View</h1>
    <form @submit.prevent="editData">
      <!-- Add your form fields here -->
      <input type="text" v-model="post.title" placeholder="Name" />
      <input type="text" v-model="post.content" placeholder="Description" />
      <button type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  created() {
    // Fetch post details from the store or API based on the route parameter and populate the post object
    const postId = this.$route.params.id;
    this.post = this.$store.state.posts.find((post) => post.id === postId);
  },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    editData() {
      const updatedPost = this.post;
      this.$store.dispatch("editPost", updatedPost);
    },
  },
};
</script>
