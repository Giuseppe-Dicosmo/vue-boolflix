<template>
  <li>
    <figure>
      <img
        :src="`https://image.tmdb.org/t/p/w342/${propsFilm.poster_path}`"
        alt=""
      />
    </figure>
    <div class="info">
      <h4>{{ propsFilm.title }}</h4>
      <h5>{{ propsFilm.original_title }}</h5>

      <span
        v-for="(el, i) in 5"
        :key="i"
        :class="i < votoDiviso(propsFilm) ? 'star' : ''"
      >
        &starf;
      </span>

      <span v-if="propsFilm.original_language == 'en'"
        ><img src="../assets/united_kingdom_flags_flag_17079.png" alt=""
      /></span>
      <span v-else-if="propsFilm.original_language == 'it'"
        ><img src="../assets/italy_flags_flag_17018.png" alt=""
      /></span>
      <span v-else-if="propsFilm.original_language == 'es'"
        ><img src="../assets/spain_flags_flag_17068.png" alt=""
      /></span>
      <span v-else-if="propsFilm.original_language == 'ed'"
        ><img src="../assets/germany_flags_flag_17001.png" alt=""
      /></span>
      <span v-else>{{ propsFilm.original_language }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "listaFilm",
  props: {
    propsFilm: {
      type: Object,
      require: true,
    },
  },
  methods: {
    votoDiviso: function (propsFilm) {
      return Math.ceil(propsFilm.vote_average / 2);
    },
  },
};
</script>

<style scoped lang="scss">
li {
  border: 2px solid purple;
  text-align: center;
  width: 20%;
  // height: 10%;
  margin: 15px;

  figure {
    border: 2px solid firebrick;
    width: 100%;

    img {
      max-width: 100%;
    }
  }

  .star {
    color: yellow;
  }
}
</style>
