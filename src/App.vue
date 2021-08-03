<template>
  <div class="container-main">
    <Search @search-input="setQuery" @keypress="searchQuery"></Search>
    <Weather :city="this.place.name" :country="this.place.country" :temp="this.weather.temp_c"
             :weather="this.weather.condition.text"
             v-if="typeof this.place != 'undefined'"></Weather>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Weather from './components/Weather.vue'

export default {
  name: 'App',
  components: {
    Weather,
    Search
  },
  data () {
    return {
      api_key: 'c1116db5f8a5420c8c8204718213107',
      url_base: 'https://api.weatherapi.com/v1/',
      query: '',
      place: {},
      weather: {}
    }
  },
  methods: {
    setQuery (country) {
      this.query = country
    },
    async searchQuery (e) {
      if (e.key === 'Enter') {
        fetch(`${this.url_base}current.json?key=${this.api_key}&q=${this.query}&aqi=no&lang=es`).then(async res => {
          return res.json()
        }).then(this.setWeather)
      }
    },
    setWeather (results) {
      this.place = results.location
      this.weather = results.current
      console.log(results)
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
