<template>
  <div id='app' :class="this.background">
    <div class="container-main">
      <Search @search-input="setQuery" @keypress="searchQuery"></Search>
      <Weather :city="this.place.name" :country="this.place.country" :temp="this.weather.temp_c"
               :weather="this.condition.text"
               v-show="showBox"></Weather>
    </div>
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
      showBox: false,
      background: '',
      place: {},
      weather: {},
      condition: {}
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
      this.showBox = true
      this.place = results.location
      this.weather = results.current
      this.condition = results.current.condition
      this.setBackground()
    },
    setBackground () {
      const str = this.condition.text
      const temp = this.weather.temp_c
      if (str.includes('Lluvia') || str.includes('Aguanieve') || str.includes('Llovizna') || str.includes('precipitaciones') || str.includes('lluvia') || str.includes('aguanieve')) {
        this.background = 'rain'
      } else if (str.includes('Nieve') || str.includes('Nevada') || str.includes('nevada') || str.includes('Ventisca')) {
        this.background = 'snow'
      } else if (str.includes('Nublado') || str.includes('nublado') || str.includes('Neblina') || str.includes('Chubascos') || str.includes('chubasco') || str.includes('tormentosos')) {
        this.background = 'cloud'
      } else if (temp <= 30 && temp >= 20) {
        this.background = 'light'
      } else if (temp <= 19 && temp >= 5) {
        this.background = 'fresh'
      } else if (temp <= 4) {
        this.background = 'cold'
      } else {
        this.background = ''
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
  font-family: 'Oswald', sans-serif;
  background-image: url("./assets/bg-warm.jpg");
  background-size: cover;
  min-height: 100vh;
  transition: 1s;
  animation: ease-in;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#app .rain {
  background-image: url("./assets/bg-rain.jpg");
}

#app .snow {
  background-image: url("./assets/bg-snow.jpg");
}

#app .cloud {
  background-image: url("./assets/bg-cloud.jpg");
}
#app .light {
  background-image: url("./assets/bg-light.jpg");
}
#app .fresh {
  background-image: url("./assets/bg-fresh.jpg");
}
#app .cold {
  background-image: url("./assets/bg-cold.jpg");
}

.container-main {
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
</style>
