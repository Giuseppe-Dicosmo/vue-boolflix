<template>
  <header>
    <figure>
      <img src="../assets/Boolflix.svg" alt="">
    </figure>
    <input
      @keyup.enter="valoreDellaRicerca"
      v-model="ricerca"
      class="text-cerca"
      placeholder="cosa vorresti vedere"
      type="text"
    />
    <input @click="valoreDellaRicerca" class="button-cerca" type="button" value="cerca" />
  </header>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      ricerca: "",
    };
  },
  methods: {
    valoreDellaRicerca: function () {
      if (this.ricerca.length > 0) {
        this.$emit("genereParola", this.ricerca);
        this.ricerca = "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  height: 65px;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: #3b3b3b;

  figure {
    border: 1px solid red;

    img {
      max-width: 100%;
    }
  }

  .text-cerca {
    padding: 5px 10px;
    border-radius: 30px;
    text-align: center;
  }
  .button-cerca {
    background: red;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background: #b20000;
    }
  }
}
</style>
