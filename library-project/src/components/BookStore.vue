<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
          <div class="card-body">
            <h3>Add New Book</h3>
            <hr />
            <div class="form-group">
              <label>Book Name</label>
              <input
                v-model="book.bookName"
                type="text"
                class="form-control"
                placeholder="Please enter book name"
              />
            </div>
            <div class="form-group">
              <label>Author</label>
              <input
                v-model="book.author"
                type="text"
                class="form-control"
                placeholder="Please enter author"
              />
            </div>
            <div class="form-group">
              <label>Book Image</label>
              <input
                v-model="book.imageURL"
                type="text"
                class="form-control"
                placeholder="Book Image URL"
              />
            </div>
            <div class="form-group">
              <label>Comment</label>
              <textarea
                v-model="book.comment"
                cols="30"
                rows="5"
                placeholder="If you want, you can enter a description for the book..."
                class="form-control"
              ></textarea>
            </div>
            <hr />
            <button class="btn btn-success" @click="saveBook">Save Book</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Books",
  data() {
    return {
      book: {
        bookName: "",
        author: "",
        imageURL: "",
        comment: "",
      },
    };
  },
  methods: {
      saveBook(){
          this.$store.dispatch("saveBook", this.book);
      }
  }
};
</script>

<style lang="scss" scoped>
</style>