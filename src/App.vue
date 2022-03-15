<template>
  <div id="app">
    <headerNav @genereParola="FunzioneTrasferimentoParola" />
    <mainContent :parola="filtroGenere" />
  </div>
</template>

<script>
import headerNav from "./components/headerNav.vue";
import mainContent from "./components/mainContent.vue";

export default {
  name: "App",
  components: {
    headerNav,
    mainContent,
  },
  data() {
    return {
      filtroGenere: "",
    };
  },
  methods: {
    FunzioneTrasferimentoParola: function (ricerca) {
      this.filtroGenere = ricerca;
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
}
</style>
