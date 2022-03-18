<template>
  <li>
    <figure>
      <img
        v-if="propsTv.poster_path"
        :src="`https://image.tmdb.org/t/p/w342/${propsTv.poster_path}`"
        alt=""
      />
      <img
        v-else
        src="https://www.altomolise.net/archivi/immagini/2014/S/segnale-tv-assente.jpg"
        alt=""
      />
    </figure>
    <div class="info">
      <h4>{{ propsTv.title }}</h4>
      <h5>{{ propsTv.original_title }}</h5>

      <div>
        <span
          v-for="(el, i) in 5"
          :key="i"
          :class="i < votoDiviso(propsTv) ? 'star' : ''"
        >
          &starf;
        </span>
      </div>

      <figure class="language">
        <img
          :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${flag(
            propsTv.original_language
          )}.svg`"
        />
      </figure>
    </div>
  </li>
</template>

<script>
export default {
  name: "listaSerie",
  props: {
    propsTv: {
      type: Object,
      require: true,
    },
  },
  methods: {
    flag: function (unicode) {
      if (unicode == "en") {
        unicode = "gb";
      }

      return unicode.toUpperCase();
    },

    votoDiviso: function (propsTv) {
      return Math.ceil(propsTv.vote_average / 2);
    },
  },
};
</script>

<style scoped lang="scss">
li {
  text-align: center;
  position: relative;
  margin: 15px;
  width: calc((100% / 5) - 30px);

  figure {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover > .info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background: rgba($color: #000000, $alpha: 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info {
    display: none;

    .language {
      width: 60px;
      height: 30px;
      // display: inline;

      img {
        max-width: 100%;
      }
    }
    .star {
      color: yellow;
    }
  }
}
@media screen and (max-width: 721px) {
  li {
    width: calc((100% / 3) - 30px);
  }
}

@media screen and (max-width: 321px) {
  li {
    width: calc((100% / 1) - 30px);
  }
}
</style>
