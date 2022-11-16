<template>
  <header>
    <figure>
      <img src="../assets/Boolflix.svg" alt="" />
    </figure>
    <input
      @keyup.enter="valoreRicerca"
      v-model="ricerca"
      class="text-cerca"
      placeholder="Cosa vorresti vedere"
      type="text"
    />
    <input
      @click="valoreRicerca"
      class="button-cerca"
      type="button"
      value="cerca"
    />
  </header>
</template>

<script>
import state from "../store.js";
import { arryFilmTv } from "../store.js";

export default {
  name: "headerNav",
  data() {
    return {
      ricerca: "",
    };
  },
  methods: {
    valoreRicerca: function () {
      if (this.ricerca.length > 0) {
        state.ricerca = this.ricerca;

        arryFilmTv();
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  height: 65px;
  // border: 1px solid red;ù
  position: sticky !important;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 15px;
  background: #3b3b3b;

  figure {
    position: absolute;
    left: 10px;

    img {
      width: 50%;
    }
  }

  .text-cerca {
    padding: 5px 10px;
    border-radius: 30px;
    text-align: center;
    font-size: 1.1em;
  }
  .button-cerca {
    background: red;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 1.1em;
    cursor: pointer;

    &:hover {
      background: #b20000;
    }
  }
}
</style>
