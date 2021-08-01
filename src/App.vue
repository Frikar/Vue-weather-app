<template>
  <div class="container-main">
    <Search @search-input="setQuery" @keypress="searchQuery"></Search>
    {{ query }}
    <Weather></Weather>
  </div>
</template>

<script>
import Search from '@/components/Search'
import Weather from '@/components/Weather'

export default {
  name: 'App',
  components: {
    Weather,
    Search
  },
  data () {
    return {
      api_key: 'c1116db5f8a5420c8c8204718213107',
      url_base: 'http://api.weatherapi.com/v1/',
      query: '',
      weather: {}
    }
  },
  methods: {
    setQuery (country) {
      this.query = country
    },
    searchQuery (e) {
      if (e.key === 'Enter') {
        console.log('Estoy buscando')
        alert('Buscaste ' + this.query)
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url("./assets/bg-warm.jpg");
  background-size: cover;
  min-height: 100vh;
  transition: 0.4s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

.container-main {
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
</style>
