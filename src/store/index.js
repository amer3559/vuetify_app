// store.js
import { createApp } from "vue";
import Vuex from "vuex";

createApp().use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      // {
      //   id: 1,
      //   title: "First Post",
      //   content: "This is the content of the first post.",
      //   likes: 10,
      //   tags: ["tag1", "tag2"],
      // },
      // {
      //   id: 2,
      //   title: "Second Post",
      //   content: "This is the content of the second post.",
      //   likes: 5,
      //   tags: ["tag2", "tag3"],
      // },
    ],
  },
  mutations: {
    updatePost(state, updatedPost) {
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...updatedPost };
      }
    },
    addPost(state, post) {
      state.posts.push(post);
      console.log(state);
    },
    deletePost(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
  actions: {
    addPost({ commit }, newPost) {
      commit("addPost", newPost);
    },
    editPost({ commit }, updatedPost) {
      commit("updatePost", updatedPost);
    },
    async fetchPosts({ commit }) {
      const response = await fetch("/api/posts");
      const posts = await response.json();
      commit("setPosts", posts);
    },
    async createPost({ commit }, post) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newPost = await response.json();
      commit("addPost", newPost);
    },
    async deletePost({ commit }, postId) {
      await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });
      commit("deletePost", postId);
    },
  },
});
