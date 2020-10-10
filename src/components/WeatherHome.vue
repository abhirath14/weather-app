<template>
  <div class="main-container">
    <div>
      <img :src="imageURL" height="400" width="800" placeholder="Weather Image"/>
    </div>
    <div style="display: flex; justify-content:center;">
      <vs-input icon="search" class="search-bar-outer"  @keyup.enter = "getData" placeholder="City" v-model="place"/>
      <vs-button @click="getData()" class="go-button" color="primary" type="filled">Go</vs-button>
    </div>
    <br><br>
    <h2>Temperature: {{temperature}}</h2>
    <br>
    <h2>Weather: {{weather}}</h2>
  </div>
</template>

<script>
import {getWeatherData} from "@/services/WeatherService";
export default {
  async mounted() {
    try {
      await this.getData();
    } catch(err) {
      this.temperature = "Temperature could not be fetched";
      this.weather = "Weather could not be fetched";
    }
  },
  data() {
    return {
      place: 'Mumbai',
      temperature: 25,
      weather: 'Haze',
      imageURL: ''
    }
  },
  watch: {

  },
  methods: {
    async getData() {
      try {
        var data = await getWeatherData(this.place);
        this.temperature = parseFloat(data.main.temp - 273).toFixed(2);
        this.weather = data.weather[0].main;
        this.setImageURL(this.weather);
      } catch(err) {
        this.temperature = "Temperature could not be fetched";
        this.weather = "Weather could not be fetched";
      }
    },
    setImageURL(weather) {
      var images = require.context('../assets/', false, /\.jpg$/)
      switch(weather) {
        case 'Haze':
          this.imageURL = images('./' + 'haze' + ".jpg");
        break;
        case 'Smoke':
          this.imageURL = images('./' + 'haze' + ".jpg");
        break;
        case 'Clouds':
          this.imageURL = images('./' + 'cloudy' + ".jpg");
        break;
        case 'Clear':
          this.imageURL = images('./' + 'clear' + '.jpg');
        break;
        case 'Rain':
          this.imageURL = images('./' + 'rain' + '.jpg');
        break;
      }
    }
  }
}
</script>

<style lang="scss">
.main-container {
  width: 100%;
}
.search-bar-outer {
  width: 60%;
  .vs-con-input {
    height: 35px !important;
  }
  .vs-inputx {
    height: 35px !important;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.go-button {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
</style>