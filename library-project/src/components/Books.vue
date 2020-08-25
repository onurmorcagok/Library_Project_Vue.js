<template>
  <div><div class="container">
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Add New Book</h3>
                <hr>
                <div class="form-group">
                    <label>Book Name</label>
                    <input type="text" class="form-control" placeholder="Please enter book name">
                </div>
                <div class="form-group">
                    <label>Author</label>
                    <input type="text" class="form-control" placeholder="Please enter author">
                </div>
                <div class="form-group">
                    <label>Book Image</label>
                    <input type="text" class="form-control" placeholder="Book Image URL">
                </div>
                <div class="form-group">
                    <label>Comment</label>
                    <textarea cols="30" rows="5" placeholder="If you want, you can enter a description for the book..."
                              class="form-control"></textarea>
                </div>
                <hr>
                <button class="btn btn-primary">Save Book</button>
            </div>
        </div>
    </div>
</div></div>
</template>

<script>
export default {
  name: "Books",
};
</script>

<style lang="scss" scoped>
</style>