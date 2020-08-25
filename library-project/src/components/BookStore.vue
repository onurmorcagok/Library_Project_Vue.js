<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
          <div class="card-body">
            <h3>Add New Book</h3>
            <hr />
            <ValidationObserver>
            <div class="form-group">
              <label>Book Name</label>
               <ValidationProvider
              mode="passive"
              rules="required"
              >
              <input
                v-model="book.bookName"
                type="text"
                class="form-control"
                placeholder="Please enter book name"
              />
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label>Author</label>
              <ValidationProvider
              mode="passive"
              rules="required"
              >
              <input
                v-model="book.author"
                type="text"
                class="form-control"
                placeholder="Please enter author"
              />
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label>Book Image URL</label>
              <ValidationProvider
              mode="passive"
              rules="required"
              >
              <input
                v-model="book.imageURL"
                type="text"
                class="form-control"
                placeholder="Book Image URL"
              />
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label>Comment</label>
              <ValidationProvider
              mode="passive"
              rules="required"
              >
              <textarea
                v-model="book.comment"
                cols="30"
                rows="5"
                placeholder="If you want, you can enter a description for the book..."
                class="form-control"
              ></textarea>
              </ValidationProvider>
            </div>
            <hr />
            <button class="btn btn-success" :disabled="saveEnable" @click="saveBook">Save Book</button>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "Books",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      book: {
        bookName: "",
        author: "",
        imageURL: "",
        comment: "",
        saveButtonClick: false,
      },
    };
  },
  methods: {
    saveBook() {
      this.saveButtonClick = true;
      this.$store.dispatch("saveBook", this.book);
    },
  },
  computed: {
    // Validation
    saveEnable() {
      if (
        this.book.bookName.length > 0 &&
        this.book.author.length > 0 &&
        this.book.imageURL.length > 0 &&
        this.book.comment.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.book.bookName.length > 0 ||
      this.book.author.length > 0 ||
      this.book.imageURL.length > 0 ||
      this.book.comment.length > 0)  && !this.saveButtonClick ){
      if (confirm("There are unsaved changes. Still want to quit?")) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style lang="scss" scoped>
</style>