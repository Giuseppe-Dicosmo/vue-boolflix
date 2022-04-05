<template>
  <div id="app">
    <!-- @genereParola="funzioneTrasferimentoParola" -->
    <headerNav />
    <mainContent :listaMovies="movies" :listaSerieTV="tv" />
  </div>
</template>

<script>
import headerNav from "./components/headerNav.vue";
import mainContent from "./components/mainContent.vue";
// import axios from "axios";
import state from "./store.js";

export default {
  name: "App",
  components: {
    headerNav,
    mainContent,
  },
  computed: {
    movies: function () {
      return state.movies;
    },

    tv: function () {
      return state.tv;
    },

    search: function () {
      return state.ricerca;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_style.scss";

* {
  @include reset;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // border: 1px solid red;
  width: 100%;
  min-height: 100vh;
  background: black;
}
</style>
