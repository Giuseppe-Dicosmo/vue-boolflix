<template>
  <header>
    <input
      @keyup.enter="valoreDellaRicerca"
      v-model="ricerca"
      class="text-cerca"
      type="text"
    />
    <input @click="valoreDellaRicerca" type="button" value="cerca" />
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
  height: 40px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  // background: ;

  .text-cerca {
  }
}
</style>
