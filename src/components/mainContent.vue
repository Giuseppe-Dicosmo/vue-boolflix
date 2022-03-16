<template>
  <main>
    <ul>
      <h1 :class="listaMovies.length > 0 ? 'display-block' : 'display-none'">
        Film
      </h1>
      <listaFilm v-for="film in listaMovies" :key="film.id" :propsFilm="film" />
    </ul>
    <ul>
      <h1 :class="listaSerieTV.length > 0 ? 'display-block' : 'display-none'">
        Serie TV
      </h1>
      <listaSerie v-for="tv in listaSerieTV" :key="tv.id" :propstv="tv" />
    </ul>
  </main>
</template>

<script>
import listaFilm from "./listaFilm.vue";
import listaSerie from "./listaSerie.vue";

export default {
  name: "mainContent",
  components: {
    listaFilm,
    listaSerie,
  },
  props: {
    listaMovies: {
      require: true,
    },
    listaSerieTV: {
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    h1 {
      width: 100%;
      text-align: center;
    }
    border: 2px solid green;
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    color: white;
    margin-bottom: 50px;
  }
}

.display-block {
  display: block;
}
.display-none {
  display: none;
}
</style>
