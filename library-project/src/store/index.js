import Vue from "vue";
import Vuex from "vuex";
import { router } from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
  },
  mutations: {
    updateBookList(state, book) {
      state.books.push(book);
    },
    deleteBookList(state,book){
      state.books.remove(book);
    }
  },
  actions: {
    initApp({ commit }) {
      Vue.http
        .get("https://library-project-d1260.firebaseio.com/books.json")
        .then((response) => {
          const data = response.body;
          for (let id in data) {
            data[id].id = id;
            commit("updateBookList", data[id]);
          }
        });
    },
    saveBook({ commit, state }, payload) {
      Vue.http
        .post(
          "https://library-project-d1260.firebaseio.com/books.json",
          payload
        )
        .then((response) => {
          payload.id = response.body.name;

          commit("updateBookList", payload);

          console.log(state.books);

          router.replace("/");
        });
    },
    deleteBook({ commit }, payload) {
      Vue.http
        .delete(
          "https://library-project-d1260.firebaseio.com/books.json",
          payload
        )
        .then((response) => {

          payload.id = response.body.name;

          commit("deleteBookList", payload);

          router.replace("/");
        });
    },
  },
  getters: {
    getBooks(state) {
      return state.books;
    },
    getBook(state) {},
  },
});
