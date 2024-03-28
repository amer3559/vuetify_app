<!-- DashboardPage.vue -->
<template>
  <div>
    <h1>Admin Dashboard</h1>
    <div>
      <v-card>
        <v-card-title>Key Metrics</v-card-title>
        <v-card-text> Total Posts: {{ totalPosts }} </v-card-text>
        <v-card-actions>
          <router-link to="/admin/posts">Manage Posts</router-link>
          <router-link to="/admin/posts/add">Add Posts</router-link>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalPosts() {
      return this.$store.state.posts.length;
    },
  },
};
</script>
