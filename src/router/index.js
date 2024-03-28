import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import DashboardPage from "../views/DashboardView.vue";
import ManagePost from "../views/ManagePost.vue";
import EditView from "../views/EditView.vue";
import AddView from "../views/AddView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post/:id",
    name: "post",
    component: PostView,
    // component: () => import("../views/PostView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: DashboardPage,
    // component: () => import("../views/PostView.vue"),
  },
  {
    path: "/admin/posts",
    name: "adminpost",
    component: ManagePost,
    // component: () => import("../views/PostView.vue"),
  },
  {
    path: "/admin/posts/add",
    name: "addpost",
    component: AddView,
    // component: () => import("../views/PostView.vue"),
  },
  {
    path: "/admin/posts/edit/:id",
    name: "edit",
    component: EditView,
    // component: () => import("../views/PostView.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",../views/PostView.vue
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
