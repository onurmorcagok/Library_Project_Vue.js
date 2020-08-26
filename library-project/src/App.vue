<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  created(){
    this.$store.dispatch("initApp");
    window.vueInstance = this;
  }
};
</script>

<style>

</style>