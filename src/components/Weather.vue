<template>
  <div class="weather-container">
    <div class="location-box">
      <div class="location">{{ city }}, {{ country }}</div>
      <div class="date">{{ dateNow () }}</div>
    </div>
    <div class="weather-box">
      <div class="temp">{{ temp }}°C</div>
      <div class="weather">{{ weather }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  props: {
    city: String,
    country: String,
    temp: Number,
    weather: String
  },
  methods: {
    dateNow () {
      const d = new Date()
      const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
      const day = days[d.getDay()]
      const date = d.getDate()
      const month = months[d.getMonth()]
      const year = d.getFullYear()
      return `${day} ${date} ${month} ${year}`
    }
  }
}
</script>

<style scoped>
.weather-container {
  display: flex;
  flex-flow: column nowrap;
  min-height: 20vw;
  justify-content: center;
}
@media only screen and (max-width: 640px) {
  .weather-container {
    margin-top: 30%
  }
}

.location-box .location {
  font-size: 10vmin;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}

.location-box .date {
  font-size: 5vmin;
  font-weight: 400;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
}

.weather-box .temp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 20vmin;
  font-weight: bolder;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #FFF;
  font-size: 9vmin;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
