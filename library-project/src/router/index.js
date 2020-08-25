import Vue from "vue";
import VueRouter from "vue-router";
import Books from "../components/Books";
import BookList from "../components/BookList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BookList",
    component: BookList
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
  {
    path: "*",
    redirect: "/",
    component: BookList
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
