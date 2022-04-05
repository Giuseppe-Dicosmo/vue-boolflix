import Vue from "vue";
import axios from "axios";


const state = Vue.observable({
  ricerca: "",
  movies: [],
  tv: [],
  baseURL: "https://api.themoviedb.org/3",

});

export default state;


export function arryFilmTv() {
      axios
        .get(`${state.baseURL}/search/movie`, {
          params: {
            api_key: "04cbd33b4b9f5d7abe1052e820d20b94",
            query: state.ricerca,
            language: "it-IT",
          },
        })
        .then((res) => {
          // console.log("res.data", res.data);
          state.movies = res.data.results;
        })
        .catch((error) => {
          console.log("error.data", error.response);
        });

      axios
        .get(`${state.baseURL}/search/tv`, {
          params: {
            api_key: "04cbd33b4b9f5d7abe1052e820d20b94",
            query: state.ricerca,
            language: "it-IT",
          },
        })
        .then((res) => {
          // console.log("res.data", res.data);
          state.tv = res.data.results;
        })
        .catch((error) => {
          console.log("error.data", error.response);
        });
    }