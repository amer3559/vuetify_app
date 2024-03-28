<!-- AddView.vue -->
<template>
  <div>
    <h1>Add View</h1>
    <form @submit.prevent="addData">
      <!-- Add your form fields here -->
      <input type="text" v-model="post.title" placeholder="Name" />
      <input type="text" v-model="post.content" placeholder="Description" />
      <button type="submit">add</button>
    </form>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    addData() {
      const updatedPost = this.post;
      this.$store.dispatch("addPost", updatedPost);
    },
  },
};
</script>
