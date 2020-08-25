import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
  },
  mutations: {
    updateBookList(state, book) {
      state.books.push(book);
    },
  },
  actions: {
    initApp({ commit }) {
      // Vue Resource
    },
    saveBook({ commit, state }, payload) {
      Vue.http.post('https://library-project-d1260.firebaseio.com/books.json',payload)
      .then ((response) => {

        payload.id = response.body.name;
        commit("updateBookList", payload);
        
        console.log(state.books);

      })
    },
    deleteBook({ commit }, payload) {
      // Vue Resource
    },
  },
  getters: {
    getBooks(state) {
      return state.books;
    },
    getBook(state) {},
  },
});
