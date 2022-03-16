<template>
  <li>
    <figure>
      <img
        :src="`https://image.tmdb.org/t/p/w342/${propstv.poster_path}`"
        alt=""
      />
    </figure>
    <div class="info">
      <h4>{{ propstv.title }}</h4>
      <h5>{{ propstv.original_title }}</h5>
      <p>voto: {{ propstv.vote_average }}</p>
      <span v-if="propstv.original_language == 'en'"
        ><img src="../assets/united_kingdom_flags_flag_17079.png" alt=""
      /></span>
      <span v-else-if="propstv.original_language == 'it'"
        ><img src="../assets/italy_flags_flag_17018.png" alt=""
      /></span>
      <span v-else-if="propstv.original_language == 'es'"
        ><img src="../assets/spain_flags_flag_17068.png" alt=""
      /></span>
      <span v-else-if="propstv.original_language == 'ed'"
        ><img src="../assets/germany_flags_flag_17001.png" alt=""
      /></span>
      <span v-else>{{ propstv.original_language }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "listaSerie",
  props: {
    propstv: {
      type: Object,
      require: true,
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
}
</style>
