<template>
  <div class="weather-container">
    <div class="location-box">
      <div class="location">{{city}}, {{country}} </div>
      <div class="date">29 de Octubre</div>
    </div>
    <div class="weather-box">
      <div class="temp">{{temp}}°C</div>
      <div class="weather">{{weather}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  props: {
    city: Object,
    country: Object,
    temp: Object,
    weather: Object
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
.location-box .location {
  font-size: 8vmin;
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
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
