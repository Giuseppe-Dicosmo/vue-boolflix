<template>
  <main>
    <ul>
      <listaFilm v-for="film in movies" :key="film.id" :propsFilm="film" />
      <!-- <li >
        {{ film.title }}
      </li> -->
      <span>{{ parola }}</span>
    </ul>
  </main>
</template>

<script>
import axios from "axios";
import listaFilm from "./listaFilm.vue";

export default {
  name: "mainContent",
  components: {
    listaFilm,
  },
  props: {
    parola: {
      type: String,
      require: true,
      default: "non disponibile",
    },
  },
  data() {
    return {
      // ritorno al futuro
      // search: `batman`,
      movies: [],
      baseURL: "https://api.themoviedb.org/3",
    };
  },
  computed: {
    // filterfilm: function() {
      // this.search = this.parola;
    // if (this.parola === "") {
    // }
    // },
  },
  methods: {
    metodo1: function () {
      axios
        .get(`${this.baseURL}/search/movie`, {
          params: {
            api_key: "04cbd33b4b9f5d7abe1052e820d20b94",
            query: this.parola,
            language: "it-IT",
          },
        })
        .then((res) => {
          console.log("res.data", res.data);
          this.movies = res.data.results;
        })
        .catch((error) => {
          console.log("error.data", error.response);
        });
    }
  },
  created() {
    this.metodo1();
  },
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  ul {
    border: 2px solid green;
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    color: white;
  }
}
</style>
