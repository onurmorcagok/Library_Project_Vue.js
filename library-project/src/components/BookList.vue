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
              style="text-align:center;"
            >
              <thead>
                <th>ID</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Image</th>
                <th>Comment</th>
              </thead>
              <tbody>
                <tr>
                  <td class="align-middle text-center">
                    <span class="badge badge-info">E564fghdE563df</span>
                  </td>
                  <td class="align-middle text-center">Deneme</td>
                  <td class="align-middle text-center">1</td>
                  <td style="width: 120px;">10,000</td>
                  <td class="align-middle">Örnek Açıklama</td>
                </tr>
              </tbody>
            </table>
            <div class="alert alert-warning">
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
export default {
  name: "BookList",
};
</script>

<style lang="scss" scoped>
</style>