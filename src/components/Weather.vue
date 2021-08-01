<template>
  <div class="weather-container">
    <div class="location-box">
      <div class="location">Caracas, Venezuela</div>
      <div class="date">29 de Octubre</div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather'
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
  text-transform:  uppercase;
}
.location-box .date {
  font-size: 5vmin;
  font-weight: 400;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
}

</style>
