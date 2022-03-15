<template>
  <div>
    <ul>
      <listaFilm v-for="film in movies" :key="film.id" />
      {{film.title}}
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import listaFilm from "./listaFilm.vue"

export default {
  name: "mainContent",
  components: {
    listaFilm
  },
  data() {
    return {
      movies: [],

    };
  },
  props: {
    parola: {
      type: String,
      default: "",
    },
  },
  methods: {
    metodo1: function () {
      axios
        .get("https://api.themoviedb.org/3/movie/550?api_key=04cbd33b4b9f5d7abe1052e820d20b94")
        .then((res) => {
          console.log("res.data", res.data);
        })
        .catch((error) => {
          console.log("error.data", error.response);
        });
    },
  },
  created() {
    this.metodo1();
  }
};
</script>

<style scoped lang="scss"></style>
