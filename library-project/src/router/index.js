import Vue from "vue";
import VueRouter from "vue-router";
import BookStore from "../components/BookStore";
import BookList from "../components/BookList";
import UserOperation from '../components/UserOperation';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BookList",
    component: BookList
  },
  {
    path: "/bookstore",
    name: "BookStore",
    component: BookStore
  },
  {
    path: "/user",
    name: "UserOperation",
    component: UserOperation
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
