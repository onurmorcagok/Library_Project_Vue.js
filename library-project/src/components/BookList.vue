<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5 card mt-5 shadow">
          <div class="card-body">
            <h3>Book List</h3>
            <hr />
            <table
              class="table table-hover table-striped table-bordered"
              v-if="getBooks.length > 0"
              style="text-align:center;"
            >
              <thead>
                <th>ID</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Image</th>
                <th>Comment</th>
                <th>Action</th>
              </thead>
              <tbody>
                <tr v-for="book in getBooks" v-bind:key="book.id">
                  <td class="align-middle text-center">
                    <span class="badge badge-info"> {{ book.id }}</span>
                  </td>
                  <td class="align-middle text-center">{{ book.bookName}}</td>
                  <td class="align-middle text-center">{{ book.author }}</td>
                  <td style="width: 120px;">{{ book.imageURL }}</td>
                  <td class="align-middle">{{ book.comment }}</td>
                  <td class="align-middle text-center">
                      <i class="fas fa-trash-alt text-danger">
                          <a href="#"></a>
                      </i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="alert alert-warning" v-else>
              <strong>No Records Found</strong>
              <br />
              <small>You can use the Book Transactions menu at the bottom of the page to add a record.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BookList",
  computed: {
    ...mapGetters(["getBooks"]),
  },
};
</script>

<style lang="scss" scoped>
</style>