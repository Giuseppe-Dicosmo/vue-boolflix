<template>
  <div id="app">
    <headerNav @genereParola="funzioneTrasferimentoParola" />
    <mainContent :listaMovies="movies" :listaSerieTV="tv" />
  </div>
</template>

<script>
import headerNav from "./components/headerNav.vue";
import mainContent from "./components/mainContent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    headerNav,
    mainContent,
  },
  data() {
    return {
      filtroGenere: "",
      movies: [],
      tv: [],
      baseURL: "https://api.themoviedb.org/3",
    };
  },
  methods: {
    funzioneTrasferimentoParola: function (ricerca) {
      this.filtroGenere = ricerca;
      this.arryFilmTv();
    },

    arryFilmTv: function () {
      axios
        .get(`${this.baseURL}/search/movie`, {
          params: {
            api_key: "04cbd33b4b9f5d7abe1052e820d20b94",
            query: this.filtroGenere,
            language: "it-IT",
          },
        })
        .then((res) => {
          // console.log("res.data", res.data);
          this.movies = res.data.results;
        })
        .catch((error) => {
          console.log("error.data", error.response);
        });

      axios
        .get(`${this.baseURL}/search/tv`, {
          params: {
            api_key: "04cbd33b4b9f5d7abe1052e820d20b94",
            query: this.filtroGenere,
            language: "it-IT",
          },
        })
        .then((res) => {
          // console.log("res.data", res.data);
          this.tv = res.data.results;
        })
        .catch((error) => {
          console.log("error.data", error.response);
        });
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
