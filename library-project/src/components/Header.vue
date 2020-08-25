<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <router-link to="/" tag="a" class="navbar-brand">
      <a class="navbar-brand">Book Project</a>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/bookstore" tag="li" class="nav-item" active-class="active">
          <a class="nav-link text-white">Book Store Operations</a>
        </router-link>

        <router-link to="/user" tag="li" class="nav-item" active-class="active">
          <a class="nav-link text-white">User Operations</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
</style>